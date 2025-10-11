import React from "react";

function TextInput({ label, value, onChange, name, placeholder }) {
    const inputClass = "p-2 border border-[var(--bg-dark)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bg-dark)] font-montserrat text-[var(--bg-dark)]";

    return (
        <div className="flex flex-col">
            <label className="text-sm font-montserrat font-medium mb-1 text-[var(--text-light-brown)]">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
                placeholder={placeholder}
                className={`${inputClass} bg-white/50`}
            />
        </div>
    );
}

export default TextInput