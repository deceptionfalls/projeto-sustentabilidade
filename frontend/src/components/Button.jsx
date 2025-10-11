import React from "react";

function Button({ section, text, icon }) {
    return (
        <a href={section}>
            <button
                className="font-krona cursor-pointer transition-all 
                text-[var(--bg-dark)] text-base font-semibold 
                px-7 py-2 rounded-full 
                bg-[var(--accent-green)]
                hover:bg-[var(--bg-dark)] hover:text-[var(--bg-light)] hover:scale-105 hover:shadow-lg
                active:scale-95"
            >
                {text} {icon}
            </button>
        </a>
    )
}

export default Button;