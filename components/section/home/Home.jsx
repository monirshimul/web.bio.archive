"use client";

import { useSelector } from "react-redux";
import EachExperiences from "./EachExperiences";
import Hero from "./Hero";
import IndustryCapablities from "./IndustryCapablities";
import ProjectGlimpse from "./ProjectGlimpse";
import Services from "./Services";
import Skills from "./Skills";
const Home = () => {
  const data = useSelector((state) => state.themeChange.themeName);
  console.log("home theme", data);
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
      <ProjectGlimpse />
    </div>
  );
};

export default Home;
