import eraLogo from "@/public/img/era.png";
import foxLogo from "@/public/img/fox.png";
import Image from "next/image";
const EachExperiences = ({ val }) => {
  const imagePosition = () => {
    if (val.id % 2 === 0) {
      return "flex-row";
    } else {
      //   console.log("flex-row-reverse", val.id);
      return "flex-row-reverse";
    }
  };
  return (
    <div className="bg-white rounded-3xl container mx-auto p-5 shadow-md my-10">
      <h1 className="text-2xl text-center capitalize sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-neutral-500 font-catamaran font-extralight bg-slate-50 p-5">
        {/* <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
          Experiences
        </span> */}
        Experiences
        <br /> with{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-rose-500">
          Industrial{" "}
        </span>
        Knowledge
      </h1>
      <div className="flex flex-col gap-5 lg:flex-row justify-around items-center bg-slate-50/30 rounded-2xl my-3 p-5">
        <div className="p-10">
          <Image
            className=" cursor-pointer"
            src={eraLogo}
            width={350}
            height={50}
            alt="clogo"
          />
        </div>
        <div className="flex flex-col bg-slate-50/30 border border-dashed rounded-2xl p-5 shadow-sm">
          <h1 className="text-5xl text-center bg-white rounded-xl border border-dashed p-2 my-2 font-bold md:text-6xl lg:text-5xl xl:text-7xl text-neutral-600 font-catamaran">
            Frontend Developer
          </h1>
          <div className="border border-dashed p-3 rounded-xl">
            <h3 className="text-3xl font-bold text-sky-500 font-catamaran">
              Era InfoTech Ltd.
            </h3>
            <span className="text-2xl font-bold text-neutral-600 font-catamaran">
              From 2019-2022
            </span>
            <p className="font-medium text-neutral-600 font-catamaran">
              Fareast Tower, 35 Topkhana Road, (Level-3), Dhaka-1000
            </p>
          </div>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-fuchsia-500 text-center">
            Achievement
          </h1>
          <ul className="bg-gray-50 p-5 rounded-md my-3 text-right text-neutral-500 font-catamaran text-md font-semibold">
            <li>
              - In-House Javascript, React, Next Js trainer for RDCD Projects
            </li>
            <li>
              - R&D experience in AI (DNN), Blockchain (Hyperledger Fabric)
            </li>
            <li>- Successfully completed more than 4 projects</li>
            <li>- Play role as a lead frontend developer in 2 projects</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-5 lg:flex-row justify-around items-center bg-slate-50/30 rounded-2xl my-3 p-5">
        <div className="flex flex-col bg-slate-50/30 border border-dashed rounded-2xl p-5 shadow-sm">
          <h1 className="text-5xl text-center bg-white rounded-xl border border-dashed p-2 my-2 font-bold md:text-6xl lg:text-5xl xl:text-7xl text-neutral-600 font-catamaran">
            Lead Frontend Developer
          </h1>
          <div className="border border-dashed p-3 rounded-xl">
            <h3 className="text-3xl font-bold text-orange-500 font-catamaran">
              Foxcatcher IT Solution
            </h3>
            <span className="text-2xl font-bold text-neutral-600 font-catamaran">
              From 2022-Present
            </span>
            <p className="font-medium text-neutral-600 font-catamaran">
              House: 140, Road: 4, Avenue:4, Mirpur-DOHS, Dhaka-1216
            </p>
          </div>
          <h1 className="pl-5 font-bold text-2xl text-left sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500">
            Achievement
          </h1>
          <ul className="bg-gray-50 p-5 rounded-md my-3 text-neutral-500 font-catamaran text-md font-semibold">
            <li>- One React Native Project done for in-house development</li>
            <li>- Facial recognition based attendance solution completed</li>
            <li>- In-house company own Business page Created</li>
            <li>- Play role as a lead frontend developer in all projects</li>
          </ul>
        </div>
        <div className="p-10">
          <Image
            className=" cursor-pointer"
            src={foxLogo}
            width={350}
            height={50}
            alt="clogo"
          />
        </div>
      </div>
    </div>
  );
};

export default EachExperiences;
