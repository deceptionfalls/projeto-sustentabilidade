import Statistics from './Statistics';

export default function SectionOne() {

	const content = {
		sustentabilidade: "Sustentabilidade é a capacidade de atender às necessidades do presente sem comprometer a capacidade das futuras gerações de atenderem às suas próprias. No contexto da tecnologia, significa equilibrar inovação com responsabilidade ambiental e social, garantindo que o progresso digital não esgote os recursos naturais do planeta.",
		porque: "O Impacto Invisível: A tecnologia moderna é fundamental, mas sua produção e descarte geram uma imensa pegada de carbono. Desde a mineração de metais raros para chips até o consumo energético de data centers, cada etapa tem um custo ambiental. O lixo eletrônico (e-lixo) é um sintoma grave desse ciclo insustentável, sendo a categoria de resíduo que mais cresce no mundo e liberando toxinas perigosas no meio ambiente."
	};

	return (
		<section
			id="section1"
			className="bg-[var(--accent-green)] text-[#25412B] px-6 lg:px-20 py-20 rounded-t-[100%_50px]"
		>

			<div className="max-w-5xl mx-auto">

				<div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
					
					<div className="relative w-full max-w-md md:w-auto md:flex-shrink-0">
						<img
							src="/assets/garbage.png"
							alt="garbage"
							className="w-full h-auto rounded-2xl shadow-lg object-cover max-h-80 mx-auto"
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

					<div className="flex-1 md:ml-6 text-left" id="section-one-main-content">
						<span className="block text-2xl font-krona font-bold mb-2">01.</span>
						
						<h2 className="text-2xl md:text-4xl font-krona font-semibold mb-4">
							ENTENDA MAIS SOBRE <br /> SUSTENTABILIDADE
						</h2>

						<p className="text-lg font-montserrat text-justify">
							{content.sustentabilidade}
						</p>
					</div>
				</div>

				{/* ID 'importancia' movido para este bloco de texto */}
				<div id="importancia" className="w-full">

					<h3 className="text-2xl md:text-4xl font-krona font-semibold mb-4 text-left">
						POR QUE DEVEMOS NOS IMPORTAR?
					</h3>

					<p className="text-lg font-montserrat mb-12 text-justify">
						{content.porque}
					</p>

					<h4 className="text-xl font-krona font-semibold mb-4 mt-6 text-center">
						ESTATÍSTICAS
					</h4>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
						<Statistics statNumber="32 mi." statName="Lixo eletrônico anual (Ton)" />
						<Statistics statNumber="23 Kg" statName="Mercúrio anual no e-lixo" />
						<Statistics statNumber="1k L" statName="Água p/ 1 chip de PC" />
						<Statistics statNumber="3" statName="Países destino de e-lixo ilegal" />
					</div>
				</div>
			</div>
		</section>
	);
}