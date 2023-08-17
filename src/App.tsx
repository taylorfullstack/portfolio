

import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import LanguageToggle from "./components/LanguageToggle";
import { useLanguage } from "./contexts/useLanguage";


function App() {

  const { language } = useLanguage()
  return (
    <div lang={language} >
      <Navbar>
        <LanguageToggle />
      </Navbar>
      <main>

        <About />
        <Projects />
        <Skills />

      </main>
      <Footer />
    </div>

  )
}

export default App