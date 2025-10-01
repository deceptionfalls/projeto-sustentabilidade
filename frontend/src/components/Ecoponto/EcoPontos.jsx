import React, { useState } from 'react';
import Filters from './Filters';
import LocationCard from './LocationCard';

export default function EcoPontos() {
  const [locations] = useState([
    {
      id: 1,
      name: 'Aricanduva I',
      address: 'Avenida Aricanduva, 200',
      image: '/assets/ecoponto1.jpg', // Certifique-se que essa imagem existe
    },
    {
      id: 2,
      name: 'Tatuapé',
      address: 'Rua Tatuapé, 300',
      image: '/assets/ecoponto2.jpg',
    },
  ]);

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Pesquisa de Eco-pontos</h1>
      <Filters />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {locations.map(loc => (
          <LocationCard key={loc.id} data={loc} />
        ))}
      </section>
    </main>
  );
}
