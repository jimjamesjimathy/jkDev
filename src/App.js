import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from './pages/Navbar';
import DotGroup from './pages/DotGroup';
import Landing from './pages/Landing';
import LineGradient from './components/LineGradient';
import About from './pages/About';
import Projects from "./pages/Projects";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

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
    <div className="App relative">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="relative w-5/6 mx-auto md:h-full">
      <div className="app-clip absolute h-screen w-full bg-blue" />
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="relative w-5/6 mx-auto md:h-full">
        <div className="about-clip absolute h-screen w-full bg-red" />
        <About />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
          <Projects />
      </div>
    </div>
  );
}

export default App;
