import { CgPerformance } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa6";
import { GoCodespaces } from "react-icons/go";
import { MdSpeed } from "react-icons/md";

const Services = () => {
  return (
    <div className="bg-white rounded-3xl container mx-auto p-5 shadow-md my-10">
      <h1 className="text-2xl text-center antialiased capitalize sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-neutral-500 font-catamaran font-extralight bg-slate-50 p-5">
        {/* <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
          Experiences
        </span> */}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-500">
          Services
        </span>
        <br /> that <span className="">I </span>
        Provide
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 p-5">
        <div className="flex felx-col  md:flex-row justify-around shadow-sm items-center gap-5 border border-dashed rounded-2xl px-3 py-5">
          <FaLaptopCode
            size={100}
            className="text-white px-3 bg-gradient-to-r from-amber-500 to-purple-500 rounded-2xl"
          />
          <div className="relative">
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-4xl 2xl:text-nowrap rounded-xl p-2 font-bold  text-neutral-600 font-catamaran">
              Web{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-purple-500">
                Development
              </span>
            </h1>
            <p className="font-medium text-neutral-600 font-catamaran p-2">
              Fareast Tower, 35 Topkhana Road, (Level-3), Dhaka-1000
            </p>
            {/* <div className=" absolute bottom-0 right-0 w-[100%] h-[30%] overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-pink-500 -rotate-45 blur-3xl"></div> */}
          </div>
        </div>

        <div className="flex felx-col  md:flex-row justify-around shadow-sm items-center gap-5 border border-dashed rounded-2xl px-3 py-5">
          <GoCodespaces
            size={100}
            className="text-white px-3 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-2xl"
          />
          <div>
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-4xl 2xl:text-nowrap rounded-xl p-2 font-bold  text-neutral-600 font-catamaran">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">
                Stunning
              </span>{" "}
              UI/UX
            </h1>
            <p className="font-medium text-neutral-600 font-catamaran p-2">
              Fareast Tower, 35 Topkhana Road, (Level-3), Dhaka-1000
            </p>
          </div>
        </div>

        <div className="flex felx-col  md:flex-row justify-around shadow-sm items-center gap-5 border border-dashed rounded-2xl px-3 py-5">
          <CgPerformance
            size={100}
            className="text-white px-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl"
          />
          <div>
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-4xl 2xl:text-nowrap rounded-xl p-2 font-bold  text-neutral-600 font-catamaran">
              App{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Performance
              </span>
            </h1>
            <p className="font-medium text-neutral-600 font-catamaran p-2">
              Fareast Tower, 35 Topkhana Road, (Level-3), Dhaka-1000
            </p>
          </div>
        </div>

        <div className="flex felx-col  md:flex-row justify-around shadow-sm items-center gap-5 border border-dashed rounded-2xl px-3 py-5">
          <MdSpeed
            size={100}
            className="text-white px-3 bg-gradient-to-r from-violet-500 to-orange-500 rounded-2xl"
          />
          <div>
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-4xl 2xl:text-nowrap rounded-xl p-2 font-bold  text-neutral-600 font-catamaran">
              Speed{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-orange-500">
                Optimization
              </span>
            </h1>
            <p className="font-medium text-neutral-600 font-catamaran p-2">
              Fareast Tower, 35 Topkhana Road, (Level-3), Dhaka-1000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
