export default function SectionTwo() {
  return (
    <section className="bg-[#25412B] text-[var(--accent-green)] px-6 lg:px-20 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Título + texto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1 text-center md:text-left">
            <span className="block text-2xl font-krona font-bold mb-3">02.</span>
            <h2 className="text-4xl font-krona font-semibold mb-4">
              COMO <br /> PODEMOS <br /> AJUDAR?
            </h2>
          </div>

          <div className="md:col-span-2">
            <p className="text-2xl font-montserrat text-right">
              Lorem ipsum dolor sit amet consectetur. Augue in amet sed dolor nisi sagittis.
              Enim sit nulla dui vitae aliquam dictum cras habitant. Lorem ipsum dolor sit amet
              consectetur. Augue in amet sed dolor nisi sagittis. Enim sit nulla dui vitae aliquam
              dictum cras habitant.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-stretch gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center w-72">
            <div className="bg-[var(--accent-green)] hover:bg-[#6B8E23] transition-all duration-300 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 w-full h-72 flex items-center justify-center">
              <img
                src="assets/reduce.png"
                alt="Reduza"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <h3 className="text-2xl font-krona mt-4 mb-2">Reduza</h3>
            <p className="text-base font-montserrat">
              Consuma de forma consciente e evite excessos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center w-72">
            <div className="bg-[var(--accent-green)] hover:bg-[#6B8E23] transition-all duration-300 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 w-full h-72 flex items-center justify-center">
              <img
                src="assets/recycle.png"
                alt="Recicle"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <h3 className="text-2xl font-krona mt-4 mb-2">Recicle</h3>
            <p className="text-base font-montserrat">
              Dê destino correto aos seus eletrônicos antigos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center w-72">
            <div className="bg-[var(--accent-green)] hover:bg-[#6B8E23] transition-all duration-300 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 w-full h-72 flex items-center justify-center">
              <img
                src="assets/reuse.png"
                alt="Reutilize"
                className="w-full h-full object-contain p-2"
              />
            </div>
            <h3 className="text-2xl font-krona mt-4 mb-2">Reutilize</h3>
            <p className="text-base font-montserrat">
              Prolongue a vida útil dos seus dispositivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
