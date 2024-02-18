"use client";

import { staggerContainer, textVariant } from "@/utils/animations/motion";
import { motion } from "framer-motion";
const WelcomeAny = ({ title = "this" }) => {
  return (
    <div className="container mx-auto rounded-3xl shadow-md p-5 bg-white dark:bg-slate-700/40">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h1
          variants={textVariant(0.5, 2)}
          className="my-5 text-wrap dark:bg-slate-800 rounded-2xl font-extralight antialiased font-catamaran capitalize text-center py-10 px-5 text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl bg-slate-50 dark:shadow-md dark:shadow-cyan-500 text-neutral-600 dark:text-slate-300"
        >
          <span className="font-bold text-wrap bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500">
            Welcome
          </span>{" "}
          to
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-cyan-500">
            {title}{" "}
          </span>
          page
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default WelcomeAny;
