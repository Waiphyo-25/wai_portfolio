import React from "react";
import About from "../about/About";
import Skills from "../Skills/Skills";
import Contact from "../Contact/contact";
import HeroSection from "../HeroSection/HeroSection";
import Project from "../Project/Project";
import Quote from "../Quotes/Quotes";
import Resume from "../../pages/Resume/Resume";

function Homepage() {
  return (
    <div>
      <HeroSection />
      <About />
      <Skills />
      <Resume />
      <Project />
      <Quote />
      <Contact />
    </div>
  );
}

export default Homepage;
