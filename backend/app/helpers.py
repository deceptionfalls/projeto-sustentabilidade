# pylint: disable=import-error
# pylint: disable=singleton-comparison
from math import radians, sin, cos, asin, sqrt
from typing import Annotated, Optional, List

from sqlalchemy.orm import Session
from fastapi import Depends

from .database import get_db
from .models import Ecoponto


# Sinceramente, eu poderia usar uma biblioteca externa para fazer esse cálculo, mas eu queria me exibir
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
    db: Annotated[Session, Depends(get_db)],
    tipo_lixo_aceito: Optional[str] = None,
    excluir_tipo_lixo: Optional[str] = None,
    cidade: Optional[str] = None,
    estado: Optional[str] = None,
) -> List[Ecoponto]:
    """Função helper que processa filtros da pesquisa.
    Suporta filtragem por cidade e estado e a exclusão
    de materiais designados pelo usuário"""

    opcoes = {
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

    if tipo_lixo_aceito is not None and tipo_lixo_aceito in opcoes:
        coluna = opcoes[tipo_lixo_aceito]
        db_query = db_query.filter(coluna == True)
    if excluir_tipo_lixo is not None and excluir_tipo_lixo in opcoes:
        coluna = opcoes[excluir_tipo_lixo]
        db_query = db_query.filter(coluna == False)
    if estado is not None:
        db_query = db_query.filter(Ecoponto.estado == estado)
    if cidade is not None:
        db_query = db_query.filter(Ecoponto.cidade == cidade)

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
