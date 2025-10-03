import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F8F3E7]">
      <div className="text-center">
        <FaSpinner className="animate-spin text-6xl text-[#365B12] mx-auto" />
        <p className="mt-4 text-xl font-montserrat text-[#365B12]">Carregando Eco-pontos...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;