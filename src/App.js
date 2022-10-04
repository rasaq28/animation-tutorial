import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SubHero from './components/SubHero';
import {motion} from "framer-motion"


function App() {
  return (
    <motion.div initial="hidden" animate="show" className="App">
   <Navbar />
   <Hero />
   <SubHero/>
    </motion.div>
  );
}

export default App;
