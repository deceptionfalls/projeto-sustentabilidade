import { useEffect, useState } from "react";

function useCities() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    async function fetchCities() {
      try {
        const response = await fetch("https://deceptionfalls.pythonanywhere.com/cidades/");
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
