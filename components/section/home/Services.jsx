import { fadeIn, staggerContainer } from "@/utils/animations/motion";
import { motion } from "framer-motion";
import { CgPerformance } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa6";
import { GoCodespaces } from "react-icons/go";
import { MdSpeed } from "react-icons/md";

const Services = () => {
  return (
    <div className="bg-white dark:bg-slate-700/40 rounded-3xl container mx-auto p-5 shadow-md my-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h1
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="text-2xl text-center antialiased capitalize rounded-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-neutral-500 dark:text-slate-300 font-catamaran font-extralight bg-slate-50 dark:shadow-md dark:shadow-cyan-500 dark:bg-slate-800 p-5"
        >
          {/* <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
          Experiences
        </span> */}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-500">
            Services
          </span>
          <br /> that <span className="">I </span>
          Provide
        </motion.h1>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 p-5"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1.5)}
          className="flex felx-col dark:bg-slate-800 dark:border-slate-500 dark:shadow-xl dark:shadow-orange-500  md:flex-row justify-around shadow-sm items-center gap-5 border border-dashed rounded-2xl px-3 py-5"
        >
          <FaLaptopCode
            size={100}
            className="text-white px-3 bg-gradient-to-r from-amber-500 to-purple-500 rounded-2xl"
          />
          <div className="relative">
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-4xl 2xl:text-nowrap rounded-xl p-2 font-bold  text-neutral-600 dark:text-slate-300 font-catamaran">
              Web{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-purple-500">
                Development
              </span>
            </h1>
            <p className="font-medium text-neutral-600 dark:text-slate-300 font-catamaran p-2">
              Dedicated web app developer, specialist to cutting-edge
              technologies
            </p>
            {/* <div className=" absolute bottom-0 right-0 w-[100%] h-[30%] overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-pink-500 -rotate-45 blur-3xl"></div> */}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.6, 1.6)}
          className="flex felx-col dark:bg-slate-800 dark:border-slate-500 dark:shadow-xl dark:shadow-purple-500  md:flex-row justify-around shadow-sm items-center gap-5 border border-dashed rounded-2xl px-3 py-5"
        >
          <GoCodespaces
            size={100}
            className="text-white px-3 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-2xl"
          />
          <div>
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-4xl 2xl:text-nowrap rounded-xl p-2 font-bold  text-neutral-600 dark:text-slate-300 font-catamaran">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">
                Stunning
              </span>{" "}
              UI/UX
            </h1>
            <p className="font-medium text-neutral-600 dark:text-slate-300 font-catamaran p-2">
              Fullfilling the ui-ux demand with best trend is the main priority
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.7, 1.7)}
          className="flex felx-col dark:bg-slate-800 dark:border-slate-500 dark:shadow-xl dark:shadow-rose-500   md:flex-row justify-around shadow-sm items-center gap-5 border border-dashed rounded-2xl px-3 py-5"
        >
          <CgPerformance
            size={100}
            className="text-white px-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl"
          />
          <div>
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-4xl 2xl:text-nowrap rounded-xl p-2 font-bold  text-neutral-600 dark:text-slate-300 font-catamaran">
              App{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Performance
              </span>
            </h1>
            <p className="font-medium text-neutral-600 dark:text-slate-300 font-catamaran p-2">
              To ensure app perrformance each of the core web vitals are
              measured
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.8, 1.8)}
          className="flex felx-col dark:bg-slate-800 dark:border-slate-500 dark:shadow-xl dark:shadow-cyan-500  md:flex-row justify-around shadow-sm items-center gap-5 border border-dashed rounded-2xl px-3 py-5"
        >
          <MdSpeed
            size={100}
            className="text-white px-3 bg-gradient-to-r from-violet-500 to-orange-500 rounded-2xl"
          />
          <div>
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-4xl 2xl:text-nowrap rounded-xl p-2 font-bold  text-neutral-600 dark:text-slate-300 font-catamaran">
              Speed{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-orange-500">
                Optimization
              </span>
            </h1>
            <p className="font-medium text-neutral-600 dark:text-slate-300 font-catamaran p-2">
              All important metrics of web vitals are followed to produce best
              optimization.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
