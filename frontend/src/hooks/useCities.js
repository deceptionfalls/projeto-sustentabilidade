import { useEffect, useState } from "react";

function useCities() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    async function fetchCities() {
      try {
        const response = await fetch("http://localhost:8000/cidades/");
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCities();
  }, []);
  return { cities, loading };
}

export default useCities;
