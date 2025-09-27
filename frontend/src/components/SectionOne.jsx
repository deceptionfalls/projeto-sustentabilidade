import Statistics from './Statistics';

export default function SectionOne() {
  return (
    <section
      id="section1"
      className="bg-[var(--accent-green)] text-[#25412B] px-6 lg:px-20 py-20 rounded-t-[100%_50px]"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="relative md:flex-shrink-0">
          <img
            src="/assets/garbage.png"
            alt="garbage"
            className="w-full h-auto rounded-2xl shadow-lg"
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

        <div className="flex-1 md:ml-6 text-center md:text-left">
          <span className="block text-xl font-krona font-bold mb-2">01.</span>
          <h2 className="text-2xl font-krona font-semibold mb-4">
            POR QUE DEVEMOS <br /> NOS IMPORTAR?
          </h2>
          <p className="text-base font-montserrat mb-8 text-justify">
            Lorem ipsum dolor sit amet consectetur. Augue in amet sed dolor nisi sagittis.
            Enim sit nulla dui vitae aliquam dictum cras habitant.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Statistics statNumber="32" statName="Estatística" />
            <Statistics statNumber="23 mi." statName="Estatística" />
            <Statistics statNumber="1k" statName="Estatística" />
            <Statistics statNumber="3" statName="Estatística" />
          </div>
        </div>
      </div>
    </section>
  );
}
