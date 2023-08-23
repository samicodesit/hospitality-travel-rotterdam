import './App.css';
import AboutSection from './components/AboutSection';
import EventTypes from './components/EventTypes';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import SponsorsSection from './components/SponsorsSection';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <EventTypes />
      <SponsorsSection />
      <Footer />
    </>
  );
}

export default App;
