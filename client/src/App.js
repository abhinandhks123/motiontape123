import './App.css';
import AboutUs from './components/About';
import ArticlesSection from './components/ArticleSection';
import ContactUs from './components/ContactUs';
import DesignWordsImage from './components/DesignWordsImage';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Hero/>
       <DesignWordsImage/>
       <Navbar/>
       <AboutUs/>
       <ProjectCard/>
       <Service/>
       <ArticlesSection/>
       <ContactUs/>
       <Footer/>
      </header>
    </div>
  );
}

export default App;
