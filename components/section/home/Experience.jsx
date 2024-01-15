import Image from "next/image";
import { expData } from "./data";
const Experience = () => {
  console.log("exp", expData);
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl text-neutral-500 font-bold border-b pb-5">
        Experience
      </h1>
      <div className="flex m-5 p-5 flex-col max-w-full shadow-sm justify-around gap-5 mx-auto lg:flex-row">
        {expData.map((val, ind) => (
          <div
            key={ind}
            className="flex flex-col gap-10 xl:flex-row border-2 justify-center md:justify-between items-center bg-slate-50 group px-10 py-7 w-full md:border-t border-neutral-100 rounded-md shadow-sm "
          >
            {/* left Side */}
            <div className="flex flex-col items-start gap-2 w-full xl:border-r">
              <h1 className="flex justify-center items-stretch gap-4 text-2xl text-neutral-500 font-overPass font-semibold">
                {val.iconForPositionLabel}

                {val.positionLabel}
              </h1>
              <h2 className="flex items-stretch justify-center gap-4 text-orange-400 font-normal text-xl font-catamaran">
                {val.iconForCompanyName}
                {val.companyName}
              </h2>
              <span className="flex justify-center items-center gap-4 font-normal text-xl text-neutral-500">
                {val.iconForDuration}
                {val.duration}
              </span>
              <span className="flex justify-center items-center gap-4 font-normal text-lg text-neutral-500">
                {val.iconForAddress}
                {val.address}
              </span>
              <ul className="">
                <span className="font-overPass text-neutral-500 font-semibold">
                  Achievement :
                </span>
                {val.achievement &&
                  val.achievement.map((list, i) => (
                    <li
                      className="pl-5 font-overPass text-neutral-500 text-sm font-normal"
                      key={i}
                    >
                      - {list}
                    </li>
                  ))}
              </ul>
            </div>
            {/* Right Side */}
            <div className="pl-5">
              <Image
                className=" cursor-pointer grayscale transition-all duration-300 group-hover:grayscale-0"
                src={val.imgUrl}
                width={250}
                height={50}
                alt="clogo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
