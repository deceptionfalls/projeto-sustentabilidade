from math import radians, sin, cos, asin, sqrt

from typing import Annotated, Optional, List
from fastapi import FastAPI, Depends
from sqlalchemy import Session
from pydantic import BaseModel

from models import Ecoponto
from schemas import EcopontoOutput, LocationQuery
from database import get_db
from geocoding import get_coordinates_from_cep

app = FastAPI()

# TODO: Mais filtros
# TODO: Mais refatoração, funções podem ser separadas em outros arquivos
# TODO: Documentação apropriada que realmente descreve o que cada função faz


def calcular_distancia(
    user_lat: float, user_lon: float, local_lat: float, local_lon: float
) -> float:
    """Função helper que calcula a distância entre dois locais usando a fórmula de Haversine"""

    # conversão graus para radianos
    user_lat, user_lon = radians(user_lat), radians(user_lon)
    local_lat, local_lon = radians(local_lat), radians(local_lon)

    # diferença entre os valores
    delta_lat = local_lat - user_lat
    delta_lon = local_lon - user_lon

    # fórmula de haversine
    def haversine(a):
        return sin((a / 2)) ** 2

    hav_lat, hav_lon = haversine(delta_lat), haversine(delta_lon)

    # combinando os termos e calculando o ângulo central
    a = hav_lat + cos(user_lat) * cos(local_lat) * hav_lon
    c = 2 * asin((sqrt(a)))

    # c multiplicado pela circunferência da terra
    return c * 6371


# TODO: Adicionar uma maneira de filtar locais pelo horário de abertura/fechamento
def filtrar_pesquisa(
    db: Session,
    filtro_tipo_lixo_aceito: Optional[str] = None,
    filtro_cidade: Optional[str] = None,
    filtro_estado: Optional[str] = None,
) -> List[Ecoponto]:
    """Função helper que processa os filtros da pesquisa"""

    tipos_lixo = {
        "entulho": Ecoponto.aceita_entulho,
        "construcao": Ecoponto.aceita_construcao,
        "papel": Ecoponto.aceita_papel,
        "papelao": Ecoponto.aceita_papelao,
        "vidro": Ecoponto.aceita_vidro,
        "metal": Ecoponto.aceita_metal,
        "movel": Ecoponto.aceita_movel,
        "poda_arvore": Ecoponto.aceita_poda_arvore,
        "bateria": Ecoponto.aceita_bateria,
        "monitor": Ecoponto.aceita_monitor,
        "celular": Ecoponto.aceita_celular,
        "impressora": Ecoponto.aceita_impressora,
    }

    db_query = db.query(Ecoponto)

    if (
        filtro_tipo_lixo_aceito is not None and filtro_tipo_lixo_aceito in tipos_lixo
    ):  # pylint: disable=singleton-comparison
        coluna = tipos_lixo[filtro_tipo_lixo_aceito]
        db_query = db_query.filter(coluna == True)
    if filtro_estado is not None:
        db_query = db_query.filter(Ecoponto.estado == filtro_estado)
    if filtro_cidade is not None:
        db_query = db_query.filter(Ecoponto.cidade == filtro_cidade)

    return db_query.all()


def organizar_locais(
    locations: List[Ecoponto], user_lat: float, user_lon: float
) -> List[Ecoponto]:
    """Função helper que organiza localizações por proximidade"""
    for location in locations:
        location.distancia = calcular_distancia(
            user_lat, user_lon, location.latitude, location.longitude
        )

    return sorted(locations, key=lambda x: x.distancia)


@app.get("/ecopontos/", response_model=List[EcopontoOutput])
async def get_ecoponto(query: LocationQuery, db: Annotated[Session, Depends(get_db)]):
    """Função GET que obtém informação dos ecopontos"""

    user_lat, user_lon = await get_coordinates_from_cep(query.cep)
    locais = filtrar_pesquisa(db, query.tipo_lixo_aceito)
    locais_organizados = organizar_locais(locais, user_lat, user_lon)

    return locais_organizados


@app.get("/ecopontos/all/", response_model=List[EcopontoOutput])
async def get_dry_ecopontos():
    """Dry-run que mostra todos os resultados"""


@app.get("/ecopontos/proximos/", response_model=List[EcopontoOutput])
async def get_proximos(
    latitude: float,
    longitude: float,
    tipo_lixo_aceito: Optional[str] = None,
    db: Annotated[Session, Depends(get_db)] = Depends(get_db),
):
    """Obtém ecopontos próximos da localização do usuário"""

    locais = filtrar_pesquisa(db, tipo_lixo_aceito)
    locais_organizados = organizar_locais(locais, latitude, longitude)

    return locais_organizados
