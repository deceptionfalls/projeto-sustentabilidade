import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="flex items-center justify-between px-[10%] transition-all duration-500">
        {/* grupo da esquerda: logo + links */}
        <div className="flex items-center gap-6">
          <a href="#" className="group flex items-center">
            <img src="/assets/iconLogo.png" alt="icone" className="h-8" />
          </a>
          <nav className="flex gap-6">
            <Dropdown />
            <a
              href="#"
              className="text-[var(--accent-green)] font-semibold text-xl font-montserrat relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:h-[3px] after:w-0 after:bg-[var(--accent-green)] after:transition-all hover:after:w-full"
            >
              Sobre Nós
            </a>
          </nav>
        </div>

        {/* botão à direita */}
        <button className="relative inline-flex h-11 active:scale-95 transition overflow-hidden rounded-full p-[1px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--accent-green)_0%,#8FBF4D_50%,#6B8E23_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-transparent px-3 text-lg font-semibold text-[#365B12] backdrop-blur-3xl gap-2">
            Eco-pontos
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
