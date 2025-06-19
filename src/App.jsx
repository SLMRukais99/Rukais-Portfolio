import React from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";

import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/*<About />*/}
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
