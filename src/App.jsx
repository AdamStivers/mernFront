import { Routes, Route } from "react-router-dom";
import LightMode from "./components/ui/ToggleLight";
import { useEffect, useState } from "react";
import axios from "axios";

// Layout
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

// Data
import home from "./data/home.json";
import about from "./data/about.json";
import skills from "./data/skills.json";
import resume from "./data/resume.json";

/**
 * Handles routing
 * Header, Nav, Footer, and LightMode toggle
 *
 * @returns {JSX.Element}
 */
function App() {
const [apiData, setApi] = useState(null);
const apiKey = import.meta.env.VITE_NASA_KEY;

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_KEY}`)
      .then((res) => {
      setApi(res.data);
      })
  }, []);

  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home home={home} apiData={apiData} />} />
        <Route path="/about" element={<About about={about} />} />
        <Route path="/skills" element={<Skills skills={skills} />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/resume" element={<Resume resume={resume} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Light and Dark mode toggle */}
      <LightMode />
      <Footer />
    </div>
  );
}

export default App;