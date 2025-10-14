import React from "react";

function CheckboxInput(
  { label, onChange, name, options, selectedOptions = [] },
) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-montserrat font-medium mb-1 text-[var(--text-light-brown)]">
        {label}
      </label>

      {/* Grid: por padrão (mobile) 1 coluna; em md+ volta ao grid 3x5 */}
      <div className="grid grid-cols-1 gap-y-3 gap-x-6 md:grid-cols-3 md:grid-rows-5 w-full h-auto pt-3 p-5 border border-[var(--bg-dark)] rounded-md bg-white/50 box-border">
        {options.map((option) => (
          <label
            key={option.key}
            /* label ocupa largura completa no mobile e quebra palavras */
            className="flex items-start md:items-center gap-3 text-[var(--bg-dark)] font-montserrat mt-1 w-full whitespace-normal break-words"
          >
            <input
              type="checkbox"
              checked={selectedOptions.includes(option.key)}
              className="mr-2 h-4 w-4 flex-none text-[var(--bg-dark)] rounded-sm border-[var(--bg-dark)] accent-[var(--bg-dark)]"
              value={option.key}
              onChange={(e) => {
                onChange(
                  name,
                  option.key,
                  e.target.checked,
                  true,
                );
              }}
            />
            <span className="text-sm leading-tight break-words">{option.value}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CheckboxInput;
