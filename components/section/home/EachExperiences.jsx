import eraLogo from "@/public/img/era.png";
import foxLogo from "@/public/img/fox.png";
import {
  fadeIn,
  staggerContainer,
  textVariant,
  zoomIn,
} from "@/utils/animations/motion";
import { TypingText } from "@/utils/custom/CustomText";
import { motion } from "framer-motion";
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
    <div className="bg-white dark:bg-slate-700/40 rounded-3xl container mx-auto p-5 shadow-md my-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h1
          variants={fadeIn("up", "tween", 0.1, 0.5)}
          className="text-2xl text-center antialiased capitalize sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-neutral-500 dark:text-slate-300 font-catamaran font-extralight bg-slate-50 dark:bg-slate-800 dark:shadow-md dark:shadow-cyan-500 rounded-2xl p-5"
        >
          {/* <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
          Experiences
        </span> */}
          Experiences
          <br /> with{" "}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-rose-500">
            Industrial{" "}
          </span>
          Knowledge
        </motion.h1>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col gap-5 lg:flex-row justify-around items-center dark:bg-slate-800 bg-slate-50/30 rounded-2xl my-3 p-5"
      >
        <motion.div variants={zoomIn(0.2, 1)} className="p-10">
          <Image
            className=" cursor-pointer"
            src={eraLogo}
            width={350}
            height={50}
            alt="clogo"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex flex-col bg-slate-50/30 dark:bg-transparent border border-dashed rounded-2xl p-5 shadow-sm dark:border-slate-500"
        >
          <h1 className="text-3xl antialiased bg-white dark:bg-transparent rounded-xl border border-dashed p-2 my-2 font-bold md:text-6xl lg:text-5xl xl:text-7xl text-neutral-600 font-catamaran dark:text-slate-300 dark:border-slate-500">
            <TypingText title={"Frontend Developer"} />
          </h1>
          <div className="border border-dashed p-3 rounded-xl dark:border-slate-500">
            <h3 className="text-3xl font-bold antialiased text-sky-500 font-catamaran">
              Era InfoTech Ltd.
            </h3>
            <span className="text-2xl antialiased font-bold text-neutral-600 dark:text-slate-300 font-catamaran">
              From 2019-2022
            </span>
            <p className="font-medium antialiased text-neutral-600 dark:text-slate-300 font-catamaran">
              Fareast Tower, 35 Topkhana Road, (Level-3), Dhaka-1000
            </p>
          </div>
          <motion.h1
            variants={textVariant(0.5, 2)}
            className="font-bold antialiased text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-fuchsia-500 text-center pt-5"
          >
            Achievement
          </motion.h1>
          <div className="relative flex justify-between p-3">
            <div className="blur-3xl bg-gradient-to-r from-cyan-300 to-yellow-300 w-[100px] h-[100px] rounded-full"></div>
            <ul className="bg-gray-50 dark:bg-transparent p-5 antialiased rounded-md my-1 text-right text-neutral-500 dark:text-slate-300 font-catamaran text-md font-semibold">
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
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col-reverse gap-5 lg:flex-row justify-around items-center bg-slate-50/30 dark:bg-slate-800 rounded-2xl my-3 p-5"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex flex-col bg-slate-50/30 dark:bg-transparent dark:border-slate-500 border border-dashed rounded-2xl p-5 shadow-sm"
        >
          <h1 className="text-3xl antialiased dark:border-slate-500 bg-white dark:bg-transparent rounded-xl border border-dashed p-2 my-2 font-bold md:text-6xl lg:text-5xl xl:text-7xl text-neutral-600 dark:text-slate-300 font-catamaran">
            <TypingText title={"Lead Frontend Developer"} textStyles={""} />
          </h1>
          <div className="border border-dashed dark:border-slate-500 p-3 rounded-xl">
            <h3 className="text-3xl font-bold text-orange-500 font-catamaran">
              Foxcatcher IT Solution
            </h3>
            <span className="text-2xl font-bold dark:text-slate-300 text-neutral-600 font-catamaran">
              From 2022-Present
            </span>
            <p className="font-medium text-neutral-600 dark:text-slate-300 font-catamaran">
              House: 140, Road: 4, Avenue:4, Mirpur-DOHS, Dhaka-1216
            </p>
          </div>
          <motion.h1
            variants={textVariant(0.5, 2)}
            className="pt-5 antialiased text-center font-bold text-3xl md:text-left md:pl-3 sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500"
          >
            Achievement
          </motion.h1>
          <div className="relative flex justify-between p-3">
            <ul className="bg-gray-50 dark:bg-transparent p-5 dark:text-slate-300 rounded-md my-1 text-neutral-500 font-catamaran text-md font-semibold">
              <li>- One React Native Project done for in-house development</li>
              <li>- Facial recognition based attendance solution completed</li>
              <li>- In-house company own Business page Created</li>
              <li>- Play role as a lead frontend developer in all projects</li>
            </ul>
            <div className="blur-3xl bg-gradient-to-r from-orange-300 to-pink-300 w-[100px] h-[100px] rounded-full"></div>
          </div>
        </motion.div>
        <motion.div variants={zoomIn(0.2, 1)} className="p-10">
          <Image
            className=" cursor-pointer"
            src={foxLogo}
            width={350}
            height={50}
            alt="clogo"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EachExperiences;
