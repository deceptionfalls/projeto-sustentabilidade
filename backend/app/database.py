# pylint: disable=import-error
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from .config import settings

Base = declarative_base()

engine = create_engine(settings.APP_DB_URL)

print(f"Conectando-se a {settings.APP_DB_URL}")

Session = sessionmaker(bind=engine)


def get_db():
    """Função que administra o ciclo de vida do banco de dados.
    Cria uma sessão toda vez que a função é chamada."""

    session = Session()

    try:
        yield session  # Garante que a função só termina depois que a sessão é finalizada
    finally:
        session.close()
