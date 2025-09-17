from sqlalchemy import Integer, String, Column, Boolean, Float, Time
from database import Base


class Ecoponto(Base):
    """Esta classe representa um ecoponto."""

    __tablename__ = "tbEcoponto"
    id = Column(Integer, primary_key=True, autoincrement=True)
    nome_local = Column(String(100), nullable=False)
    endereco = Column(String(200), nullable=False)
    imagem_url = Column(String, nullable=True)
    cidade = Column(String(50), nullable=False)
    estado = Column(String(2), nullable=False)
    telefone = Column(String(9), nullable=True)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    hora_aberto = Column(Time, nullable=True)
    hora_fechado = Column(Time, nullable=True)
    aceita_entulho = Column(Boolean, default=False, nullable=False)
    aceita_construcao = Column(Boolean, default=False, nullable=False)
    aceita_papel = Column(Boolean, default=False, nullable=False)
    aceita_papelao = Column(Boolean, default=False, nullable=False)
    aceita_vidro = Column(Boolean, default=False, nullable=False)
    aceita_metal = Column(Boolean, default=False, nullable=False)
    aceita_movel = Column(Boolean, default=False, nullable=False)
    aceita_poda_arvore = Column(Boolean, default=False, nullable=False)
    aceita_bateria = Column(Boolean, default=False, nullable=False)
    aceita_monitor = Column(Boolean, default=False, nullable=False)
    aceita_celular = Column(Boolean, default=False, nullable=False)
    aceita_impressora = Column(Boolean, default=False, nullable=False)
