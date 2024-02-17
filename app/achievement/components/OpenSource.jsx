"use client";

import diploma from "@/public/img/openSource.png";
import {
  ImageVariants,
  fadeIn,
  staggerContainer,
} from "@/utils/animations/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const OpenSource = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col-reverse gap-5 lg:flex-row justify-around items-center bg-slate-50/30 rounded-2xl my-3 dark:bg-slate-800"
    >
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="flex shadow-sm flex-col p-5 bg-slate-50/30 dark:bg-slate-800 dark:border-slate-500 border w-96 sm:w-11/12 md:w-10/12 xl:w-9/12 2xl:w-7/12  border-dashed rounded-2xl"
      >
        <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 rounded-xl border border-dashed dark:border-slate-500 text-center lg:text-left text-wrap p-3 my-2 font-bold md:text-4xl lg:text-5xl text-neutral-600 dark:text-slate-300 font-catamaran">
          {/* <TypingText title={""} /> */}
          Open Source Contribution
        </h1>

        <div className="border border-dashed dark:border-slate-500 p-3 rounded-xl">
          <h1 className="font-bold antialiased text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-fuchsia-500 py-3">
            Holy Quran
          </h1>
          <h3 className="text-3xl font-bold antialiased text-orange-500 font-catamaran">
            Ethereum
          </h3>
          <span className="text-2xl dark:text-slate-300 antialiased font-bold text-neutral-600 font-catamaran">
            2019
          </span>
          <p className="font-lg dark:text-sky-400 font-bold antialiased text-neutral-600 font-catamaran">
            <a target="_blank" href="https://holyquran.github.io/">
              holyquran.github.io
            </a>
          </p>
          <p className="font-light antialiased dark:text-slate-300 text-neutral-600 font-catamaran">
            Ehtereum Blockchain based dApp of Al-Quran. The aim of this Project
            is to make a immutable reference of Al-Quran on top of Blockchain
            Technology.
          </p>
        </div>
        <h3 className="text-3xl font-bold antialiased my-3 pl-3 text-orange-600 font-catamaran">
          Solution Architecture
        </h3>
        <div className="relative flex p-3 justify-center">
          {/* <div className="blur-3xl bg-gradient-to-r from-cyan-300 to-yellow-300 w-[100px] h-[100px] rounded-full"></div> */}
          <ul className="bg-gray-50 dark:text-slate-300 dark:bg-slate-700/40 p-5 antialiased rounded-md my-1 text-left text-neutral-500 font-catamaran text-md font-semibold">
            <li>
              <p className="text-sm font-normal font-catamaran text-slate-800 dark:text-slate-300">
                <span className="font-bold dark:text-sky-400">
                  1. Application Architecture:
                </span>{" "}
                The actors of the application are authorities also called
                minters, developers and end users. The application will provide
                interface for each user to interact with the DAO. We are
                mentioning all the tools and technologies used in the currently
                implemented proof of concept in each of the tiers
                <br />
                <span className="font-bold dark:text-sky-400">
                  Blockchain:
                </span>{" "}
                Ethereum, Infura.io Ethereum as a Service
                <br />
                <span className="font-bold dark:text-sky-400">DAO:</span>{" "}
                Solidity Smart Contracts, Name Registry Pattern, Truffle, Remix
                IDE
                <br />
                <span className="font-bold dark:text-sky-400">Dapp:</span>{" "}
                React.js, Web3.js, Metamask
                <br />
                <span className="font-bold dark:text-sky-400">
                  2. Infrastructure Architecture:
                </span>{" "}
                Development, Testing and Production deployment need
                infrastructural support for blockchain development as blockchain
                is a p2p network. For development purpose we have heavily used
                Ganache with Truffle framework for simulating Ethereum
                blockchain in local environment.
                <br /> And for testing and production deployment we have used
                Rinkeby Ethereum testnet with the help of Infura. As trading
                cryptocurrency is illegal in Bangladesh deployment in Ethereum
                mainnet could not become possible. And for the deployment of
                DApp which is SPA developed in React we have used GitHub Pages.
                But we recommend IPFS for the deployment of DApp.
              </p>
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div variants={ImageVariants("right")} className="p-10">
        <Image
          className=" cursor-pointer"
          src={diploma}
          width={500}
          height={500}
          alt="clogo"
        />
      </motion.div>
    </motion.div>
  );
};

export default OpenSource;
