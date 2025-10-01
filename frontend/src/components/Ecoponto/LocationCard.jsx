import React from 'react';

export default function LocationCard({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition">
      <img src={data.image} alt={data.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{data.name}</h3>
        <p className="text-gray-600">{data.address}</p>
      </div>
    </div>
  );
}
