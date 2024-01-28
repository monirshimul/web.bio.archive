import databiz from "@/public/img/client-databiz.svg";
import maker from "@/public/img/client-maker.svg";
import meet from "@/public/img/client-meet.svg";
import Profile from "@/public/img/profile.jpg";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const Hero = () => {
  const bannerImages = [databiz, meet, maker];
  return (
    <div className="h-fit w-full bg-slate-50/30 border border-dashed border-gray-100 rounded-lg mx-auto container mt-10 py-5">
      {/* hero */}
      <section className="mx-auto flex max-w-7xl flex-col-reverse gap-2 px-4 pb-12 transition-all md:flex-row md:justify-around md:items-center md:gap-4">
        {/* left div */}

        <div className=" flex flex-col items-center  gap-6 pt-8 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <h1 className="text-4xl font-semibold md:text-6xl">
            <Balancer>Mohammad Monirul Islam</Balancer>
          </h1>
          <p className=" text-neutral-400 md:max-w-[400px]">
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
          <button className="border-balck  w-fit rounded-xl border-2 bg-black px-4 py-2  text-white transition-all hover:border-black hover:bg-black hover:bg-transparent  hover:text-black/90">
            Learn more
          </button>
          <div className="flex gap-2 md:gap-6">
            {bannerImages.map((img, i) => (
              <Image
                className=" h-5 w-auto mx-5 lg:mx-0"
                key={i}
                src={img}
                alt="client-image"
              />
            ))}
          </div>
        </div>

        {/* right div */}
        <section className="md:w-1/2 md:relative flex justify-center items-center group cursor-pointer">
          <div className="hidden xl:block absolute w-7/12 h-96 bottom-20 opacity-20 right-10 transition-all group-hover:scale-105 duration-1000 group-hover:rotate-180 rounded-xl bg-cyan-400"></div>
          <div className="hidden xl:block absolute w-7/12 h-96 top-20 opacity-20 left-10 transition-all group-hover:scale-105 duration-1000 group-hover:-rotate-180 rounded-xl bg-green-400"></div>
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
        </section>
      </section>
    </div>
  );
};

export default Hero;
