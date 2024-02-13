import { planetVariants, staggerContainer } from "@/utils/animations/motion";
import { TypingText } from "@/utils/custom/CustomText";
import { motion } from "framer-motion";
import BehavioralAspectCard from "./BehavioralAspectCard";
const BehavioralAspect = () => {
  return (
    <div>
      <motion.h1
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="text-3xl antialiased z-20 text-center rounded-xl border border-dashed dark:border-slate-500 dark:bg-slate-800 p-2 font-bold md:text-6xl lg:text-5xl xl:text-7xl text-slate-600 dark:text-slate-300 font-catamaran my-5"
      >
        <TypingText title={"Behavioral & Cultural Aspects"} />
      </motion.h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col sm:flex-row flex-wrap gap-5 py-5 px-2 border border-dashed dark:border-slate-500 justify-center items-center rounded-2xl bg-gray-50 dark:bg-slate-800"
      >
        <BehavioralAspectCard
          gradiant={"bg-gradient-to-br from-rose-500 to-amber-500"}
          title={"LeaderShip"}
          markNumber={70}
          markString={"70"}
          variants={planetVariants("left")}
        />
        <BehavioralAspectCard
          gradiant={"bg-gradient-to-r from-amber-500 to-purple-500"}
          title={"Management"}
          markNumber={75}
          markString={"75"}
          variants={planetVariants("left")}
        />
        <BehavioralAspectCard
          gradiant={"bg-gradient-to-br from-violet-500 to-fuchsia-500"}
          title={"Training"}
          markNumber={80}
          markString={"80"}
          variants={planetVariants("left")}
        />
        <BehavioralAspectCard
          gradiant={"bg-gradient-to-br from-indigo-500 to-rose-500"}
          title={"Research"}
          markNumber={70}
          markString={"70"}
          variants={planetVariants("left")}
        />
        <BehavioralAspectCard
          gradiant={"bg-gradient-to-r from-pink-500 to-purple-500"}
          title={"Client Handle"}
          markNumber={65}
          markString={"65"}
          variants={planetVariants("left")}
        />
      </motion.div>
    </div>
  );
};

export default BehavioralAspect;
