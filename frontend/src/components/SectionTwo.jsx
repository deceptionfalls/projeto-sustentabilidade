import { Link } from "react-router-dom";
import Card from "./Card";

export default function SectionTwo() {
    const content = {
        tiVerde: "O T.I. Verde é a aplicação da sustentabilidade ao setor de tecnologia. Ele se concentra em três áreas: reduzir o consumo de energia dos equipamentos, usar materiais de forma mais eficiente e garantir a logística reversa e a reciclagem correta. Ao adotarmos o TI Verde, transformamos a tecnologia de um problema ambiental em parte da solução.",
        reduza: "Priorize a compra de equipamentos com certificação de eficiência energética (como o selo Energy Star). Use a virtualização para consolidar servidores e reduza o consumo de energia configurando seus aparelhos para hibernar automaticamente quando não estiver em uso.",
        reutilize: "A melhor forma de reduzir o impacto é maximizar o tempo de uso. Invista em upgrades de hardware (como SSD e mais memória) em vez de descartar o computador. Considere doar aparelhos antigos que ainda funcionam para escolas ou organizações sociais.",
        recicle: "Garanta que o lixo eletrônico seja encaminhado para o descarte correto (Logística Reversa). Nunca jogue eletrônicos no lixo comum! Leve-os a Eco-Pontos especializados ou postos de devolução dos fabricantes para que os materiais tóxicos sejam gerenciados e os materiais raros sejam recuperados.",
        cta: "Agora que você sabe como ajudar, o próximo passo é a ação. O descarte correto do lixo eletrônico evita a contaminação do solo e da água. Utilize nosso buscador de Eco-Pontos para encontrar o local de coleta mais próximo e garanta que seus dispositivos tenham a destinação correta. Faça sua parte pela Logística Reversa e construa um futuro mais sustentável!"
    };

    return (
        <section className="bg-[var(--bg-dark)] text-[var(--accent-green)] px-6 lg:px-20 py-20">
            <div className="max-w-5xl mx-auto">

                {/* Título + Texto Principal (O que é T.I. Verde) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-left">

                    <div className="md:col-span-1">
                        <span className="block text-2xl font-krona font-bold mb-3">02.</span>
                        <h2 className="text-2xl md:text-4xl font-krona font-semibold mb-4">
                            COMO <br /> PODEMOS <br /> AJUDAR?
                        </h2>
                    </div>


                    <div id="ti-verde" className="md:col-span-2 text-left">
                        <p className="text-lg font-montserrat text-left">
                            <strong>O que é T.I. Verde (Green IT):</strong> {content.tiVerde}
                        </p>
                    </div>
                </div>

                {/* Cards ilustrados */}
                <div className="mt-12 flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-8">
                    <Card image="assets/reduce.png" mainTitle="Reduza" subtitle="Consuma de forma consciente e evite excessos." />
                    <Card image="assets/recycle.png" mainTitle="Recicle" subtitle="Dê destino correto aos seus eletrônicos antigos." />
                    <Card image="assets/reuse.png" mainTitle="Reutilize" subtitle="Prolongue a vida útil dos seus dispositivos." />
                </div>

                {/* Textos Detalhados Abaixo das Cards (Reduza, Recicle, Reutilize) */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Bloco 1: Reduza - ID: reduza */}
                    <div id="reduza" className="w-full">
                        <h3 className="text-2xl font-krona font-semibold mb-4 text-left">REDUZA</h3>
                        <p className="text-lg font-montserrat text-justify max-w-lg mx-auto md:mx-0">
                            {content.reduza}
                        </p>
                    </div>

                    {/* Bloco 2: Recicle - ID: recicle */}
                    <div id="recicle" className="w-full">
                        <h3 className="text-2xl font-krona font-semibold mb-4 text-left">RECICLE</h3>
                        <p className="text-lg font-montserrat text-justify max-w-lg mx-auto md:mx-0">
                            {content.recicle}
                        </p>
                    </div>

                    {/* Bloco 3: Reutilize - ID: reutilize */}
                    <div id="reutilize" className="w-full">
                        <h3 className="text-2xl font-krona font-semibold mb-4 text-left">REUTILIZE</h3>
                        <p className="text-lg font-montserrat text-justify max-w-lg mx-auto md:mx-0">
                            {content.reutilize}
                        </p>
                    </div>
                </div>

                {/* Novo Bloco: Chamada para Ação (CTA) do Buscador de Eco-Pontos - ID: ecoponto-cta */}
                <div id="ecoponto-cta" className="mt-20 w-full text-center">
                    <h3 className="text-2xl md:text-3xl font-krona font-semibold mb-6">
                        ENCONTRE SEU ECO-PONTO
                    </h3>
                    <p className="text-xl font-montserrat text-justify max-w-4xl mx-auto mb-8">
                        {content.cta}
                    </p>

                    {/* BOTÃO COPIADO DO HERO COM O ÍCONE DA NAVBAR */}
                    <Link
                        to="/ecopontos"
                        className="inline-flex items-center gap-2 
                            font-krona cursor-pointer transition-all 
                            text-[var(--bg-dark)] text-base font-semibold 
                            px-7 py-2 rounded-full 
                            bg-[var(--accent-green)] border-2 border-[var(--accent-green)]
                            hover:bg-[#6B8E23] hover:scale-105 hover:shadow-lg
                            active:scale-95"
                    >
                        Acessar Pesquisa de Eco-Pontos
                        <svg
                            stroke="currentColor"
                            fill="#365B12"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                        </svg>
                    </Link>

                </div>
            </div>
        </section>
    );
}