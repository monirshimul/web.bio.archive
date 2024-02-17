"use client";

import { staggerContainer, zoomIn } from "@/utils/animations/motion";
import { motion } from "framer-motion";
const ReferenceList = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col md:flex-row gap-5 mt-5 items-start justify-center dark:bg-slate-700/40 p-5 rounded-2xl"
    >
      <motion.div
        variants={zoomIn(0.5, 1)}
        className="border border-dashed dark:border-slate-500 p-3 rounded-xl"
      >
        <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 rounded-xl border border-dashed dark:border-slate-500 text-center lg:text-left text-wrap p-3 my-2 font-bold md:text-4xl lg:text-5xl text-neutral-600 dark:text-slate-300 font-catamaran">
          {/* <TypingText title={""} /> */}
          Nahid Chowdhury
        </h1>
        <div className="pl-5">
          <h3 className="text-3xl font-bold antialiased text-orange-500 font-catamaran">
            Tech Lead
          </h3>
          <span className="text-2xl dark:text-slate-300 antialiased font-bold text-neutral-600 font-catamaran">
            Era InfoTech Ltd.
          </span>
          <p className="font-lg dark:text-slate-300 antialiased text-neutral-600 font-catamaran">
            +880 1686-087163
            <br />
            nahid@erainfotechbd.com
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={zoomIn(0.5, 1)}
        className="border border-dashed dark:border-slate-500 p-3 rounded-xl"
      >
        <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 rounded-xl border border-dashed dark:border-slate-500 text-center lg:text-left text-wrap p-3 my-2 font-bold md:text-4xl lg:text-5xl text-neutral-600 dark:text-slate-300 font-catamaran">
          {/* <TypingText title={""} /> */}
          Khairul Alam Taher
        </h1>
        <div className="pl-5">
          <h3 className="text-3xl font-bold antialiased text-orange-500 font-catamaran">
            Staff Software Engineer
          </h3>
          <span className="text-2xl dark:text-slate-300 antialiased font-bold text-neutral-600 font-catamaran">
            VivaSoft Ltd.
          </span>
          <p className="font-lg dark:text-slate-300 antialiased text-neutral-600 font-catamaran">
            +880 1719-314504
            <br />
            khairulalam@gmail.com
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ReferenceList;
