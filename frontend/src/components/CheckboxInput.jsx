import React from "react";

function CheckboxInput(
    { label, onChange, name, options, selectedOptions = [] },
) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-montserrat font-medium mb-1 text-[var(--text-light-brown)]">
                {label}
            </label>
            <div className="grid grid-rows-5 grid-cols-3 w-full h-auto pt-3 p-5 border border-[var(--bg-dark)] rounded-md bg-white/50">
                {options.map((option) => (
                    <label
                        key={option.key}
                        className="flex items-center text-[var(--bg-dark)] font-montserrat mt-1"
                    >
                        <input
                            type="checkbox"
                            checked={selectedOptions.includes(option.key)}
                            className="mr-2 h-4 w-4 text-[var(--bg-dark)] rounded-sm border-[var(--bg-dark)] accent-[var(--bg-dark)]"
                            value={option.key}
                            onChange={(e) => {
                                console.log(
                                    "Checkbox event - checked:",
                                    e.target.checked,
                                    "sending checked param:",
                                    e.target.checked,
                                );
                                onChange(
                                    name,
                                    option.key,
                                    e.target.checked,
                                    true,
                                );
                            }}
                        />
                        <span>{option.value}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

export default CheckboxInput;

