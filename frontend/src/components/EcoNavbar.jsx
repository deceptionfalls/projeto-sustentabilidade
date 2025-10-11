import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaBars, FaTimes } from "react-icons/fa";

function EcoNavbar() {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu hamburguer

    const linkClasses = `text-[var(--accent-green)] font-semibold text-xl font-montserrat 
        relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] 
        after:h-[3px] after:w-0 after:bg-[var(--accent-green)] after:transition-all hover:after:w-full`;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 bg-[var(--bg-dark)] backdrop-blur-md shadow-lg py-2`}
        >
            <div className="flex items-center justify-between px-[5%] md:px-[10%]">

                <div className="flex items-center gap-6">
                    <Link to="/" className="group flex items-center">
                        <img src="/assets/iconLogo.png" alt="icone" className="h-8" />
                    </Link>

                    {/* Navegação Desktop: Visível a partir do md */}
                    <nav className="hidden md:flex gap-6">
                        <Link
                            to="/"
                            className={`flex items-center text-xl ${linkClasses}`}
                        >
                            <FaChevronLeft className="mr-2 h-4 w-4" />
                            Voltar para Home
                        </Link>
                    </nav>
                </div>

                {/* Botão Hambúrguer (Apenas em Mobile) */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-[var(--accent-green)] focus:outline-none z-50"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>

                {/* Elemento de preenchimento (Manter no desktop) */}
                <div className="hidden md:block w-24 h-11"></div>
            </div>

            {/* Menu Dropdown Mobile */}
            <nav
                className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-20 opacity-100 py-3' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="flex flex-col items-center space-y-3 font-montserrat text-lg">
                    <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="text-[var(--accent-green)] hover:text-[#6B8E23] w-full text-center py-2 flex items-center justify-center"
                    >
                        <FaChevronLeft className="mr-2 h-4 w-4" />
                        Voltar para Home
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default EcoNavbar;