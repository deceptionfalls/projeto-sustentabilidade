import React from "react";

const Tooltip = ({ content, children }) => {
    return (
        <div className="relative group">
            {children}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-[var(--text-dark-brown)] text-[var(--text-white)] text-sm font-montserrat rounded px-2 py-1 whitespace-nowrap z-10">
                {content}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-[var(--text-dark-brown)]">
                </div>
            </div>
        </div>
    );
};

export default Tooltip;
