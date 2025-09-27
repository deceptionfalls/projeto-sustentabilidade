import useInViewAnimation from '../hooks/useInViewAnimation';

export default function SectionThree() {
  const [sobreNosRef, sobreNosVisible] = useInViewAnimation();

  return (
    <section
      id="section3"
      ref={sobreNosRef}
      className="bg-[var(--accent-green)] text-[#25412B] px-6 lg:px-20 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <span
          className={`block text-xl font-krona font-bold mb-2 transition-all duration-700 ${
            sobreNosVisible ? 'animate-slideInLeft' : 'opacity-0'
          }`}
        >
          03.
        </span>
        <h2
          className={`text-2xl font-krona font-semibold mb-4 transition-all duration-700 ${
            sobreNosVisible ? 'animate-slideInLeft' : 'opacity-0'
          }`}
        >
          SOBRE NÓS
        </h2>
        <p
          className={`text-base font-montserrat mb-12 max-w-3xl transition-all duration-700 ${
            sobreNosVisible ? 'animate-slideInLeft' : 'opacity-0'
          }`}
        >
          Este website foi feito por estas pessoas como parte do <br />
          Projeto de Extensão da Unidrummond Tatuapé.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-30">
          {/* Denis */}
          <div
            className={`flex flex-col items-center text-center transition-all duration-700 ${
              sobreNosVisible ? 'animate-slideInLeft' : 'opacity-0'
            }`}
          >
            <img
              src="/assets/denis.jpg"
              alt="Denis"
              className="w-36 h-36 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg md:text-xl font-krona font-bold">Denis</h3>
            <p className="text-sm font-semibold font-montserrat">Front-end, Design</p>
            <div className="flex gap-4 mt-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/assets/gith.png" alt="GitHub" className="w-8 h-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Vinicius */}
          <div
            className={`flex flex-col items-center text-center transition-all duration-700 ${
              sobreNosVisible ? 'animate-slideInLeft' : 'opacity-0'
            }`}
          >
            <img
              src="/assets/vini.jpg"
              alt="Vinicius"
              className="w-36 h-36 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg md:text-xl font-krona font-bold">Vinicius</h3>
            <p className="text-sm font-semibold font-montserrat">Back-end</p>
            <div className="flex gap-4 mt-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/assets/gith.png" alt="GitHub" className="w-8 h-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Igor */}
          <div
            className={`flex flex-col items-center text-center transition-all duration-700 ${
              sobreNosVisible ? 'animate-slideInLeft' : 'opacity-0'
            }`}
          >
            <img
              src="/assets/igor.jpg"
              alt="Igor"
              className="w-36 h-36 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg md:text-xl font-krona font-bold">Igor</h3>
            <p className="text-sm font-semibold font-montserrat">Banco de Dados</p>
            <div className="flex gap-4 mt-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/assets/gith.png" alt="GitHub" className="w-8 h-8" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
