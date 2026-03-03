import styles from "./App.module.css";
import {Hero} from "./components/Hero/Hero"
import {About} from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import {Navbar} from "./components/Navbar/Navbar";
import {Projects} from "./components/Projects/Projects"
import { Skills } from "./components/Skills/Skills";



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>


    </div>
  );
}

export default App;