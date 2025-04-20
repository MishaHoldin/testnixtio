import Header from './components/Header';
import Hero from './components/Hero';
import AutomotiveSection from './components/AutomotiveSection';
import CompaniesSection from './components/CompaniesSection';
import GlobalPresence from './components/GlobalPresence';

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat min-h-screen">
        <Header />
        <Hero />
      </div>
      <AutomotiveSection />
      <CompaniesSection />
      <GlobalPresence />
    </main>
  );
}
