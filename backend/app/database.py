from sqlalchemy import create_engine, declarative_base
from sqlalchemy.orm import sessionmaker
from config import settings

Base = declarative_base()

engine = create_engine(settings.APP_DB_URL)
Session = sessionmaker(bind=engine)


def get_db():
    session = Session()

    try:
        yield session
    finally:
        session.close()
