import Button from "./Button";

export default function Hero() {
    return (
        <main className="flex flex-col items-center md:items-start justify-start text-center md:text-left px-6 py-56 max-w-screen-lg mx-auto mb-15">
            <section>
                <h1 className="text-2xl md:text-4xl group-has-[.featured-media]:md:text-3xl font-krona mt-7 leading-snug animate-slideInLeft">
                    <strong>Tecnologia em harmonia <br />com a natureza</strong> <br />
                </h1>

                <p className="text-lg mt-6 font-montserrat animate-slideInLeft">
                    Um futuro tecnológico só é possível com responsabilidade ambiental. <br className="hidden md:inline" />
                    Sustentabilidade também é pensar no impacto invisível dos eletrônicos <br className="hidden md:inline" />
                    que usamos todos os dias.
                </p>

                <div className="flex flex-col items-center md:flex-row md:items-start mt-6 gap-3 animate-slideInLeft">
                    <Button section="#section1" text="Saiba Mais" />

                    <a
                        href="https://github.com/deceptionfalls/projeto-sustentabilidade"
                        className="text-[var(--text-white)] font-semibold text-lg font-montserrat relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-5px] after:h-[3px] after:w-0 after:bg-[var(--text-white)] after:transition-all hover:after:w-full animate-slideInLeft md:ml-9"
                    >
                        Código-fonte &gt;
                    </a>
                </div>
            </section>
        </main>
    );
}
