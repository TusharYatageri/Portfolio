import AboutSection from './components/AboutSection';
import Background from './components/Background';
import Header from './components/NavBar';
import HeroSection from './components/HeroSection';
import SkillSection from './components/SkillSection';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Header/>
      <Background/>
      <HeroSection />
      <AboutSection/>
      <SkillSection/>
      <Projects/>
    </div>
  );
}

export default App;
