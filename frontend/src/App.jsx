import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Footer from './components/Footer';

// Importando os componentes do Ecoponto
import EcoPontos from './components/Ecoponto/EcoPontos';

function App() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center text-[var(--accent-green)] font-montserrat scroll-smooth"
      style={{ backgroundImage: "url('/assets/bghome.jpg')" }}
    >
      <Navbar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />

      {/* Nova seção para EcoPontos */}
      <section id="ecopontos" className="py-20 px-[10%] bg-white/90 text-black">
        <EcoPontos />
      </section>

      <Footer />
    </div>
  );
}

export default App;
