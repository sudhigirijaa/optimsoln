import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Markets from './components/sections/Markets';
import Certifications from './components/sections/Certifications';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Markets />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
