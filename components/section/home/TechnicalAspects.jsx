import { CircularProgress } from "@nextui-org/react";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import { FaGithub, FaJava, FaReact } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiAxios,
  SiExpress,
  SiMui,
  SiNextdotjs,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
} from "react-icons/si";
import { TbBrandNodejs, TbBrandReactNative } from "react-icons/tb";

import { fadeIn, staggerContainer } from "@/utils/animations/motion";
import { TypingText } from "@/utils/custom/CustomText";
import { motion } from "framer-motion";
const TechnicalAspects = () => {
  return (
    <section className="">
      {/* first section */}
      <motion.h1
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="text-3xl text-center antialiased bg-white rounded-xl border border-dashed p-2 font-bold md:text-6xl lg:text-5xl xl:text-7xl text-slate-600 font-catamaran my-5"
      >
        <TypingText title={"Technical Aspects"} />
      </motion.h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5"
      >
        {/* card one */}
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="border border-dashed p-5 rounded-2xl shadow"
        >
          <h1 className=" font-bold text-2xl text-white font-catamaran bg-gradient-to-r from-amber-500 to-rose-500 rounded-md w-full p-3">
            Language
          </h1>
          <div className="flex flex-col bg-gray-50 sm:flex-row flex-wrap my-2 border border-dashed rounded-2xl p-3 gap-2 justify-center items-center">
            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <RiJavascriptFill size={25} />
              <p>Javascript</p>
              <CircularProgress
                label=""
                size="md"
                value={70}
                color="success"
                showValueLabel={true}
                valueLabel="70"
              />
            </span>
            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <BiLogoTypescript size={25} />
              <p>TypeScript</p>
              <CircularProgress
                label=""
                size="md"
                value={50}
                color="warning"
                showValueLabel={true}
                valueLabel="50"
              />
            </span>
            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <TbBrandNodejs size={25} />
              <p>Node</p>
              <CircularProgress
                label=""
                size="md"
                value={45}
                color="danger"
                showValueLabel={true}
                valueLabel="45"
              />
            </span>
            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <FaJava size={25} />
              <p>Java</p>
              <CircularProgress
                label=""
                size="md"
                value={40}
                color="danger"
                showValueLabel={true}
                valueLabel="40"
              />
            </span>
          </div>
        </motion.div>
        {/* card two */}
        <motion.div
          variants={fadeIn("up", "tween", 0.6, 1)}
          className="border border-dashed p-5 rounded-2xl shadow"
        >
          <h1 className=" font-bold text-2xl text-white font-catamaran bg-gradient-to-r from-cyan-500 to-rose-500 rounded-md w-full p-3">
            Framework/Library
          </h1>
          <div className="flex flex-col bg-gray-50 sm:flex-row flex-wrap my-2 border border-dashed rounded-2xl p-3 gap-2 justify-center items-center">
            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <FaReact size={25} />
              <p>React</p>
              <CircularProgress
                label=""
                size="md"
                value={75}
                color="success"
                showValueLabel={true}
                valueLabel="75"
              />
            </span>
            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <SiNextdotjs size={25} />
              <p>Next</p>
              <CircularProgress
                label=""
                size="md"
                value={70}
                color="success"
                showValueLabel={true}
                valueLabel="70"
              />
            </span>

            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <SiRedux size={25} />
              <p>Redux Toolkit</p>
              <CircularProgress
                label=""
                size="md"
                value={60}
                color="warning"
                showValueLabel={true}
                valueLabel="60"
              />
            </span>
            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <TbBrandReactNative size={25} />
              <p>React Native</p>
              <CircularProgress
                label=""
                size="md"
                value={50}
                color="danger"
                showValueLabel={true}
                valueLabel="50"
              />
            </span>
          </div>
        </motion.div>
        {/* card three */}
        <motion.div
          variants={fadeIn("up", "tween", 0.7, 1)}
          className="border border-dashed p-5 rounded-2xl shadow"
        >
          <h1 className=" font-bold text-2xl text-white font-catamaran bg-gradient-to-r from-purple-500 to-rose-500 rounded-md w-full p-3">
            Other Tools
          </h1>
          <div className="flex flex-col bg-gray-50 sm:flex-row flex-wrap my-2 border border-dashed rounded-2xl p-3 gap-2 justify-center items-center">
            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <SiAxios size={25} />
              <p>Axios</p>
              <CircularProgress
                label=""
                size="md"
                value={55}
                color="danger"
                showValueLabel={true}
                valueLabel="55"
              />
            </span>
            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <SiReactquery size={25} />
              <p>React Query</p>
              <CircularProgress
                label=""
                size="md"
                value={50}
                color="danger"
                showValueLabel={true}
                valueLabel="50"
              />
            </span>

            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <SiExpress size={25} />
              <p>Express</p>
              <CircularProgress
                label=""
                size="md"
                value={50}
                color="danger"
                showValueLabel={true}
                valueLabel="50"
              />
            </span>
            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <FaGithub size={25} />
              <p>Github</p>
              <CircularProgress
                label=""
                size="md"
                value={55}
                color="warning"
                showValueLabel={true}
                valueLabel="55"
              />
            </span>
          </div>
        </motion.div>
        {/* card Four */}

        <motion.div
          variants={fadeIn("up", "tween", 0.8, 1)}
          className="border border-dashed p-5 rounded-2xl shadow"
        >
          <h1 className=" font-bold text-2xl text-white font-catamaran bg-gradient-to-r from-teal-500 to-pink-500 rounded-md w-full p-3">
            CSS Library
          </h1>
          <div className="flex flex-col bg-gray-50 sm:flex-row flex-wrap my-2 border border-dashed rounded-2xl p-3 gap-2 justify-center items-center">
            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <BiLogoTailwindCss size={25} />
              <p>Tailwind</p>
              <CircularProgress
                label=""
                size="md"
                value={65}
                color="success"
                showValueLabel={true}
                valueLabel="65"
              />
            </span>
            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <SiMui size={25} />
              <p>Material UI </p>
              <CircularProgress
                label=""
                size="md"
                value={70}
                color="success"
                showValueLabel={true}
                valueLabel="70"
              />
            </span>
            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <BsBootstrapFill size={25} />
              <p>Bootstrap</p>
              <CircularProgress
                label=""
                size="md"
                value={60}
                color="warning"
                showValueLabel={true}
                valueLabel="60"
              />
            </span>
            <span className="flex shadow-md font-bold text-md text-slate-500 justify-around items-center gap-2 rounded-2xl bg-white  py-2 px-4">
              <SiStyledcomponents size={25} />
              <p>Styled Component</p>
              <CircularProgress
                label=""
                size="md"
                value={55}
                color="warning"
                showValueLabel={true}
                valueLabel="55"
              />
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechnicalAspects;
