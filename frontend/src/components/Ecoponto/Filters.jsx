import React from 'react';

const Filters = () => {
  const inputClass = "p-2 border border-[#365B12] rounded-md focus:outline-none focus:ring-2 focus:ring-[#365B12] font-montserrat text-[#365B12]";

  return (
    <div className="mb-8">
      <h2 className="text-xl font-montserrat font-semibold mb-4 text-[#365B12]">Filtros</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="flex flex-col">
          <label className="text-sm font-montserrat font-medium mb-1 text-[#365B12]">Nome</label>
          <input 
            type="text" 
            placeholder="Aricanduva I"
            className={`${inputClass} bg-white/50`}
          />
        </div>
        
        <div className="flex flex-col">
          <label className="text-sm font-montserrat font-medium mb-1 text-[#365B12]">Cidade</label>
          <select className={`${inputClass} appearance-none bg-white/50`}>
            <option className="bg-[#CCB7B7]">São Paulo</option>
            <option className="bg-[#CCB7B7]">Springfield</option>
            <option className="bg-[#CCB7B7]">Liberty Falls</option>
            <option selected className="bg-[#CCB7B7]">Raccoon City</option>
            <option className="bg-[#CCB7B7]">Silent Hill</option>
          </select>
        </div>
        
        <div className="flex flex-col">
          <label className="text-sm font-montserrat font-medium mb-1 text-[#365B12]">Estado</label>
          <select className={`${inputClass} appearance-none bg-white/50`}>
            <option selected className="bg-[#CCB7B7]">SP</option>
            <option className="bg-[#CCB7B7]">AW</option>
            <option className="bg-[#CCB7B7]">BO</option>
          </select>
        </div>
        
        <div className="flex flex-col">
          <label className="text-sm font-montserrat font-medium mb-1 text-[#365B12]">Materiais Aceitos</label>
          <div className="flex flex-col p-2 border border-[#365B12] rounded-md bg-white/50"> 
            <label className="flex items-center text-[#365B12] font-montserrat">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#365B12] rounded-sm border-[#365B12] accent-[#365B12]" /> Recicláveis
            </label>
            <label className="flex items-center text-[#365B12] font-montserrat mt-1">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#365B12] rounded-sm border-[#365B12] accent-[#365B12]" checked /> Entulho
            </label>
            <label className="flex items-center text-[#365B12] font-montserrat mt-1">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#365B12] rounded-sm border-[#365B12] accent-[#365B12]" /> Poda de Árvore
            </label>
          </div>
        </div>
        
        <div className="flex flex-col">
          <label className="text-sm font-montserrat font-medium mb-1 text-[#365B12]">Endereço</label>
          <input 
            type="text" 
            placeholder="Avenida Aricanduva, 200"
            className={`${inputClass} bg-white/50`}
          />
        </div>
        
        <div className="flex flex-col">
          <label className="text-sm font-montserrat font-medium mb-1 text-[#365B12]">Horários de Funcionamento</label>
          <div className="flex items-center">
            <input 
              type="time" 
              value="12:00"
              className={`${inputClass} bg-white/50`}
            />
            <span className="mx-2 text-[#365B12]">:</span>
            <input 
              type="time" 
              value="22:30"
              className={`${inputClass} bg-white/50`}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Filters;