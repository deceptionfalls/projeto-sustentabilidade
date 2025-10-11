import React from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import CheckboxInput from "./CheckboxInput";
import useCities from "../hooks/useCities";

const Filters = (
    {
        geographicFilters,
        selectedWasteTypes,
        filterMode,
        onFilterChange,
        onFilterModeChange,
    },
) => {
    const { cities, loading } = useCities();
    const inputClass =
        "p-2 border border-[var(--bg-dark)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bg-dark)] font-montserrat text-[var(--bg-dark)]";
    return (
        <div className="mb-8">
            <h2 className="text-xl font-montserrat font-semibold mb-1 text-[var(--bg-dark)]">
                Filtros
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <TextInput
                    label="Nome"
                    value={geographicFilters.nome_local}
                    onChange={onFilterChange}
                    name="nome_local"
                    placeholder="Procure um local"
                />
                <SelectInput
                    label="Cidade"
                    value={geographicFilters.cidade}
                    onChange={onFilterChange}
                    name="cidade"
                    options={loading ? [] : [""].concat(cities)}
                />
                <SelectInput
                    label="Estado"
                    value={geographicFilters.estado}
                    onChange={onFilterChange}
                    name="estado"
                    options={[
                        "",
                        "AC",
                        "AL",
                        "AP",
                        "AM",
                        "BA",
                        "CE",
                        "DF",
                        "ES",
                        "GO",
                        "MA",
                        "MT",
                        "MS",
                        "MG",
                        "PA",
                        "PB",
                        "PR",
                        "PE",
                        "PI",
                        "RJ",
                        "RN",
                        "RS",
                        "RO",
                        "RR",
                        "SC",
                        "SP",
                        "SE",
                        "TO",
                    ]}
                />
                <TextInput
                    label="CEP"
                    value={geographicFilters.cep}
                    onChange={onFilterChange}
                    name="cep"
                    placeholder="Seu CEP aqui..."
                />

                {
                    /* <div className="flex flex-col">
          <label className="text-sm font-montserrat font-medium mb-1 text-[var(--bg-dark)]">Horários de Funcionamento</label>
          <div className="flex items-center">
            <input
              type="time"
              value="12:00"
              className={`${inputClass} bg-white/50`}
            />
            <span className="mx-2 text-[var(--bg-dark)]">:</span>
            <input
              type="time"
              value="22:30"
              className={`${inputClass} bg-white/50`}
            />
          </div>
        </div> */
                }
            </div>

            <div className="mt-5">
                <CheckboxInput
                    label="Materiais Aceitos"
                    onChange={onFilterChange}
                    name="tipo_lixo_aceito"
                    selectedOptions={selectedWasteTypes}
                    options={[
                        { key: "entulho", value: "Entulho" },
                        { key: "construcao", value: "Materiais de Construção" },
                        { key: "poda_arvore", value: "Poda de Árvore" },
                        { key: "papel", value: "Papel" },
                        { key: "papelao", value: "Papelão" },
                        { key: "vidro", value: "Vidro" },
                        { key: "metal", value: "Metal" },
                        { key: "movel", value: "Móveis" },
                        { key: "bateria", value: "Baterias" },
                        { key: "monitor", value: "Monitor" },
                        { key: "celular", value: "Celulares" },
                        { key: "impressora", value: "Impressora" },
                    ]}
                />
            </div>
        </div>
    );
};

export default Filters;
