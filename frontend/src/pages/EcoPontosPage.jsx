import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import LocationCard from "../components/LocationCard";
import LoadingSpinner from "../components/LoadingSpinner";
import useLocations from "../hooks/useLocations";

const EcoPontosPage = () => {
    const [filterMode, setFilterMode] = useState("any");

    // Handling de filtros e parâmetros de filtros
    const [geographicFilters, setFilterParameters] = useState({
        nome_local: "",
        cep: "",
        cidade: "",
        estado: "",
    });

    const [selectedWasteTypes, setSelectedWasteTypes] = useState([]);

    // Implementando Debouncing
    const [debouncedGeographicFilters, setDebouncedGeographicFilters] =
        useState(geographicFilters);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedGeographicFilters(geographicFilters);
        }, 1500);

        return () => clearTimeout(timer);
    }, [geographicFilters]);

    const updateFilter = (
        fieldName,
        newValue,
        isCheckbox = false,
        checked = false,
    ) => {
        if (fieldName == "tipo_lixo_aceito") {
            const actualChecked = !selectedWasteTypes.includes(newValue);

            setSelectedWasteTypes((prevSelected) => {
                if (actualChecked) {
                    return [...prevSelected, newValue];
                } else {
                    return prevSelected.filter((item) => item !== newValue);
                }
            });
        } else {
            setFilterParameters((prevFilters) => ({
                ...prevFilters,
                [fieldName]: newValue,
            }));
        }
    };

    useEffect(() => {
        console.log("selectedWasteTypes changed:", selectedWasteTypes);
        if (selectedWasteTypes.length > 0) {
            refetch();
        }
    }, [selectedWasteTypes]);

    function applyWasteFilters(
        locations,
        selectedWasteTypes,
        filterMode,
        searchName = "",
    ) {
        if (searchName) {
            const lowerSearch = searchName.toLowerCase();
            locations = locations.filter((location) =>
                location.nome_local.toLowerCase().includes(lowerSearch)
            );
            return locations;
        }

        if (selectedWasteTypes.length == 0) {
            return locations;
        }

        return locations.filter((location) => {
            if (filterMode == "any") {
                return selectedWasteTypes.some((wasteType) =>
                    location[`aceita_${wasteType}`] === true
                );
            } else if (filterMode == "all") {
                return selectedWasteTypes.every((wasteType) =>
                    location[`aceita_${wasteType}`] === true
                );
            }
        });
    }

    const { data: allLocations, loading, error, refetch } = useLocations(
        debouncedGeographicFilters,
    );
    const filteredLocations = applyWasteFilters(
        allLocations,
        selectedWasteTypes,
        filterMode,
        geographicFilters.nome_local,
    );

    function getLocationStatus(location, selectedWasteTypes) {
        if (selectedWasteTypes.length === 0) {
            return { statusType: "default", statusText: "" };
        }

        const acceptedCount = selectedWasteTypes.filter((wasteType) => {
            const isAccepted = location[`aceita_${wasteType}`] === true;
            return isAccepted;
        }).length;

        if (acceptedCount === selectedWasteTypes.length) {
            return {
                statusType: "available",
                statusText: "Aceita todos os seus itens.",
            };
        } else if (acceptedCount === 0) {
            return {
                statusType: "unavailable",
                statusText: "Não aceita os seus itens.",
            };
        } else {
            return {
                statusType: "partial",
                statusText:
                    `Aceita ${acceptedCount} de ${selectedWasteTypes.length} itens.`,
            };
        }
    }

    function getAcceptedWasteTypes(location) {
        const wasteTypes = {
            "entulho": "Entulho",
            "construcao": "Construção",
            "papel": "Papel",
            "papelao": "Papelão",
            "vidro": "Vidro",
            "metal": "Metal",
            "movel": "Móveis",
            "poda_arvore": "Poda de Árvore",
            "bateria": "Baterias",
            "monitor": "Monitores",
            "celular": "Celulares",
            "impressora": "Impressoras",
        };

        const accepted = Object.entries(wasteTypes)
            .filter(([key]) => location[`aceita_${key}`] === true)
            .map(([, value]) => value);

        return accepted.length > 0
            ? accepted.join(", ")
            : "Nenhum material específico";
    }

    const handleFilterModeChange = (newMode) => {
        setFilterMode(newMode);
    };

    // A gente usa o estado de loading do useLocations ao invés de um timer artificial
    if (loading) return <LoadingSpinner />;

    return (
        <section
            id="ecopontos"
            className="py-20 px-[10%] bg-[var(--accent-green)] text-[var(--bg-dark)] min-h-screen font-montserrat"
        >
            <div className="p-8 bg-[var(--text-white)] rounded-xl shadow-lg">
                <h1 className="text-3xl font-krona font-bold mb-6 text-[var(--bg-dark)]">
                    PESQUISA DE <br /> ECO-PONTOS
                </h1>

                <Filters
                    geographicFilters={geographicFilters}
                    selectedWasteTypes={selectedWasteTypes}
                    filterMode={filterMode}
                    onFilterChange={updateFilter}
                    onFilterModeChange={handleFilterModeChange}
                />

                <h2 className="text-2xl font-krona font-semibold mt-10 mb-6 text-[var(--bg-dark)]">
                    Localizações
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLocations.map((location) => {
                        const { statusType, statusText } = getLocationStatus(
                            location,
                            selectedWasteTypes,
                        );
                        return (
                            <LocationCard
                                key={location.id}
                                title={location.nome_local}
                                address={`${location.endereco}, ${location.cidade} - ${location.estado}`}
                                hours={`${location.hora_aberto.slice(0, 5)} - ${location.hora_fechado.slice(0, 5)
                                    }`}
                                statusType={statusType}
                                statusText={statusText}
                                location={location}
                                getAcceptedWasteTypes={getAcceptedWasteTypes}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EcoPontosPage;
