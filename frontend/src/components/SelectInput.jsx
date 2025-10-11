import React from "react";

function SelectInput({ label, value, onChange, name, options }) {
    const inputClass = "p-2 border border-[var(--bg-dark)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--bg-dark)] font-montserrat text-[var(--bg-dark)]";

    return (
        <div className="flex flex-col">
            <label className="text-sm font-montserrat font-medium mb-1 text-[var(--text-light-brown)]">{label}</label>
            <select
                className={`${inputClass} appearance-none bg-white/50`}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
            >
                {options.map(option => (
                    <option className="bg-[var(--text-light-ivory)]" key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectInput;