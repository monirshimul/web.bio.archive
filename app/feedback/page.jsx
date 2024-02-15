"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Feedback = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="relative overflow-hidden py-16">
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        <div className="-mx-4 flex flex-wrap lg:justify-between ">
          <div className="w-full px-4 md:w-1/2 xl:w-6/12 ">
            <div className="mb-12 max-w-[570px] lg:mb-0 flex flex-col gap-3">
              <span className="font-medium text-orange-500">Feedback</span>
              <h1 className="mb-3 text-2xl font-catamaran font-bold text-sky-900 dark:text-sky-500 sm:text-3xl">
                GET IN TOUCH WITH ME
              </h1>
              <p className="text-slate-500 dark:text-slate-300 mb-8">
                Share your advice or opinions with me and send me some good
                thoughts.
              </p>

              <div className="flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-lg shadow-purple-500/40 dark:bg-gray-800">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-purple-500 bg-opacity-5 text-purple-500 sm:h-[70px] sm:max-w-[70px]">
                  <FaGithub size={30} />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-slate-700 dark:text-purple-500">
                    Github
                  </h4>
                  <p className="text-base text-slate-400 dark:text-slate-300">
                    <a target="_blank" href="https://github.com/monirshimul">
                      github.com/monirshimul
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-lg shadow-sky-500/40 dark:bg-gray-800">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-sky-500 bg-opacity-5 text-sky-500 sm:h-[70px] sm:max-w-[70px]">
                  <FaLinkedin size={30} />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-slate-700 dark:text-sky-500">
                    Linkedin
                  </h4>
                  <p className="text-base text-slate-400 dark:text-slate-300">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/mohammed-monirul-islam-a88263135/"
                    >
                      Mohammed Monirul Islam
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white dark:bg-slate-700/40 p-8 shadow-lg shadow-blue-500/10 sm:p-12">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="userName"
                    className="w-full rounded-lg border border-orange-500/20 px-4 py-3 text-slate-500 dark:bg-slate-800 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="userMail"
                    placeholder="Your Email"
                    className="w-full rounded-lg border border-orange-500/20 px-4 py-3 text-slate-500 dark:bg-slate-800 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                {/* <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Your Passsword"
                    className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div> */}
                <div className="mb-6">
                  <textarea
                    name="userMessage"
                    rows={6}
                    placeholder="Your Message"
                    className="resize-none w-full rounded-lg border border-orange-500/20 px-4 py-3 text-slate-500 dark:bg-slate-800 focus:border-orange-500 focus:outline-none"
                  ></textarea>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="w-full rounded-2xl p-3 text-white transition-all bg-gradient-to-tr from-amber-500 to-orange-600 dark:from-amber-500 dark:to-rose-500 shadow-2xl hover:shadow-sm hover:scale-95 dark:shadow-orange-500/30"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
