export default function SectionTwo() {
  return (
    <section className="bg-[#25412B] text-[var(--accent-green)] px-6 lg:px-20 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Título + texto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1 text-center md:text-left">
            <span className="block text-xl font-krona font-bold mb-3">02.</span>
            <h2 className="text-2xl font-krona font-semibold mb-4">
              COMO <br /> PODEMOS <br /> AJUDAR?
            </h2>
          </div>

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
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8">
          {/* Card 1 */}
          <div className="bg-[var(--accent-green)] hover:bg-[#6B8E23] transition-all duration-300 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 w-72 h-72 flex items-center justify-center">
            <img
              src="assets/reduce_.png"
              alt="Reduza"
              className="w-full h-full object-contain p-2"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-[var(--accent-green)] hover:bg-[#6B8E23] transition-all duration-300 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 w-72 h-72 flex items-center justify-center">
            <img
              src="assets/recycle.jpg"
              alt="Recicle"
              className="w-full h-full object-contain p-2"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-[var(--accent-green)] hover:bg-[#6B8E23] transition-all duration-300 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 w-72 h-72 flex items-center justify-center">
            <img
              src="assets/reuse.jpg"
              alt="Reutilize"
              className="w-full h-full object-contain p-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
