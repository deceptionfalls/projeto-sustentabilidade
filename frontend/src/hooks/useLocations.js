import { useEffect, useState } from "react";

// Obtém a informação sobre um ecoponto localizada no back-end
function useLocations(params) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchLocations() {
    setLoading(true);
    setError(null);

    const requestURL = new URL("http://127.0.0.1:8000/ecopontos/buscar/");

    if (params.nome_local) {
      requestURL.searchParams.append("nome_local", params.nome_local);
    }
    if (params.cep) requestURL.searchParams.append("cep", params.cep);
    if (params.cidade) requestURL.searchParams.append("cidade", params.cidade);
    if (params.estado) requestURL.searchParams.append("estado", params.estado);

    try {
      const request = await fetch(requestURL);
      if (!request.ok) {
        throw new Error(`Request Status: ${request.status}`);
      }

      const result = await request.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLocations();
  }, [params.nome_local, params.cep, params.cidade, params.estado]);

  const refetch = () => {
    fetchLocations();
  };

  return { data, loading, error, refetch };
}

export default useLocations;
