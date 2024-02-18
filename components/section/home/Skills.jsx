import {
  fadeIn,
  staggerContainer,
  textVariant,
} from "@/utils/animations/motion";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const dataOne = {
  labels: ["React", "Next", "Javascript", "Node"],
  datasets: [
    {
      label: `Core Knowledge`,
      data: [70, 60, 65, 40],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(13, 146, 118)",
      ],
      hoverOffset: 4,
    },
  ],
};

const dataTwo = {
  labels: ["Tailwind", "Material UI", "Bootstrap", "CSS"],
  datasets: [
    {
      label: "UI Design Tools",
      data: [70, 65, 60, 65],
      backgroundColor: [
        "rgb(13, 146, 118)",
        "rgb(159, 112, 253)",
        "rgb(255, 137, 17)",
        "rgb(153, 188, 133)",
      ],
      hoverOffset: 4,
    },
  ],
};

const dataThree = {
  labels: ["Redux Toolkit", "React Native", "Modern JS", "Typescript"],
  datasets: [
    {
      label: "React EcoSystem",
      data: [65, 50, 70, 55],
      backgroundColor: [
        "rgb(255, 137, 17)",
        "rgb(153, 188, 133)",
        "rgb(13, 146, 118)",
        "rgb(159, 112, 253)",
      ],
      hoverOffset: 4,
    },
  ],
};

const Skills = (props) => {
  return (
    <div className="container mx-auto rounded-3xl shadow-md p-5 bg-white dark:bg-slate-700/40">
      {/* <CallbackAsChildren /> */}
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
          Some Graph of{" "}
          <span className="font-bold text-wrap bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-yellow-500">
            Technologies
          </span>{" "}
          that can describe my{" "}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-fuchsia-500">
            Skills
          </span>
        </motion.h1>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" dark:bg-slate-800 container flex flex-col lg:flex-row flex-wrap justify-center items-center py-10 dark:border-slate-500 rounded-xl bg-gray-50 gap-5"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="border dark:shadow-md dark:shadow-purple-500 dark:border-slate-500 p-5 shadow-sm bg-white dark:bg-slate-700/40 rounded-xl"
        >
          <Doughnut data={dataOne} />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.6, 1)}
          className="border dark:shadow-md dark:shadow-teal-500 dark:border-slate-500 p-5 shadow-sm bg-white dark:bg-slate-700/40 rounded-xl"
        >
          <Doughnut data={dataTwo} />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.8, 1)}
          className="border dark:shadow-md dark:shadow-pink-500 dark:border-slate-500 p-5 shadow-sm bg-white dark:bg-slate-700/40 rounded-xl"
        >
          <Doughnut data={dataThree} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
