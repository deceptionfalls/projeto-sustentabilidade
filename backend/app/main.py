from typing import Annotated, Optional, List
from fastapi import FastAPI, Depends
from sqlalchemy import Session
from pydantic import BaseModel

from models import Ecoponto
from schemas import EcopontoOutput, LocationQuery
from database import get_db
from geocoding import get_coordinates_from_cep
from helpers import calcular_distancia, filtrar_pesquisa, organizar_locais

app = FastAPI()

# TODO: Mais filtros
# TODO: Documentação apropriada que realmente descreve o que cada função faz


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
