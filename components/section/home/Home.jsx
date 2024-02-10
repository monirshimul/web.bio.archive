"use client";

import EachExperiences from "./EachExperiences";
import Hero from "./Hero";
import IndustryCapablities from "./IndustryCapablities";
import Services from "./Services";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      {/* <SideBar /> */}
      <Hero />

      {/* <ExpTab /> */}
      {/* <Experience /> */}
      <EachExperiences />
      <Skills />
      <Services />
      <IndustryCapablities />
    </div>
  );
};

export default Home;
