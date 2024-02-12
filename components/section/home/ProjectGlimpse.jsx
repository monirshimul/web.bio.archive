import { fadeIn, staggerContainer } from "@/utils/animations/motion";
import { motion } from "framer-motion";
import ProjectAmarProperty from "./ProjectAmarProperty";
import ProjectEkycAssist from "./ProjectEkycAssist";
import ProjectEkycSelf from "./ProjectEkycSelf";
import ProjectFoxAttend from "./ProjectFoxAttend";
const ProjectGlimpse = () => {
  return (
    <div className="bg-white rounded-3xl container mx-auto p-5 shadow-md my-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h1
          variants={fadeIn("left", "tween", 0.5, 1)}
          className="my-5 text-wrap font-extralight antialiased font-catamaran capitalize text-center py-10 px-5 text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl  bg-slate-50 text-neutral-600"
        >
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-rose-500">
            Glimpse{" "}
          </span>
          of all Featured{" "}
          <span className="font-bold text-wrap bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-yellow-500">
            Products
          </span>
        </motion.h1>
      </motion.div>

      <ProjectFoxAttend />
      <ProjectAmarProperty />
      <ProjectEkycAssist />
      <ProjectEkycSelf />
    </div>
  );
};

export default ProjectGlimpse;
