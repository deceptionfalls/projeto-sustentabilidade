export default function Hero() {
  return (
    <main className="flex flex-col items-start justify-start text-left px-6 py-56 max-w-screen-lg mx-auto mb-15">
      <section>
        <h1 className="text-4xl font-krona mt-7 leading-snug animate-slideInLeft">
          <strong>Tecnologia em harmonia <br />com a natureza</strong> <br />
        </h1>

        <p className="text-2xl mt-6 font-montserrat animate-slideInLeft">
          Um futuro tecnológico só é possível com responsabilidade ambiental. <br />Sustentabilidade também é pensar no impacto invisível dos eletrônicos <br />que usamos todos os dias.
        </p>

        <a href="#section1" className="animate-slideInLeft">
          <button
            className="font-krona cursor-pointer transition-all 
                      text-[#365B12] text-base font-semibold 
                      px-7 py-2 rounded-full 
                      bg-[var(--accent-green)] border-2 border-[var(--accent-green)]
                      hover:bg-[#6B8E23] hover:scale-105 hover:shadow-lg
                      active:scale-95 mt-6"
          >
            Saiba Mais
          </button>
        </a>

        <a
          href="#"
          className="ml-9 text-[var(--accent-green)] font-semibold text-lg font-montserrat relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-5px] after:h-[3px] after:w-0 after:bg-[var(--accent-green)] after:transition-all hover:after:w-full animate-slideInLeft"
        >
          Código-fonte &gt;
        </a>
      </section>
    </main>
  );
}
