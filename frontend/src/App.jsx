import { useState } from 'react';
import './index.css';
import Dropdown from './components/Dropdown';


function App() {
  return (
    <div className="min-h-screen bg-cover bg-center text-white font-montserrat" style={{ backgroundImage: "url('/assets/bghome.jpg')" }}>
      {/* Cabeçalho */}
      <header className="flex items-center justify-between px-[10%] py-6">
        {/* grupo da esquerda: casa + links */}
        <div className="flex items-center gap-6">
          <a href="#" className="group flex items-center">
            <img
              src="/assets/iconLogo.png"
              alt="icone"
              
            />
          </a>
          <nav className="flex gap-6">
            <Dropdown />
            <a
              href="#"
              className="text-white-500 font-semibold text-xl relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:h-[3px] after:w-0 after:bg-green-500 after:transition-all hover:after:w-full"
            >
              Sobre Nós
            </a>
          </nav>
        </div>

        {/* botão à direita */}
        <button
          className="relative inline-flex h-11 active:scale-95 transition overflow-hidden rounded-full p-[1px] focus:outline-none"
        >
          <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#22c55e_0%,#16a34a_50%,#065f46_100%)]"
          >
          </span>
          <span
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-transparent px-3 text-lg font-semibold text-white backdrop-blur-3xl gap-2 undefined"
          >
            Eco-pontos
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
              ></path>
            </svg>
          </span>
        </button>

      </header>


      {/* Conteúdo principal */}
      <main className="flex flex-col items-start justify-start text-left px-6 py-10 max-w-screen-lg mx-auto">
        <section className="animate-in slide-in-left duration-1000">
          <h1 className="text-4xl font-krona mt-16 leading-snug">
            Teste teste teste teste teste <br />
            <strong className="text-white-500">TESTE TESTE TESTE TESTE?</strong>
          </h1>
          <p className="text-xl mt-8 font-montserrat">
            Entenda a importância da sustentabilidade{' '}
          </p>

          {/* Botão animado */}
          <a href="saiba.html">
            <button className="text-4xl font-krona cursor-pointer transition-all bg-green-700 text-white text-lg font-semibold px-7 py-2 rounded-full
            border-green-600
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mt-7">
              Saiba Mais
            </button>
          </a>
          <a
              href="#"
              className="ml-9 text-white-500 font-semibold text-xl relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-5px] after:h-[3px] after:w-0 after:bg-green-500 after:transition-all hover:after:w-full"
            >
              Código-fonte &gt; 
            </a>
        </section>

        <section id="conteudo" className="mt-10 w-full"></section>
      </main>
      <main>
        <section>
          
        </section>
      </main>

      {/* Rodapé */}
      <footer className="mt-2 py-4 text-center text-sm font-medium text-gray-300">
      </footer>
    </div>
  )
}

export default App
