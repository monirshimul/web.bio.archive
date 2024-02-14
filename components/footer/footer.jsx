"use client";
import { AiFillYoutube } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
// import { useRouter } from 'next/navigation'
import Link from "next/link";

const Footer = () => {
  // const router = useRouter()
  return (
    <footer className="bg-slate-50/80 dark:bg-slate-800 pt-16 relative">
      <div className="absolute top-0 left-0 w-full h-[100%] opacity-0 md:opacity-25 blur-3xl -z-0">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-br from-blue-300 to-green-300 [clip-path:circle(50%_at_100%_0)]"></div>
      </div>
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2 z-20">
            <Link className="pl-5" href="/">
              <h1 className="text-5xl px-5 py-3 transition-all hover:scale-105 font-extralight text-slate-500 dark:text-orange-500 hover:text-slate-600 font-yesteryear">
                MonirShimul
              </h1>
            </Link>
            {/* <h1 className="text-3xl font-bold text-sky-900 cursor-pointer hover:text-orange-500 duration-500 hover:scale-y-150 transition ease-in-out">
              ProBee
            </h1> */}
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm antialiased text-slate-500 dark:text-slate-300">
                Self-driven, focused and dedicated Software Developer with 4+
                years of Industrial Experience.
              </p>
              <p className="text-sm antialiased text-slate-500 mt-2 dark:text-slate-300">
                Fully passionate about programming, developing new products and
                exploring new Technologies.
              </p>
            </div>
          </div>

          <div className="grid row-gap-8 grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4 items-center z-20">
            <div className="">
              {/* <p className="text-sky-900 font-bold border-b pb-2 border-slate-200/50">
                Features
              </p> */}
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-500  transition-colors duration-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              {/* <p className="text-sky-900 font-bold border-b pb-2 border-slate-200/50">
                Services
              </p> */}
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    Learnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              {/* <p className="text-sky-900 font-bold border-b pb-2 border-slate-200/50">
                Education
              </p> */}
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    Experiences
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    Archive
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              {/* <p className="text-sky-900 font-bold border-b pb-2 border-slate-200/50">
                Company
              </p> */}
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    Achievement
                  </Link>
                </li>
                <li>
                  <Link
                    href="/feedback"
                    className="text-slate-500 transition-colors duration-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between border-t dark:border-slate-500 py-8 sm:flex-row">
          <p className="text-sm text-slate-500 z-20">
            © Copyright {new Date().getFullYear()}{" "}
            <a
              href="#"
              className="text-sky-900 dark:text-sky-400 font-bold hover:text-orange-500 dark:hover:text-orange-500"
            >
              {" "}
              monirshimul
            </a>{" "}
            All rights reserved.
          </p>
          <div className="mt-4 flex items-center space-x-4 sm:mt-0 z-20">
            <a target="_blank" href="https://www.facebook.com/monir.shimul/">
              <MdFacebook className="w-7 h-fit text-slate-400 hover:text-sky-600 duration-300" />
            </a>
            <a target="_blank" href="https://github.com/monirshimul">
              <FaGithub className="w-7 h-fit text-slate-400 hover:text-sky-500 duration-300" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@monirshimul/videos"
            >
              <AiFillYoutube className="w-7 h-fit text-slate-400 hover:text-orange-600 duration-300" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mohammed-monirul-islam-a88263135/"
            >
              <FaLinkedin className="w-7 h-fit text-slate-400 hover:text-sky-600 duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
