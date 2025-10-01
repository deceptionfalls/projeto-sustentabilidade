import React from 'react';

export default function Filters() {
  return (
    <section className="filters mb-6">
      <h2 className="text-xl font-semibold mb-2">Filtros</h2>
      <input
        type="text"
        placeholder="Nome"
        className="input border border-gray-300 rounded p-2 w-full"
      />
    </section>
  );
}
