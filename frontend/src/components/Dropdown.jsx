import { useState, useRef, useEffect } from 'react';

function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutRef = useRef();

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mantém o menu aberto por hover e click
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200); // pequeno delay para poder mover o mouse para o menu
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-[var(--accent-green)] font-semibold text-xl font-montserrat"
      >
        Sustentabilidade
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-48 bg-[var(--accent-green)] text-[#365B12] rounded-md shadow-lg z-50 font-montserrat font-semibold overflow-hidden">
          <a href="#" className="block px-4 py-2 hover:bg-[#a8c78a]">Item 1</a>
          <a href="#" className="block px-4 py-2 hover:bg-[#a8c78a]">Item 2</a>
          <a href="#" className="block px-4 py-2 hover:bg-[#a8c78a]">Item 3</a>
        </div>

      )}

    </div>
  );
}

export default Dropdown;
