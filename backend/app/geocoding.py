import httpx
from fastapi import HTTPException


async def get_coordinates_from_cep(cep: str):
    """Obtém coordenadas de um local através do CEP fornecido"""
    headers = {
        "User-Agent": "PEX_Ecopontos/v1.0 (deceptionfalls@proton.me)",
        "Accept-Language": "pt-BR",
    }

    params = {
        "q": cep + ", Brazil",
        "format": "json",
        "addressdetails": 1,
        "limit": 1,
    }

    url = "https://nominatim.openstreetmap.org/search"

    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params, headers=headers)

        if response.status_code != 200:
            raise HTTPException(
                status_code=response.status_code, detail="Geocoding API failed"
            )

        if response.status_code == 200:
            data = response.json()

            if not data:
                raise HTTPException(status_code=404, detail="CEP not found")

            latitude = float(data[0]["lat"])
            longitude = float(data[0]["lon"])

            return latitude, longitude
