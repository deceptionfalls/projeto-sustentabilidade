import React, { useState } from 'react';
import Filters from './Filters';
import LocationCard from './LocationCard';

export default function EcoPontos() {
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: 'Aricanduva I',
      address: 'Avenida Aricanduva, 200',
      image: '/path/to/image.jpg',
    },
    // outros locais...
  ]);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Pesquisa de Eco-pontos</h1>
      <Filters />
      <section className="locations grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {locations.map(loc => (
          <LocationCard key={loc.id} data={loc} />
        ))}
      </section>
    </main>
  );
}
