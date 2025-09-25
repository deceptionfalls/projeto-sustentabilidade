import './index.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center text-[var(--accent-green)] font-montserrat"
      style={{ backgroundImage: "url('/assets/bghome.jpg')" }}
    >
      {/* Cabeçalho */}
      <Navbar />

      {/* Conteúdo principal */}
      <main className="flex flex-col items-start justify-start text-left px-6 py-32 max-w-screen-lg mx-auto mb-15">
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
            <button
              className="text-4xl font-krona cursor-pointer transition-all text-[#365B12] text-lg font-semibold px-7 py-2 rounded-full
              bg-[var(--accent-green)]
              border-b-[4px] border-[#8FBF4D]
              hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] hover:border-[#6B8E23]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px] active:border-[#6B8E23]
              mt-7"
            >
              Saiba Mais
            </button>
          </a>

          <a
            href="#"
            className="ml-9 text-[var(--accent-green)] font-semibold text-xl font-montserrat relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-5px] after:h-[3px] after:w-0 after:bg-[var(--accent-green)] after:transition-all hover:after:w-full"
          >
            Código-fonte &gt;
          </a>
        </section>
      </main>

      {/* Conteúdo abaixo */}
      <section className="bg-[var(--accent-green)] text-[#365B12] px-6 lg:px-20 py-16 rounded-t-[100%_50px]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6">
          
          {/* Imagem + autor */}
          <div className="relative md:flex-shrink-0">
            <img
              src="/assets/garbage.png"
              alt="garbage"
              className="w-100 h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm">
              <img
                src="/assets/logoSIT.jpeg"
                alt="Autor"
                className="w-7 h-7 rounded-full border border-white"
              />
              <span>
                Foto por <strong>SinghIT</strong>
              </span>
            </div>
          </div>

          {/* Texto + estatísticas */}
          <div className="flex-1 md:ml-6">
            <span className="block text-4xl font-bold mb-2">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              POR QUE DEVEMOS <br /> NOS IMPORTAR?
            </h2>
            <p className="text-lg mb-8 text-justify">
              Lorem ipsum dolor sit amet consectetur. Augue in amet sed dolor nisi sagittis.
              Enim sit nulla dui vitae aliquam dictum cras habitant.
            </p>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 text-center">
              <div>
                <p className="text-4xl font-bold">32</p>
                <p className="text-sm font-semibold">Estatística</p>
              </div>
              <div>
                <p className="text-4xl font-bold">23 mi.</p>
                <p className="text-sm font-semibold">Estatística</p>
              </div>
              <div>
                <p className="text-4xl font-bold">1k</p>
                <p className="text-sm font-semibold">Estatística</p>
              </div>
              <div>
                <p className="text-4xl font-bold">3</p>
                <p className="text-sm font-semibold">Estatística</p>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Rodapé */}
      <footer className="mt-2 py-4 text-center text-sm font-medium text-[var(--accent-green)]">
      </footer>
    </div>
  );
}

export default App;
