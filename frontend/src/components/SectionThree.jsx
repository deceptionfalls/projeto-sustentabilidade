import useInViewAnimation from '../hooks/useInViewAnimation';

export default function SectionThree() {
  const [sobreNosRef, sobreNosVisible] = useInViewAnimation();

  return (
    <section
      id="section3"
      ref={sobreNosRef}
      className="bg-[var(--accent-green)] text-[#25412B] px-6 lg:px-20 py-20"
    >
      {/* Texto: Alinhado à esquerda em ambas as telas */}
      <div className="max-w-5xl mx-auto text-left"> 
        <span
          className={`block text-2xl font-krona font-bold mb-2 transition-all duration-700 ${
            sobreNosVisible ? 'animate-slideInLeft' : 'opacity-0'
          }`}
        >
          03.
        </span>
        <h2
          className={`text-2xl md:text-4xl group-has-[.featured-media]:md:text-3xl font-krona font-semibold mb-4 transition-all duration-700 ${
            sobreNosVisible ? 'animate-slideInLeft' : 'opacity-0'
          }`}
        >
          SOBRE NÓS
        </h2>
        
        <p
          className={`text-lg font-montserrat mb-12 max-w-3xl transition-all duration-700 ${
            sobreNosVisible ? 'animate-slideInLeft' : 'opacity-0'
          }`}
        >
          Este website foi feito por estas pessoas como parte do <br />
          Projeto de Extensão da Unidrummond Tatuapé.
        </p>

        {/* Layout dos Membros:
            - Mobile (Padrão): Usa gap-x-12 e gap-y-6 para o "triângulo" e imagens w-24 h-24.
            - Desktop (md:): Volta para imagens w-48 h-48 e justify-around.
        */}
        <div className="flex flex-wrap justify-center md:flex-row md:justify-around gap-x-12 gap-y-6 max-w-sm mx-auto md:max-w-none">
          
          {/* Denis (Topo-esquerda no mobile) */}
          <div
            className={`flex flex-col items-center text-center transition-all duration-700 ${
              sobreNosVisible ? 'animate-slideInLeft' : 'opacity-0'
            } w-24 md:w-48`}
          >
            <img
              src="/assets/denis.jpg" 
              alt="Denis"
              className="w-24 h-24 md:w-48 md:h-48 rounded-full object-cover mb-4"
            />
            <h3 className="text-base md:text-2xl font-krona font-bold">Denis</h3>
            <p className="text-sm md:text-lg font-semibold font-montserrat">Front-end, Design</p>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/denisfarias" target="_blank" rel="noopener noreferrer">
                <img src="/assets/gith.png" alt="GitHub" className="w-6 h-6 md:w-12 md:h-12" />
              </a>
              <a href="https://www.linkedin.com/in/denis-farias-it/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6 md:w-12 md:h-12" />
              </a>
            </div>
          </div>

          {/* Vinicius (Topo-direita no mobile) */}
          <div
            className={`flex flex-col items-center text-center transition-all duration-700 delay-200 ${
              sobreNosVisible ? 'animate-slideInLeft' : 'opacity-0'
            } w-24 md:w-48`}
          >
            <img
              src="/assets/vini.jpg"
              alt="Vinicius"
              className="w-24 h-24 md:w-48 md:h-48 rounded-full object-cover mb-4"
            />
            <h3 className="text-base md:text-2xl font-krona font-bold">Vinicius</h3>
            <p className="text-sm md:text-lg font-semibold font-montserrat">Back-end</p>
            <div className="flex gap-4 mt-2">
              <a href="http://github.com/deceptionfalls" target="_blank" rel="noopener noreferrer">
                <img src="/assets/gith.png" alt="GitHub" className="w-6 h-6 md:w-12 md:h-12" />
              </a>
              <a href="http://www.linkedin.com/in/vinicius-de-souza-gonçalves-vitorino-8a4554327" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6 md:w-12 md:h-12" />
              </a>
            </div>
          </div>
          
          {/* Igor (Base do triângulo no mobile) */}
          <div
            className={`flex flex-col items-center text-center transition-all duration-700 delay-400 w-full md:w-48 ${
              sobreNosVisible ? 'animate-slideInLeft' : 'opacity-0'
            } mt-6 md:mt-0`}
          >
            <img
              src="/assets/igor.jpg"
              alt="Igor"
              className="w-24 h-24 md:w-48 md:h-48 rounded-full object-cover mb-4"
            />
            <h3 className="text-base md:text-2xl font-krona font-bold">Igor</h3>
            <p className="text-sm md:text-lg font-semibold font-montserrat">Banco de Dados</p>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/igorsique" target="_blank" rel="noopener noreferrer">
                <img src="/assets/gith.png" alt="GitHub" className="w-6 h-6 md:w-12 md:h-12" />
              </a>
              <a href="https://www.linkedin.com/in/igor-siqueira-300b202ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6 md:w-12 md:h-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}