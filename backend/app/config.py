# pylint: disable=import-error
from pydantic import BaseSettings


class Settings(BaseSettings):
    """Define o tipo de dados das credenciais do arquivo .env"""

    APP_DB_URL: str

    class Config:
        """Determina qual arquivo estamos procurando"""

        case_sensitive = False
        env_file = ".env"


settings = Settings()
