import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
