import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <About />
     <Skills />
     <Projects />
     {/* <Contact /> */}
     <Footer />
     <FooterBottom />
    </div>
  );
}

export default App;
