import React from 'react';
import { FaClock, FaCheckCircle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa';

const LocationCard = ({ title, address, hours, statusType, statusText }) => {
  let statusColor = '';
  let statusIcon = null;

  switch (statusType) {
    case 'available':
      statusColor = 'text-[#365B12]'; 
      statusIcon = <FaCheckCircle className="text-sm" />;
      break;
    case 'unavailable':
      statusColor = 'text-red-600'; 
      statusIcon = <FaTimesCircle className="text-sm" />;
      break;
    case 'partial':
      statusColor = 'text-yellow-600'; 
      statusIcon = <FaInfoCircle className="text-sm" />;
      break;
    default:
      statusColor = 'text-gray-500';
      statusIcon = <FaInfoCircle className="text-sm" />;
  }

  return (
    <div className="bg-white/50 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="h-48 w-full bg-gray-200">
        <img 
          src="/assets/ecoponto.png" 
          alt="Imagem do Eco-Ponto" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-krona font-bold text-[#365B12]">{title}</h3> 
        <p className="text-sm font-montserrat text-[#365B12] my-1">{address}</p>
        <div className="flex items-center text-[#365B12] text-sm font-montserrat mt-2">
          <FaClock className="mr-2" />
          <span>{hours}</span>
        </div>
        <div className={`flex items-center text-sm font-semibold mt-4 ${statusColor} font-montserrat`}>
          {statusIcon}
          <span className="ml-2">{statusText}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;