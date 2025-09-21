# pylint: disable=import-error
from typing import Optional
from pydantic import BaseModel


class EcopontoOutput(BaseModel):
    """Esta classe contém a informação sobre um ecoponto que será enviada para o frontend."""

    id: int
    nome_local: str
    endereco: str
    imagem_url: str
    cidade: str
    estado: str
    telefone: Optional[str] = None
    latitude: float
    longitude: float
    hora_aberto: Optional[str] = None
    hora_fechado: Optional[str] = None
    distancia: float
    aceita_entulho: bool
    aceita_construcao: bool
    aceita_papel: bool
    aceita_papelao: bool
    aceita_vidro: bool
    aceita_metal: bool
    aceita_movel: bool
    aceita_poda_arvore: bool
    aceita_bateria: bool
    aceita_monitor: bool
    aceita_celular: bool
    aceita_impressora: bool


class LocationQuery(BaseModel):
    """Esta classe define e valida a informação de busca que a API receberá do frontend."""

    cep: Optional[str] = None
    tipo_lixo_aceito: Optional[str] = None
    excluir_tipo_lixo: Optional[str] = None
    cidade: Optional[str] = None
    estado: Optional[str] = None
