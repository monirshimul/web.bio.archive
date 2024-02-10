"use client";

import EachExperiences from "./EachExperiences";
import Hero from "./Hero";
import Services from "./Services";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      {/* <SideBar /> */}
      <Hero />
      <Skills />
      {/* <ExpTab /> */}
      {/* <Experience /> */}
      <EachExperiences />
      <Services />
    </div>
  );
};

export default Home;
