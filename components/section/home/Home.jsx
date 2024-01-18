"use client";

import CallbackAsChildren from "./CallbackAsChildren";
import Experience from "./Experience";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      {/* <SideBar /> */}
      <Hero />
      <Experience />
      <CallbackAsChildren />
    </div>
  );
};

export default Home;
