import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
const ContactPage = () => {
  return (
    <section className="py-10">
      <div className="rounded-lg px-5 md:px-10 py-10 container mx-auto md:shadow-md relative">
        <div className="absolute top-0 left-0 border-2 w-full h-[100%] blur-3xl opacity-25 group">
          <div
            className=" absolute top-0 right-0 w-full h-[100%] bg-gradient-to-br from-purple-700/40 to-green-700/40 [clip-path:circle(50%_at_100%_0)]
    group-hover:[clip-path:circle(100%)] transition-all duration-700 ease-in-out"
          ></div>
        </div>

        <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center font-catamaran text-sky-900 dark:text-sky-500 py-3">
          What you need is here, Need some help with something?
        </h2>
        <p className="text-sm dark:text-slate-300 md:text-lg md:font-semibold font-thin text-center text-slate-600 font-klee_one">
          Hey I am here to help you. Feel free to contact with me for any kind
          of support or help any time.
        </p>
        <h1 className=" font-yesteryear py-3 dark:text-slate-400 text-lg lg:text-3xl text-center text-slate-600">
          Mohammed Monirul Islam
        </h1>
      </div>

      <div className="container mx-auto flex flex-col justify-center items-center md:flex-row md:flex-wrap lg:flex-nowrap gap-3 py-5 px-3 my-5">
        <div className="flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-lg shadow-green-500/40 dark:bg-gray-800">
          <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-green-500 bg-opacity-5 text-green-500 sm:h-[70px] sm:max-w-[70px]">
            <MdPhone size={30} />
          </div>
          <div className="w-full">
            <h4 className="mb-1 text-xl font-bold text-slate-700 dark:text-green-500">
              Phone Number
            </h4>
            <p className="text-base text-slate-400 dark:text-slate-300">
              (+880) 01912 991020
            </p>
          </div>
        </div>

        <div className="flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-lg shadow-orange-500/40 dark:bg-gray-800">
          <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-orange-500 bg-opacity-5 text-orange-500 sm:h-[70px] sm:max-w-[70px]">
            <TfiEmail size={30} />
          </div>
          <div className="w-full">
            <h4 className="mb-1 text-xl font-bold text-slate-700 dark:text-orange-500">
              Email Address
            </h4>
            <p className="text-base text-slate-400 dark:text-slate-300">
              monirshimul@gmail.com
            </p>
          </div>
        </div>

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

      {/* <div className="max-w-5xl mx-auto flex flex-col items-baseline justify-center md:flex-row md:justify-center gap-8 py-5">
        <div className="cursor-pointer max-w-xs duration-500 hover:shadow-lg p-5 rounded-md">
          <Image
            className="mx-auto"
            width={100}
            height={100}
            alt="service"
            src={`/img/service6.svg`}
          />
          <div className="text-center">
            <h2 className="subpixel-antialiased text-xl font-bold py-2 text-sky-900 transition duration-300 ease-in-out hover:text-orange-500">
              Customer Support
            </h2>
            <p className="text-sm text-gray-500">
              Contact our Colorado-based team by using the button below or
              emailing us at{" "}
              <span className="text-orange-400">support@probee.bd</span>
            </p>
          </div>
        </div>
        <div className="cursor-pointer max-w-xs duration-500 hover:shadow-lg p-5 rounded-md">
          <Image
            className="mx-auto"
            width={100}
            height={100}
            alt="service"
            src={`/img/service5.svg`}
          />

          <div className="text-center">
            <h2 className="text-xl font-bold py-2 text-sky-900 transition duration-300 ease-in-out hover:text-orange-500">
              Help Center
            </h2>
            <p className="text-sm text-gray-500">
              Visit our extensive Help Center for tips, advice, and useful
              articles to make using{" "}
              <span className="font-bold text-sky-900">ProBee</span> even
              easier.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default ContactPage;
