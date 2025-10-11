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
    cidade: Optional[str] = None,
    estado: Optional[str] = None,
) -> List[Ecoponto]:
    """Função helper que processa filtros da pesquisa.
    Suporta filtragem por cidade e estado"""

    db_query = db.query(Ecoponto)

    if estado and estado.strip(): db_query = db_query.filter(Ecoponto.estado == estado)
    if cidade and cidade.strip(): db_query = db_query.filter(Ecoponto.cidade == cidade)

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
