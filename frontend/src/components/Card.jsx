import React from "react";

function Card({ image, mainTitle, subtitle }) {
    return (
        <div className="flex flex-col items-center text-center w-full max-w-sm sm:w-72 transition-all duration-300 hover:scale-[1.05] hover:text-[var(--text-white)]">
            <div className="bg-[var(--accent-green)] hover:bg-[var(--text-white)] transition-all duration-300 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 w-full h-72 flex items-center justify-center">
                <img
                    src={image}
                    alt="Reduza"
                    className="w-full h-full object-contain p-2"
                />
            </div>
            <h3 className="text-2xl font-krona mt-4 mb-2 ">{mainTitle}</h3>
            <p className="text-base font-montserrat">{subtitle}</p>
        </div>
    );
}

export default Card;
