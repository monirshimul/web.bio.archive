import { fadeIn, staggerContainer } from "@/utils/animations/motion";
import { motion } from "framer-motion";
import BehavioralAspect from "./BehavioralAspect";
import TechnicalAspects from "./TechnicalAspects";
const IndustryCapablities = () => {
  return (
    <div className="bg-white dark:bg-slate-700/40 rounded-3xl container mx-auto p-5 shadow-md my-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h1
          variants={fadeIn("right", "tween", 0.5, 1)}
          className="my-5 dark:bg-slate-800 text-wrap dark:shadow-md dark:shadow-cyan-500 rounded-2xl font-extralight antialiased font-catamaran capitalize text-center py-10 px-5 text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl  bg-slate-50 text-neutral-600 dark:text-slate-300"
        >
          Industrial <br />
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-rose-500">
            Capablities{" "}
          </span>
          with{" "}
          <span className="font-bold text-wrap bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-yellow-500">
            Categories
          </span>
        </motion.h1>
      </motion.div>

      <TechnicalAspects />
      <BehavioralAspect />
    </div>
  );
};

export default IndustryCapablities;
