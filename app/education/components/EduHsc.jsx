"use client";

import hsc from "@/public/img/hsc.png";
import {
  ImageVariants,
  fadeIn,
  staggerContainer,
} from "@/utils/animations/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const EduHsc = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col gap-5 lg:flex-row justify-around items-center bg-slate-50/30 rounded-2xl my-3 dark:bg-slate-800"
    >
      <motion.div
        variants={ImageVariants("left")}
        className="p-10 bg-slate-50 rounded-2xl dark:bg-transparent"
      >
        <Image
          className=" cursor-pointer"
          src={hsc}
          width={500}
          height={500}
          alt="clogo"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="flex shadow-sm flex-col p-5 bg-slate-50/30 dark:bg-slate-800 dark:border-slate-500 border w-96 sm:w-11/12 md:w-10/12 xl:w-9/12 2xl:w-7/12  border-dashed rounded-2xl"
      >
        <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 rounded-xl border border-dashed dark:border-slate-500 text-center lg:text-left text-wrap p-3 my-2 font-bold md:text-4xl lg:text-5xl text-neutral-600 dark:text-slate-300 font-catamaran">
          {/* <TypingText title={""} /> */}
          Higher Secondary Certificate
        </h1>

        <div className="border border-dashed dark:border-slate-500 p-3 rounded-xl">
          <h1 className="font-bold antialiased text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-fuchsia-500 py-3">
            Science
          </h1>
          <h3 className="text-3xl font-bold antialiased text-orange-500 font-catamaran">
            Govt. Science College
          </h3>
          <span className="text-2xl dark:text-slate-300 antialiased font-bold text-neutral-600 font-catamaran">
            2005-2007
          </span>
          <p className="font-lg dark:text-slate-300 font-bold antialiased text-neutral-600 font-catamaran">
            CGPA: 4.10
          </p>
          <p className="font-light antialiased dark:text-slate-300 text-neutral-600 font-catamaran">
            Government Science College, also known as GSC, is a public higher
            secondary school as well as a degree college affiliated to the
            National University. It is one of the oldest educational
            institutions in Dhaka, Bangladesh established in 1962. It has
            achieved one of the best Results in Dhaka Board since 2010s.
          </p>
        </div>
        <h3 className="text-3xl font-bold antialiased my-3 pl-3 text-sky-500 font-catamaran">
          Learnings
        </h3>
        <div className="relative flex p-3 justify-center">
          {/* <div className="blur-3xl bg-gradient-to-r from-cyan-300 to-yellow-300 w-[100px] h-[100px] rounded-full"></div> */}
          <ul className="bg-gray-50 dark:text-slate-300 dark:bg-slate-700/40 p-5 antialiased rounded-md my-1 text-left text-neutral-500 font-catamaran text-md font-semibold">
            <li>- Math, Higher Math</li>
            <li>- Physics Paper-1,Physics Paper-2</li>
            <li>- Chemistry Paper-1, Chemistry Paper-2</li>
            <li>- Biology and Others.</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EduHsc;
