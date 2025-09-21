# pylint: disable=import-error
import os
from pydantic_settings import BaseSettings
from dotenv import load_dotenv

load_dotenv()

APP_DB_URL = os.getenv("APP_DB_URL")


class Settings(BaseSettings):
    """Define o tipo de dados das credenciais do arquivo .env"""

    APP_DB_URL: str

    class Config:
        """Determina qual arquivo estamos procurando"""

        case_sensitive = False
        env_file = ".env"


settings = Settings()
