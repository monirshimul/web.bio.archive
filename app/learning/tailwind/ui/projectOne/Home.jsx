"use client";

import Hero from "./Hero";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* <Navbar /> */}
      <SideBar />
      <Hero />
    </div>
  );
};

export default Home;
