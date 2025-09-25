import { useEffect, useState } from "react";

function useLocations(params) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchLocations() {
        setLoading(true)
        setError(null)

        const requestURL = new URL("http://127.0.0.1:8000/ecopontos/buscar/");

        if (params.cep) requestURL.searchParams.append("cep", params.cep);
        if (params.tipo_lixo_aceito) requestURL.searchParams.append("tipo_lixo_aceito", params.tipo_lixo_aceito);
        if (params.cidade) requestURL.searchParams.append("cidade", params.cidade);
        if (params.estado) requestURL.searchParams.append("estado", params.estado);

        try {
            const request = await fetch(requestURL);
            if (!request.ok) {
                throw new Error(`Status da request: ${request.status}`);
            }

            const result = await request.json();
            console.log(result);
            setData(result);
        } catch (error) {
            console.error(error.message);
            setError(error.message);
        } finally {
            setLoading(false)
        }


    };

    useEffect(() => {
        fetchLocations();
    }, [params.cep, params.tipo_lixo_aceito, params.cidade, params.estado]);

    const refetch = () => {
        fetchLocations();
    };

    return { data, loading, error, refetch };
};