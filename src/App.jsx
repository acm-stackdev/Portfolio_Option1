/**
 * @copyright 2024 Aung Chan Myae
 * @license Apache-2.0
 */

/**
 * components
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
      </main>
    </>
  );
}

export default App;
