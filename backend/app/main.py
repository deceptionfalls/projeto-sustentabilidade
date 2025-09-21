# pylint: disable=import-error
from typing import Annotated, List

from fastapi import FastAPI, Depends
from sqlalchemy import Session

from schemas import EcopontoOutput, LocationQuery
from database import get_db
from geocoding import get_coordinates_from_cep
from helpers import filtrar_pesquisa, organizar_locais

app = FastAPI()

# TODO: Documentação apropriada que realmente descreve o que cada função faz


@app.get("/ecopontos/", response_model=List[EcopontoOutput])
async def get_all_ecopontos():
    """Dry-run que mostra todos os resultados"""


@app.get("/ecopontos/buscar/", response_model=List[EcopontoOutput])
async def buscar_ecopontos(
    query: LocationQuery,
    db: Annotated[Session, Depends(get_db)],
):
    """Busca localizações baseada no CEP e nos filtros em LocationQuery"""

    if query.cep is not None:
        user_lat, user_lon = await get_coordinates_from_cep(query.cep)

        locais = filtrar_pesquisa(
            db,
            query.tipo_lixo_aceito,
            query.excluir_tipo_lixo,
            query.cidade,
            query.estado,
        )

        locais_organizados = organizar_locais(locais, user_lat, user_lon)

        return locais_organizados
    else:
        locais = filtrar_pesquisa(
            db,
            query.tipo_lixo_aceito,
            query.excluir_tipo_lixo,
            query.cidade,
            query.estado,
        )

        return locais
