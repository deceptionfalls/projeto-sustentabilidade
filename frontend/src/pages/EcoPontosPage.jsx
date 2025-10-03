import React, { useState, useEffect } from 'react';
import Filters from '../components/Ecoponto/Filters';
import LocationCard from '../components/Ecoponto/LocationCard';
import LoadingSpinner from '../components/LoadingSpinner';

const EcoPontosPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); 

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }
    
    return (
        <section id="ecopontos" className="py-20 px-[10%] bg-[#F8F3E7] text-[#365B12] min-h-screen font-montserrat"> 
            <div className="p-8 bg-[#F8F3E7] rounded-xl shadow-lg"> 
                
                <h1 className="text-3xl font-krona font-bold mb-6 text-[#365B12]">PESQUISA DE <br/> ECO-PONTOS</h1>
                
                <Filters />

                <h2 className="text-2xl font-krona font-semibold mt-10 mb-6 text-[#365B12]">Localizações</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <LocationCard 
                        title="ARICANDUVA I"
                        address="Avenida Aricanduva, 200 São Paulo - SP"
                        hours="12:00 - 22:00"
                        statusType="partial"
                        statusText="Aceita alguns dos seus itens."
                    />
                    
                    <LocationCard 
                        title="ARICANDUVA I"
                        address="Avenida Aricanduva, 200 São Paulo - SP"
                        hours="12:00 - 22:00"
                        statusType="unavailable"
                        statusText="Não aceita os seus itens."
                    />
                    
                    <LocationCard 
                        title="ARICANDUVA I"
                        address="Avenida Aricanduva, 200 São Paulo - SP"
                        hours="12:00 - 22:00"
                        statusType="available"
                        statusText="Aceita todos os seus itens."
                    />
                </div>
            </div>
        </section>
    );
};

export default EcoPontosPage;