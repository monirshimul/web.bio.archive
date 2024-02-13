import selfEkyc from "@/public/img/selfEkyc.PNG";
import {
  ImageVariants,
  fadeIn,
  staggerContainer,
} from "@/utils/animations/motion";
import { TypingText } from "@/utils/custom/CustomText";
import { motion } from "framer-motion";
import Image from "next/image";
const ProjectEkycSelf = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col-reverse gap-5 lg:flex-row justify-around items-center bg-slate-50/30 rounded-2xl my-3 p-5 dark:bg-slate-800"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="flex shadow-sm flex-col bg-slate-50/30 dark:bg-slate-800 border border-dashed rounded-2xl p-5 dark:border-slate-500"
      >
        <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 dark:text-slate-300 dark:border-slate-500  rounded-xl border border-dashed p-2 my-2 font-bold md:text-4xl lg:text-5xl text-neutral-600 font-catamaran">
          <TypingText title={"eKYC-Self Onboarding"} />
        </h1>

        <div className="border border-dashed dark:border-slate-500 p-3 rounded-xl">
          <h3 className="text-3xl font-bold antialiased text-sky-400 font-catamaran">
            Era InfoTech Ltd.
          </h3>
          <span className="text-2xl antialiased dark:text-slate-300 font-bold text-neutral-600 font-catamaran">
            2022-2023
          </span>
          <p className="font-lg font-bold antialiased text-neutral-600 dark:text-slate-300 font-catamaran">
            Played role as a lead Frontend Developer
          </p>
          <p className="font-light antialiased dark:text-slate-300 text-neutral-600 font-catamaran">
            A facial recognition based solution, basically an attendance
            solution that has been
            <br />
            made for all categories organization.
          </p>
        </div>
        <h1 className="font-bold antialiased text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-fuchsia-500 text-center pt-5">
          Technologies
        </h1>
        <div className="relative flex justify-between p-3">
          <div className="blur-3xl bg-gradient-to-r from-cyan-300 to-yellow-300 w-[100px] h-[100px] rounded-full"></div>
          <ul className="bg-gray-50 dark:bg-slate-700/40 p-5 antialiased rounded-md my-1 text-right text-neutral-500 dark:text-slate-300 font-catamaran text-md font-semibold">
            <li>
              - In-House Javascript, React, Next Js trainer for RDCD Projects
            </li>
            <li>
              - R&D experience in AI (DNN), Blockchain (Hyperledger Fabric)
            </li>
            <li>- Successfully completed more than 4 projects</li>
            <li>- Play role as a lead frontend developer in 2 projects</li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        variants={ImageVariants("right")}
        className="p-10 dark:bg-slate-700/40 rounded-2xl"
      >
        <Image
          className=" cursor-pointer"
          src={selfEkyc}
          width={750}
          height={650}
          alt="clogo"
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectEkycSelf;
