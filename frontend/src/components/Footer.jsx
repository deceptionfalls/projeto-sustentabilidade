import { Link } from "react-router-dom"; 

export default function Footer() {
  return (
    <footer id="footer-contato" className="py-12 px-6 text-center text-sm font-montserrat text-[var(--accent-green)] bg-[#25412B] border-t border-[var(--accent-green)]/30">
        
      <div className="mb-8 border-b border-[var(--accent-green)]/20 pb-6">
        <p className="text-lg font-krona mb-2">
            Green IT (Green Technology) Project
        </p>
        <p>
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-left space-y-3">
        <h3 className="text-xl font-krona mb-4 text-center">
            Referências Bibliográficas e Fontes
        </h3>
        <p>
            <span className="font-semibold">— ONU (Nações Unidas) / Global E-waste Monitor:</span> Informações essenciais sobre o volume e o impacto do lixo eletrônico global. <a 
                href="https://ewastemonitor.info/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-[#6B8E23] transition-colors"
            >
                Acessar Global E-waste Monitor
            </a>.
        </p>
        <p>
            <span className="font-semibold">— Agências Reguladoras Brasileiras (IBAMA / CETESB):</span> Leis, regulamentações e diretrizes sobre a Logística Reversa e o descarte de resíduos eletrônicos no Brasil.
        </p>
        <p>
            <span className="font-semibold">— Organizações Ambientais (Greenpeace / WWF):</span> Materiais sobre a pegada de carbono da indústria de tecnologia e as melhores práticas de sustentabilidade (Sustainability).
        </p>
        <p>
            <span className="font-semibold">— Programas Energy Star:</span> Padrão internacional de eficiência energética, importante para o conceito de Reduza. <a 
                href="https://www.energystar.gov/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-[#6B8E23] transition-colors"
            >
                Acessar Energy Star
            </a>.
        </p>
        <p>
            <span className="font-semibold">— Empresas de Logística Reversa:</span> Fontes de informação sobre programas e postos de coleta oficiais de e-lixo no país.
        </p>
      </div>
    </footer>
  );
}