import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[var(--accent-green)]">
      <div className="text-center">
        <FaSpinner className="animate-spin text-6xl text-[var(--bg-dark)] mx-auto" />
        <p className="mt-4 text-xl font-montserrat text-[var(--bg-dark)]">Carregando...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;