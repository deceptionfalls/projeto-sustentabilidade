import React from 'react';

export default function Filters() {
  return (
    <div className="bg-white/60 p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2">Filtros</h2>
      <input
        type="text"
        placeholder="Buscar por nome..."
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
}
