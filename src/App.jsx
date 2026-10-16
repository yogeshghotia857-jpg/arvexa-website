import { useEffect, useState } from "react";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Projects from "./component/Projects";
import Process from "./component/Process";
import Pricing from "./component/Pricing";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("arvexa-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("arvexa-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  }

  return (
    <div className="app" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;