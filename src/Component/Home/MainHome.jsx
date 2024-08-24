import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import OurStories from "./OurStories";
import HelpHand from "./HelpHand";
import PARTNERS from "./PARTNERS";

const MainHome = () => {
  return (
    <>
      <Hero />
      <Projects />
      <OurStories />
      <HelpHand></HelpHand>
      <PARTNERS></PARTNERS>
    </>
  );
};

export default MainHome;
