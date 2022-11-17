import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from './pages/Navbar';
import DotGroup from './pages/DotGroup';
import Landing from './pages/Landing';
import LineGradient from './components/LineGradient';
import About from './pages/About';
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from './pages/Footer';


function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="App">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="relative w-5/6 mx-auto md:h-full">
        <div className="about-clip absolute h-screen w-full bg-green" />
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("about")}
          >

            <About />
          </motion.div>
        </div>
        <LineGradient />

        <div className="relative w-5/6 mx-auto md:h-screen">
        <div className="portfolio-clip absolute h-full w-full bg-brown" />
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("portfolio")}
          >

            <Projects />
          </motion.div>
        </div>
        <LineGradient />
        <div className="relative w-5/6 mx-auto md:h-full">
        <div className="contact-clip absolute h-screen w-full bg-red" />
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("contact")}
          >
            <Contact />
          </motion.div>
        </div>
        <LineGradient />
      <Footer />
    </div>
  );
}

export default App;
