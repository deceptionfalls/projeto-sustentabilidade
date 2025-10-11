# pylint: disable=import-error
from typing import Annotated, List

from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from .models import Ecoponto
from .schemas import EcopontoOutput, LocationQuery
from .database import Base, engine, get_db
from .geocoding import get_coordinates_from_cep
from .helpers import filtrar_pesquisa, organizar_locais

app = FastAPI()
Base.metadata.create_all(bind=engine)

origins = [
        "http://localhost",
        "http://localhost:5173",
]

app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
)

@app.get("/ecopontos/buscar/", response_model=List[EcopontoOutput])
async def buscar_ecopontos(
    db: Annotated[Session, Depends(get_db)],
    query: LocationQuery = Depends(),
):
    """Busca localizações baseada no CEP e nos filtros em LocationQuery"""


    locais = filtrar_pesquisa(
        db,
        query.cidade,
        query.estado,
    )

    for local in locais:
        local.hora_aberto = str(local.hora_aberto) if local.hora_aberto else None
        local.hora_fechado = str(local.hora_fechado) if local.hora_fechado else None

    if query.cep is not None:
        user_lat, user_lon = await get_coordinates_from_cep(query.cep)
        locais_organizados = organizar_locais(locais, user_lat, user_lon)
        return locais_organizados
    else:
        return locais

@app.get("/cidades/")
async def get_cidades(db: Annotated[Session, Depends(get_db)]):
    """Retorna lista de cidades únicas presentes no banco de dados"""

    cidades = db.query(Ecoponto.cidade).distinct().all()
    return [cidade[0] for cidade in cidades if cidade[0]]
