"use client";

import ba from "@/public/img/baTwo.png";
import {
  ImageVariants,
  fadeIn,
  staggerContainer,
} from "@/utils/animations/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const EduBa = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col-reverse gap-5 lg:flex-row justify-around items-center bg-slate-50/30 rounded-2xl my-3 dark:bg-slate-800"
    >
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="flex shadow-sm flex-col p-5 bg-slate-50/30 dark:bg-slate-800 dark:border-slate-500 border w-96 sm:w-11/12 md:w-10/12 xl:w-9/12 2xl:w-7/12  border-dashed rounded-2xl"
      >
        <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 rounded-xl border border-dashed dark:border-slate-500 text-center lg:text-left text-wrap p-3 my-2 font-bold md:text-4xl lg:text-5xl text-neutral-600 dark:text-slate-300 font-catamaran">
          {/* <TypingText title={""} /> */}
          Bachelor Of Arts
        </h1>

        <div className="border border-dashed dark:border-slate-500 p-3 rounded-xl">
          <h1 className="font-bold antialiased text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-fuchsia-500 py-3">
            Literature
          </h1>
          <h3 className="text-3xl font-bold antialiased text-orange-500 font-catamaran">
            in English
          </h3>
          <span className="text-2xl dark:text-slate-300 antialiased font-bold text-neutral-600 font-catamaran">
            2008-2014
          </span>
          <p className="font-lg dark:text-slate-300 font-bold antialiased text-neutral-600 font-catamaran">
            National University Of Bangladesh
          </p>
          <p className="font-light antialiased dark:text-slate-300 text-neutral-600 font-catamaran">
            National University was established by an Act of Parliament as an
            affiliating University of the country to impart graduate and
            <br />
            post-graduate level education to the students through its affiliated
            colleges and professional institutions throughout the country.
          </p>
        </div>
        <h3 className="text-3xl font-bold antialiased my-3 pl-3 text-sky-500 font-catamaran">
          Learnings
        </h3>
        <div className="relative flex p-3 justify-center">
          {/* <div className="blur-3xl bg-gradient-to-r from-cyan-300 to-yellow-300 w-[100px] h-[100px] rounded-full"></div> */}
          <ul className="bg-gray-50 dark:text-slate-300 dark:bg-slate-700/40 p-5 antialiased rounded-md my-1 text-left text-neutral-500 font-catamaran text-md font-semibold">
            <li>- Introduction to Drama</li>
            <li>- Romantic Poetry, 16th & 17th Century Poetry </li>

            <li>- Advanced Reading and Writing</li>
            <li>- Restoration and Eighteenth Century Poetry and Drama</li>
            <li>
              - Victorian Poetry, Restoration and Eighteenth Century Fiction
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div variants={ImageVariants("right")} className="p-10">
        <Image
          className=" cursor-pointer"
          src={ba}
          width={500}
          height={500}
          alt="clogo"
        />
      </motion.div>
    </motion.div>
  );
};

export default EduBa;
