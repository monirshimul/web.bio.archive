"use client";

import { staggerContainer, zoomIn } from "@/utils/animations/motion";
import { motion } from "framer-motion";

const CertificationsList = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 bg-slate-50/30 rounded-2xl my-3 p-3 dark:bg-slate-800"
    >
      <motion.div
        variants={zoomIn(0.5, 1)}
        className="border border-dashed dark:border-slate-500 p-3 rounded-xl"
      >
        <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 rounded-xl border border-dashed dark:border-slate-500 text-center lg:text-left text-wrap p-3 my-2 font-bold md:text-4xl lg:text-5xl text-neutral-600 dark:text-slate-300 font-catamaran">
          {/* <TypingText title={""} /> */}
          JAVA-J2EE
        </h1>
        <div className="pl-5">
          <h3 className="text-3xl font-bold antialiased text-orange-500 font-catamaran">
            Issuer: Oracle
          </h3>
          <span className="text-2xl dark:text-slate-300 antialiased font-bold text-neutral-600 font-catamaran">
            2017-2018
          </span>
          <p className="font-lg dark:text-slate-300 font-bold antialiased text-neutral-600 font-catamaran">
            IsDB-BISEW
          </p>
          <p className="font-light antialiased dark:text-slate-300 text-neutral-600 font-catamaran">
            The IsDB-BISEW IT Scholarship Programme commenced in 2003. The
            programme has established
            <br /> itself as a reliable source of IT professionals for
            recruiters in the country.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={zoomIn(0.6, 1)}
        className="border border-dashed dark:border-slate-500 p-3 rounded-xl"
      >
        <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 rounded-xl border border-dashed dark:border-slate-500 text-center lg:text-left text-wrap p-3 my-2 font-bold md:text-4xl lg:text-5xl text-neutral-600 dark:text-slate-300 font-catamaran">
          {/* <TypingText title={""} /> */}
          Blockchain Specialization
        </h1>
        <div className="pl-5">
          <h3 className="text-3xl font-bold antialiased text-orange-500 font-catamaran">
            Issuer: Coursera
          </h3>
          <span className="text-2xl dark:text-slate-300 antialiased font-bold text-neutral-600 font-catamaran">
            February 12, 2019
          </span>
          <p className="font-lg dark:text-slate-300 font-bold antialiased text-neutral-600 font-catamaran">
            University at Buffalo & The State University of New York
          </p>
          <p className="font-light antialiased text-sky-400 font-catamaran">
            <a
              className=""
              target="_blank"
              href="https://coursera.org/share/bac2374d1a1918d00bc6488a9b31cb0a"
            >
              View Certificate
            </a>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={zoomIn(0.7, 1)}
        className="border border-dashed dark:border-slate-500 p-3 rounded-xl"
      >
        <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 rounded-xl border border-dashed dark:border-slate-500 text-center lg:text-left text-wrap p-3 my-2 font-bold md:text-4xl lg:text-5xl text-neutral-600 dark:text-slate-300 font-catamaran">
          {/* <TypingText title={""} /> */}
          React: Software Architecture
        </h1>
        <div className="pl-5">
          <h3 className="text-3xl font-bold antialiased text-orange-500 font-catamaran">
            Issuer: LinkedIn
          </h3>
          <span className="text-2xl dark:text-slate-300 antialiased font-bold text-neutral-600 font-catamaran">
            October 7, 2021
          </span>
          <p className="font-lg dark:text-slate-300 font-bold antialiased text-neutral-600 font-catamaran">
            LinkedIn Learning Certificate of Completion
          </p>
          <p className="font-light antialiased text-sky-400 font-catamaran">
            <a
              className="text-wrap"
              target="_blank"
              href="https://www.linkedin.com/learning/certificates/99fbbced373886fc7976b01d85330a52d600774f4e022bef72766c98f6a15125?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B7fcIWsAMR8mIA447jgA0lQ%3D%3D"
            >
              View Certificate
            </a>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={zoomIn(0.8, 1)}
        className="border border-dashed dark:border-slate-500 p-3 rounded-xl"
      >
        <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 rounded-xl border border-dashed dark:border-slate-500 text-center lg:text-left text-wrap p-3 my-2 font-bold md:text-4xl lg:text-5xl text-neutral-600 dark:text-slate-300 font-catamaran">
          {/* <TypingText title={""} /> */}
          React: Design Patters
        </h1>
        <div className="pl-5">
          <h3 className="text-3xl font-bold antialiased text-orange-500 font-catamaran">
            Issuer: LinkedIn
          </h3>
          <span className="text-2xl dark:text-slate-300 antialiased font-bold text-neutral-600 font-catamaran">
            October 10, 2021
          </span>
          <p className="font-lg dark:text-slate-300 font-bold antialiased text-neutral-600 font-catamaran">
            LinkedIn Learning Certificate of Completion
          </p>
          <p className="font-light antialiased text-sky-400 font-catamaran">
            <a
              className="text-wrap"
              target="_blank"
              href="https://www.linkedin.com/learning/certificates/8f97210aa727871358221af6a482e2e1ddb3ce4a9129275546597dcbd3ac1ef0?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B7fcIWsAMR8mIA447jgA0lQ%3D%3D"
            >
              View Certificate
            </a>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={zoomIn(0.9, 1)}
        className="border border-dashed dark:border-slate-500 p-3 rounded-xl"
      >
        <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 rounded-xl border border-dashed dark:border-slate-500 text-center lg:text-left text-wrap p-3 my-2 font-bold md:text-4xl lg:text-5xl text-neutral-600 dark:text-slate-300 font-catamaran">
          {/* <TypingText title={""} /> */}
          React: Server-Side Rendering
        </h1>
        <div className="pl-5">
          <h3 className="text-3xl font-bold antialiased text-orange-500 font-catamaran">
            Issuer: LinkedIn
          </h3>
          <span className="text-2xl dark:text-slate-300 antialiased font-bold text-neutral-600 font-catamaran">
            October 11, 2021
          </span>
          <p className="font-lg dark:text-slate-300 font-bold antialiased text-neutral-600 font-catamaran">
            LinkedIn Learning Certificate of Completion
          </p>
          <p className="font-light antialiased text-sky-400 font-catamaran">
            <a
              className="text-wrap"
              target="_blank"
              href="https://www.linkedin.com/learning/certificates/6cc802a181e85b2b7de4663c87334824f69d897ab5f81451e462797ce68daa83?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B7fcIWsAMR8mIA447jgA0lQ%3D%3D"
            >
              View Certificate
            </a>
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={zoomIn(1, 1)}
        className="border border-dashed dark:border-slate-500 p-3 rounded-xl"
      >
        <h1 className="text-3xl antialiased bg-white dark:bg-slate-700/40 rounded-xl border border-dashed dark:border-slate-500 text-center lg:text-left text-wrap p-3 my-2 font-bold md:text-4xl lg:text-5xl text-neutral-600 dark:text-slate-300 font-catamaran">
          {/* <TypingText title={""} /> */}
          Functional Programming with JavaScript ES6+
        </h1>
        <div className="pl-5">
          <h3 className="text-3xl font-bold antialiased text-orange-500 font-catamaran">
            Issuer: LinkedIn
          </h3>
          <span className="text-2xl dark:text-slate-300 antialiased font-bold text-neutral-600 font-catamaran">
            November 2, 2021
          </span>
          <p className="font-lg dark:text-slate-300 font-bold antialiased text-neutral-600 font-catamaran">
            LinkedIn Learning Certificate of Completion
          </p>
          <p className="font-light antialiased text-sky-400 font-catamaran">
            <a
              className="text-wrap"
              target="_blank"
              href="https://www.linkedin.com/learning/certificates/3aa8d3a912563200877b9c00ea3b99ca2dfbc06578eabe2146e927b2cd3c1071?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B7fcIWsAMR8mIA447jgA0lQ%3D%3D"
            >
              View Certificate
            </a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificationsList;
