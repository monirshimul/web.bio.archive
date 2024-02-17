"use client";

import Masters from "@/public/img/blockchain.png";
import {
  ImageVariants,
  fadeIn,
  staggerContainer,
} from "@/utils/animations/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Olympiad = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col gap-5 lg:flex-row justify-around items-center bg-slate-50/30 rounded-2xl my-3 dark:bg-slate-800"
    >
      <motion.div
        variants={ImageVariants("left")}
        className="p-10 rounded-2xl bg-white dark:bg-transparent"
      >
        <Image
          className=" cursor-pointer"
          src={Masters}
          width={500}
          height={500}
          alt="clogo"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="flex shadow-sm flex-col p-5 bg-slate-50/30 dark:bg-slate-800 dark:border-slate-500 border w-96 sm:w-11/12 md:w-10/12 xl:w-9/12 2xl:w-7/12  border-dashed rounded-2xl"
      >
        <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 rounded-xl border border-dashed dark:border-slate-500 text-center lg:text-left text-wrap p-3 my-2 font-bold md:text-4xl lg:text-5xl text-neutral-600 dark:text-slate-300 font-catamaran">
          {/* <TypingText title={""} /> */}
          Blockchain Olympiad
        </h1>

        <div className="border border-dashed dark:border-slate-500 p-3 rounded-xl">
          <h1 className="font-bold antialiased text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-fuchsia-500 py-3">
            BCOLBD
          </h1>
          <h3 className="text-3xl font-bold antialiased text-orange-500 font-catamaran">
            Blockchain Olympiad Bangladesh
          </h3>
          <span className="text-2xl dark:text-slate-300 antialiased font-bold text-neutral-600 font-catamaran">
            2022
          </span>
          <p className="font-lg dark:text-slate-300 font-bold antialiased text-neutral-600 font-catamaran">
            Inspiring Empowerment and Innovation
          </p>
          <p className="font-light antialiased dark:text-slate-300 text-neutral-600 font-catamaran">
            Blockchain Olympiad Bangladesh (BCOLBD) has been held since March
            2020. Hundreds of teams compete for the opportunity to win big
            prizes and learn from the experts every year.
          </p>
        </div>
        <h3 className="text-3xl font-bold antialiased my-3 pl-3 text-sky-500 font-catamaran">
          Details
        </h3>
        <div className="relative flex p-3 justify-center">
          {/* <div className="blur-3xl bg-gradient-to-r from-cyan-300 to-yellow-300 w-[100px] h-[100px] rounded-full"></div> */}
          <ul className="bg-gray-50 dark:text-slate-300 dark:bg-slate-700/40 p-5 antialiased rounded-md my-1 text-left text-neutral-500 font-catamaran text-md font-semibold">
            <li>- Placement: Finalist</li>
            <li>- Category: Professional</li>
            <li>- Team Name: Tensor</li>
            <li>- Team ID: 626772511f157</li>
            <li>- Project: HistoryNet</li>
            <li className="text-3xl text-orange-600">
              Explaination:
              <p className="text-sm font-normal font-catamaran text-slate-800 dark:text-slate-300">
                We are proposing a project for mitigating historical distortion
                by archiving historical books in public blockchain networks. The
                project is composed of three core components governed and used
                by different authorities. The whole architecture was designed to
                achieve immutability and decentralized governance so that any
                single authority can not distort any historical evidence ever.
                <br />
                <span className="font-bold dark:text-sky-400">
                  1. Blockchain Network:
                </span>{" "}
                We used Ethereum blockchain network for storing historical data
                immutably. Other blockchain network can also be used the main
                characteristics for choosing a blockchain provider for
                HistoryNet is decentralization, programmability, accessibility,
                permanent immutable storage, scalable read operation.
                <br />{" "}
                <span className="font-bold dark:text-sky-400">
                  2. Decentralized Autonomous Organization (DAO):{" "}
                </span>{" "}
                Smart contracts for controlling the governance of the
                HistoryNet. The autonomous authority for accepting or rejecting
                historical records in the name registry of the HistoryNet. The
                DAO will be responsible for providing the ERC standards for
                listing the books in HistoryNet registry. The more will be
                discusses in the governance section.
                <br />{" "}
                <span className="font-bold dark:text-sky-400">
                  3. Decentralized Application (DApp):{" "}
                </span>{" "}
                DApp is responsible for accessing the functionalities of DAO
                smart contracts. There will be separate user interface for
                authorities and end users of HistoryNet. The public facing
                interfaces for accessing books will be gas free. But the minting
                process in the DAO requires the minter to spend certain amount
                of ether.
              </p>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Olympiad;
