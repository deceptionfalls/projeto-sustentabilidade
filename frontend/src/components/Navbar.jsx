import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import Dropdown from "./Dropdown";
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 2000);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-black/80 backdrop-blur-md shadow-lg py-2"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="flex items-center justify-between px-[5%] md:px-[10%] transition-all duration-500">
                
                {/* Logo e Navegação Desktop */}
                <div className="flex items-center gap-6">
                    <Link to="/" className="group flex items-center">
                        <img src="/assets/iconLogo.png" alt="icone" className="h-8" />
                    </Link>

                    {/* Navegação Desktop: Visível a partir do md */}
                    <nav className="hidden md:flex gap-6">

                        <Dropdown />
                        <a
                            href="#section3"
                            className="text-[var(--accent-green)] font-semibold text-xl font-montserrat relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:h-[3px] after:w-0 after:bg-[var(--accent-green)] after:transition-all hover:after:w-full"
                        >
                            Sobre Nós
                        </a>
                    </nav>
                </div>

                {/* Botão Eco-Pontos (Visível em Desktop) */}
                <Link 
                    to="/ecopontos"
                    className="hidden md:inline-flex relative h-11 active:scale-95 transition overflow-hidden rounded-full p-[1px] focus:outline-none"
                >
                    <span
                        onMouseEnter={() => {
                            setIsAnimating(true);
                            setTimeout(() => setIsAnimating(false), 2000);
                        }}
                        className={`absolute inset-[-1000%] transition-all duration-500 ${
                            isAnimating
                                ? "animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--accent-green)_0%,#8FBF4D_50%,#6B8E23_100%)]"
                                : "bg-[var(--accent-green)]"
                        }`}
                    ></span>

                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-transparent px-4 text-base font-krona font-semibold text-[#365B12] backdrop-blur-3xl gap-2">
                        Eco-pontos
                        <svg
                            stroke="currentColor"
                            fill="#365B12"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                        </svg>
                    </span>
                </Link>

                {/* Botão Hambúrguer (Apenas em Mobile) */}
                <button 
                    onClick={toggleMenu} 
                    className="md:hidden text-[var(--accent-green)] focus:outline-none z-50"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>
            </div>

            {/* Menu Dropdown Mobile */}
            <nav 
                className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
            >

                <div className="flex flex-col items-center space-y-3 font-montserrat text-lg">
                    {/* Links de Âncora */}
                    <a 
                        href="#importancia" 
                        onClick={() => setIsOpen(false)} 
                        className="text-[var(--accent-green)] hover:text-[#6B8E23] w-full text-center py-2 border-b border-gray-700"
                    >
                        Importância
                    </a>
                    <a 
                        href="#ti-verde" 
                        onClick={() => setIsOpen(false)} 
                        className="text-[var(--accent-green)] hover:text-[#6B8E23] w-full text-center py-2 border-b border-gray-700"
                    >
                        T.I. Verde
                    </a>
                    <a 
                        href="#section3" 
                        onClick={() => setIsOpen(false)} 
                        className="text-[var(--accent-green)] hover:text-[#6B8E23] w-full text-center py-2 border-b border-gray-700"
                    >
                        Sobre Nós
                    </a>
                    <a 
                        href="#footer-contato" 
                        onClick={() => setIsOpen(false)} 
                        className="text-[var(--accent-green)] hover:text-[#6B8E23] w-full text-center py-2 border-b border-gray-700"
                    >
                        Referências
                    </a>
                    
                    {/* Link para Rota */}
                    <Link 
                        to="/ecopontos"
                        onClick={() => setIsOpen(false)} 
                        className="text-[#365B12] bg-[var(--accent-green)] font-krona font-semibold rounded-full px-4 py-2 mt-2"
                    >
                        Eco-Pontos
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;