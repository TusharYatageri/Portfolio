import AboutSection from './components/AboutSection';
import Background from './components/Background';
import Header from './components/NavBar';
import HeroSection from './components/HeroSection';
import SkillSection from './components/SkillSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Background/>
      <HeroSection />
      <AboutSection/>
      <SkillSection/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
