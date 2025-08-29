from pydantic import BaseSettings


class Settings(BaseSettings):
    APP_DB_URL: str

    class Config:
        case_sensitive = False
        env_file = ".env"


settings = Settings()
