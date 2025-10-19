import React from "react";
import Tooltip from "./Tooltip";

import {
    FaCheckCircle,
    FaClock,
    FaInfoCircle,
    FaTimesCircle,
} from "react-icons/fa";

const LocationCard = (
    {
        _key,
        title,
        address,
        hours,
        statusType,
        statusText,
        location,
        getAcceptedWasteTypes,
    },
) => {
    let statusColor = "";
    let statusIcon = null;

    switch (statusType) {
        case "available":
            statusColor = "text-[var(--bg-dark)]";
            statusIcon = <FaCheckCircle className="text-sm" />;
            break;
        case "unavailable":
            statusColor = "text-red-600";
            statusIcon = <FaTimesCircle className="text-sm" />;
            break;
        case "partial":
            statusColor = "text-yellow-600";
            statusIcon = <FaInfoCircle className="text-sm" />;
            break;
        default:
        // statusColor = "text-gray-500";
        // statusIcon = <FaInfoCircle className="text-sm" />;
    }

    return (
        <div className="bg-white/50 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="h-48 w-full bg-gray-200">
                <img
<<<<<<< HEAD
                    src={location.imagem_url || "/assets/pontosEco.jpg"}
=======
                    src={location.imagem_url || "/assets/pontoEco.jpg"}
>>>>>>> 9a62548 (feat: adicionar favicon.ico)
                    alt="Imagem do Eco-Ponto"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-krona font-bold text-[var(--text-dark-brown)]">
                    {title}
                </h3>
                <p className="text-sm font-montserrat text-[var(--text-light-brown)] my-1">
                    {address}
                </p>
                <div className="flex items-center text-[var(--text-light-brown)] text-sm font-montserrat mt-2">
                    <FaClock className="mr-2" />
                    <span>{hours}</span>
                </div>
                <Tooltip content={getAcceptedWasteTypes(location)}>
                    <div
                        className={`flex items-center text-sm font-semibold mt-4 ${statusColor} font-montserrat`}
                    >
                        {statusIcon}
                        <span className="ml-2">{statusText}</span>
                    </div>
                </Tooltip>
            </div>
        </div>
    );
};

export default LocationCard;
