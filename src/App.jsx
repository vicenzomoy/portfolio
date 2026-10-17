import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmartPondPage from "./pages/SmartPond";

function isSmartPondRoute() {
  const pathname = (window.location.pathname || "").toLowerCase();
  const hash = (window.location.hash || "").toLowerCase();
  const searchParams = new URLSearchParams(window.location.search);

  return (
    pathname.includes("/smartpond") ||
    hash.includes("smartpond") ||
    searchParams.get("page") === "smartpond"
  );
}

function App() {
  const [isSmartPond, setIsSmartPond] = useState(isSmartPondRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      setIsSmartPond(isSmartPondRoute());
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  const navigateTo = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
      setIsSmartPond(isSmartPondRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // If path matches /smartpond or hash #smartpond
  if (isSmartPond) {
    return <SmartPondPage onNavigateHome={() => navigateTo("/")} />;
  }

  // Otherwise render main portfolio
  return (
    <>
      <Navbar onNavigateToSmartPond={() => navigateTo("/smartpond")} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onNavigateToSmartPond={() => navigateTo("/smartpond")} />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
