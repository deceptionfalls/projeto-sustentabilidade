import React from 'react';

export default function LocationCard({ data }) {
  return (
    <div className="location-card border rounded shadow p-4">
      <img src={data.image} alt={data.name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{data.name}</h3>
      <p className="text-gray-700">{data.address}</p>
    </div>
  );
}
