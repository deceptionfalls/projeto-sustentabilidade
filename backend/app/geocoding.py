# pylint: disable=import-error
import httpx
from fastapi import HTTPException


async def get_coordinates_from_cep(cep: str):
    """Obtém coordenadas de um local através do CEP fornecido"""
    headers = {
        "User-Agent": "PEX_Ecopontos/v1.0 (deceptionfalls@proton.me)",
        "Accept-Language": "pt-BR",
    }

    viacep_url = f"https://viacep.com.br/ws/{cep}/json/"
    async with httpx.AsyncClient() as client:
        viacep_response = await client.get(viacep_url)
        viacep_data = viacep_response.json()

        if 'erro' in viacep_data:
            raise HTTPException(status_code=404, detail="CEP not found in ViaCEP")

        address = f"{viacep_data.get('logradouro', '')}, {viacep_data['localidade']}, {viacep_data['uf']}, Brazil"

        params = {
            "q": address,
            "format": "json",
            "addressdetails": 1,
            "limit": 1,
            "countrycodes": "br",
        }

        url = "https://nominatim.openstreetmap.org/search"
        response = await client.get(url, params=params, headers=headers)

        if response.status_code != 200:
            raise HTTPException(
                status_code=response.status_code, detail="Geocoding API failed"
            )

        data = response.json()

        if not data:
            raise HTTPException(status_code=404, detail="Address not found in geocoding service")

        latitude = float(data[0]["lat"])
        longitude = float(data[0]["lon"])

        return latitude, longitude
