import databiz from "@/public/img/client-databiz.svg";
import maker from "@/public/img/client-maker.svg";
import meet from "@/public/img/client-meet.svg";
import Profile from "@/public/img/profile.jpg";
import {
  BoxVariants,
  fadeIn,
  staggerContainer,
} from "@/utils/animations/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
const Hero = () => {
  const bannerImages = [databiz, meet, maker];
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="h-fit w-full bg-slate-50/30 dark:bg-slate-700/30 border border-dashed border-gray-100 dark:border-slate-500 rounded-lg mx-auto container mt-10 py-5"
    >
      {/* hero */}
      <section className="relative mx-auto flex max-w-7xl flex-col-reverse gap-2 px-4 pb-12 transition-all md:flex-row md:justify-around md:items-center md:gap-4">
        {/* left div */}
        <div className="absolute top-0 left-0 w-full h-[100%] opacity-0 md:opacity-25 blur-3xl -z-0">
          <div className="absolute top-20 left-0 w-[50%] h-[100%] bg-gradient-to-br from-blue-300 to-green-300 [clip-path:circle(50%_at_100%_0)]"></div>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className=" flex flex-col items-center  gap-6 pt-8 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left"
        >
          <h1 className="text-5xl font-bold font-catamaran lg:text-7xl text-neutral-500 dark:text-slate-300">
            {/* <Balancer>Mohammad Monirul Islam</Balancer> */}
            <span className="">Mohammad</span>
            <br /> Monirul Islam
          </h1>
          <p className=" text-neutral-500 dark:text-slate-300 md:max-w-[400px]">
            <Balancer>
              Hey, this is Monirul Islam. Now I’m working as a frontend
              developer at Foxcatcher IT Solution an American based start-up
              firm. Previously I worked for Era Infotech LTD, that was my first
              job. I have gather 5years of industry experiences from Era till
              now. At Era I had some R&D experience in AI, Blockchain and so
              many others modern technologies along side with frontend
              developing.
            </Balancer>
          </p>
          <button className="rounded-3xl z-10 bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-white transition-all cursor-pointer hover:scale-90 shadow-lg shadow-orange-600 hover:shadow-sm">
            Contact Me
          </button>
          {/* <div className="flex gap-2 md:gap-6">
            {bannerImages.map((img, i) => (
              <Image
                className=" h-5 w-auto mx-5 lg:mx-0"
                key={i}
                src={img}
                alt="client-image"
              />
            ))}
          </div> */}
        </motion.div>

        {/* right div */}
        <motion.section
          variants={fadeIn("down", "tween", 0.2, 1)}
          className="md:w-1/2 md:relative flex justify-center items-center group cursor-pointer"
        >
          <motion.div
            variants={BoxVariants("left")}
            className="hidden xl:block absolute w-7/12 h-96 bottom-20 opacity-20 right-10 transition-all group-hover:scale-105 duration-1000 group-hover:rotate-180 rounded-xl bg-cyan-400"
          ></motion.div>
          <motion.div
            variants={BoxVariants("right")}
            className="hidden xl:block absolute w-7/12 h-96 top-20 opacity-20 left-10 transition-all group-hover:scale-105 duration-1000 group-hover:-rotate-180 rounded-xl bg-green-400"
          ></motion.div>
          {/* <div className="hidden xl:block absolute w-7/12 h-96 bottom-20 opacity-20 right-10 transition-all animate-ping rounded-xl bg-cyan-400"></div>
          <div className="hidden xl:block absolute w-7/12 h-96 top-20 opacity-20 left-10 transition-all  rounded-xl animate-ping bg-green-400"></div> */}

          <Image
            className="hidden h-auto max-w-[400px]  md:block "
            src={Profile}
            alt="hreo-image"
          />
          <Image
            className="h-auto max-w-md  md:hidden mx-auto"
            src={Profile}
            alt="hreo-image"
          />
        </motion.section>
      </section>
    </motion.div>
  );
};

export default Hero;
