"use client";

import certTwo from "@/public/img/certTwo.png";
import { ImageVariants, staggerContainer } from "@/utils/animations/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import CertificationsList from "./CertificationsList";

const Certifications = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col gap-5 justify-center items-center bg-slate-50/30 rounded-2xl my-3 p-3 dark:bg-slate-800"
    >
      <motion.div
        variants={ImageVariants("left")}
        className="p-10 bg-slate-50 w-full rounded-2xl dark:bg-transparent"
      >
        <Image
          className=" cursor-pointer mx-auto"
          src={certTwo}
          width={500}
          height={500}
          alt="clogo"
        />
        <h1 className="font-bold text-center antialiased text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-fuchsia-500 py-3">
          Certifications
        </h1>
      </motion.div>
      {/* <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="flex shadow-sm flex-col p-5 bg-slate-50/30 dark:bg-slate-800 dark:border-slate-500 border w-96 sm:w-11/12 md:w-10/12 xl:w-9/12 2xl:w-7/12  border-dashed rounded-2xl"
      >
        <h1 className="font-bold antialiased text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-fuchsia-500 py-3">
          Certifications
        </h1>
      </motion.div> */}

      <CertificationsList />
    </motion.div>
  );
};

export default Certifications;
