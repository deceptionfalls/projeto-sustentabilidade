import './index.css';
import Statistics from './components/Statistics';
import Navbar from './components/Navbar';

function App() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center text-[var(--accent-green)] font-montserrat"
      style={{ backgroundImage: "url('/assets/bghome.jpg')" }}
    >
      {/* Cabeçalho */}
      <Navbar />

      {/* Primeira sessão */}
      <main className="flex flex-col items-start justify-start text-left px-6 py-56 max-w-screen-lg mx-auto mb-15">
        <section className="animate-in slide-in-left duration-1000">
          <h1 className="text-3xl font-krona mt-20 leading-snug">
            Teste teste teste teste teste <br />
            <strong className="text-white-500">TESTE TESTE TESTE TESTE?</strong>
          </h1>
          <p className="text-lg mt-6 font-montserrat">
            Entenda a importância da sustentabilidade{' '}
          </p>

          {/* Botão animado */}
          <a href="saiba.html">
            <button
              className="font-krona cursor-pointer transition-all text-[#365B12] text-base font-semibold px-6 py-2 rounded-full
              bg-[var(--accent-green)]
              border-b-[4px] border-[#8FBF4D]
              hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] hover:border-[#6B8E23]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px] active:border-[#6B8E23]
              mt-6"
            >
              Saiba Mais
            </button>
          </a>

          <a
            href="#"
            className="ml-9 text-[var(--accent-green)] font-semibold text-lg font-montserrat relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-5px] after:h-[3px] after:w-0 after:bg-[var(--accent-green)] after:transition-all hover:after:w-full"
          >
            Código-fonte &gt;
          </a>
        </section>
      </main>

      {/* Seção 01 */}
      <section className="bg-[var(--accent-green)] text-[#365B12] px-6 lg:px-20 py-20 rounded-t-[100%_50px]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Imagem + autor */}
          <div className="relative md:flex-shrink-0">
            <img
              src="/assets/garbage.png"
              alt="garbage"
              className="w-72 h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-xs">
              <img
                src="/assets/logoSIT.jpeg"
                alt="Autor"
                className="w-6 h-6 rounded-full border border-white"
              />
              <span>
                Foto por <strong>SinghIT</strong>
              </span>
            </div>
          </div>

          {/* Texto + estatísticas */}
          <div className="flex-1 md:ml-6 text-center md:text-left">
            <span className="block text-xl font-krona font-bold mb-2">01.</span>
            <h2 className="text-2xl font-krona font-bold mb-4">
              POR QUE DEVEMOS <br /> NOS IMPORTAR?
            </h2>
            <p className="text-base font-montserrat mb-8 text-justify">
              Lorem ipsum dolor sit amet consectetur. Augue in amet sed dolor nisi sagittis.
              Enim sit nulla dui vitae aliquam dictum cras habitant.
            </p>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <Statistics statNumber="32" statName="Estatística" />
              <Statistics statNumber="23 mi." statName="Estatística" />
              <Statistics statNumber="1k" statName="Estatística" />
              <Statistics statNumber="3" statName="Estatística" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 02 */}
      <section className="bg-[#25412B] text-[var(--accent-green)] px-6 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Top: título à esquerda | texto à direita */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Coluna do título */}
            <div className="md:col-span-1 text-center md:text-left">
              <span className="block text-xl font-krona font-bold mb-3">02.</span>
              <h2 className="text-2xl md:text-3xl font-krona font-bold leading-tight">
                COMO <br /> PODEMOS <br /> AJUDAR?
              </h2>
            </div>

            {/* Coluna do texto */}
            <div className="md:col-span-2">
              <p className="text-base font-montserrat text-right">
                Lorem ipsum dolor sit amet consectetur. Augue in amet sed dolor nisi sagittis.
                Enim sit nulla dui vitae aliquam dictum cras habitant. Lorem ipsum dolor sit amet
                consectetur. Augue in amet sed dolor nisi sagittis. Enim sit nulla dui vitae aliquam
                dictum cras habitant.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="relative w-60 h-60 md:w-64 md:h-64">
                <img
                  src="/assets/leaf.jpg"
                  alt="Mais Sustentabilidade"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute bottom-3 left-3 bg-black bg-opacity-60 px-2 py-1 rounded-full flex items-center gap-1 text-xs">
                  <img
                    src="/assets/autor1.jpg"
                    alt="Autor"
                    className="w-6 h-6 rounded-full border border-white"
                  />
                  <span className="text-white">
                    Foto por <strong>Kanye</strong>
                  </span>
                </div>
              </div>
              <h3 className="mt-3 text-base font-krona font-bold">Mais Sustentabilidade</h3>
              <p className="text-xs font-montserrat mt-1">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-60 h-60 md:w-64 md:h-64">
                <img
                  src="/assets/bee.jpg"
                  alt="Praticidade"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <h3 className="mt-3 text-base font-krona font-bold">Praticidade</h3>
              <p className="text-xs font-montserrat mt-1">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-60 h-60 md:w-64 md:h-64">
                <img
                  src="/assets/flowers.jpg"
                  alt="Consciência"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <h3 className="mt-3 text-base font-krona font-bold">Consciência</h3>
              <p className="text-xs font-montserrat mt-1">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="mt-2 py-4 text-center text-xs font-medium text-[var(--accent-green)]">
        © 2025 - Projeto Sustentabilidade
      </footer>
    </div>
  );
}

export default App;
