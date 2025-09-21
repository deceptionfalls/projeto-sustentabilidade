# pylint: disable=import-error
from typing import Annotated, List

from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from .schemas import EcopontoOutput, LocationQuery
from .database import Base, engine, get_db
from .geocoding import get_coordinates_from_cep
from .helpers import filtrar_pesquisa, organizar_locais

app = FastAPI()
Base.metadata.create_all(bind=engine)

# TODO: Documentação apropriada que realmente descreve o que cada função faz


@app.get("/ecopontos/buscar/", response_model=List[EcopontoOutput])
async def buscar_ecopontos(
    db: Annotated[Session, Depends(get_db)],
    query: LocationQuery = Depends(),
):
    """Busca localizações baseada no CEP e nos filtros em LocationQuery"""

    locais = filtrar_pesquisa(
        db,
        query.tipo_lixo_aceito,
        query.excluir_tipo_lixo,
        query.cidade,
        query.estado,
    )

    for local in locais:
        local.hora_aberto = str(local.hora_aberto) if local.hora_aberto else None
        local.hora_fechado = str(local.hora_fechado) if local.hora_fechado else None
        if not hasattr(local, "distancia"):
            local.distancia = 0.0

    if query.cep is not None:
        user_lat, user_lon = await get_coordinates_from_cep(query.cep)
        locais_organizados = organizar_locais(locais, user_lat, user_lon)
        return locais_organizados
    else:
        return locais
