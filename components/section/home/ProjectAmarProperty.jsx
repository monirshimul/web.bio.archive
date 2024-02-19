"use client";
import amarPro from "@/public/img/amarPro.PNG";
import AmaarProperty from "@/public/img/pbWeb.png";
import {
  ImageVariants,
  fadeIn,
  staggerContainer,
} from "@/utils/animations/motion";
import { TypingText } from "@/utils/custom/CustomText";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSelector } from "react-redux";
const ProjectAmarProperty = () => {
  const data = useSelector((state) => state.themeChange.themeName);
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col-reverse gap-5 lg:flex-row justify-around items-center bg-slate-50/30 dark:bg-slate-800 rounded-2xl my-3 p-5"
    >
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="flex shadow-sm flex-col bg-slate-50/30 dark:bg-slate-800 border border-dashed rounded-2xl p-5 dark:border-slate-500
        w-[100vw] sm:w-11/12 2xl:w-6/12
        "
      >
        <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 dark:border-slate-500 dark:text-slate-300  rounded-xl border border-dashed p-2 my-2 font-bold md:text-4xl lg:text-5xl text-neutral-600 font-catamaran">
          <TypingText title={"Amaar Property"} />
        </h1>

        <div className="border border-dashed dark:border-slate-500 p-3 rounded-xl">
          <h3 className="text-3xl font-bold antialiased text-orange-500 font-catamaran">
            FoxCatcher IT Solution
          </h3>
          <span className="text-2xl dark:text-slate-300 antialiased font-bold text-neutral-600 font-catamaran">
            2022-2023
          </span>
          <p className="font-lg dark:text-slate-400 font-bold antialiased text-neutral-600 font-catamaran">
            lead Frontend Developer
          </p>
          <p className="font-light dark:text-slate-300 antialiased text-neutral-600 font-catamaran">
            A solution for property management in Bangladesh with all other
            residential facilities.
            <br />
            Aim to manage each module of property preservation business with
            modern facilities and technologies.
          </p>
        </div>
        <h1 className="font-bold antialiased text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-yellow-500 text-center pt-5">
          Technologies
        </h1>
        <div className="relative flex justify-between p-3">
          <div className="hidden md:block blur-3xl bg-gradient-to-r from-cyan-300 to-yellow-300 w-[100px] h-[100px] rounded-full"></div>
          <ul className="bg-gray-50 dark:bg-slate-700/40 dark:text-slate-300 p-5 antialiased rounded-md my-1 text-left text-neutral-500 font-catamaran text-md font-semibold">
            <li>Client App : Next Js</li>
            <li>CSS Framework : Tailwind CSS, Custom CSS</li>
            <li>App (Server) : TypeScript, Node, Express Js.</li>
            <li>Version Control : git</li>
            <li>State Management : redux-toolkit</li>
            <li>Database : Database Indipendent (TypeORM)</li>
            <li>
              <a
                target="_blank"
                href="https://pb-web-static.vercel.app/"
                className="hover:text-orange-500"
              >
                Demo
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        variants={ImageVariants("right")}
        className="p-10 dark:bg-slate-700/40 rounded-2xl"
      >
        <Image
          className=" cursor-pointer"
          src={data === "light" ? AmaarProperty : amarPro}
          width={750}
          height={650}
          alt="clogo"
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectAmarProperty;
