import BehavioralAspect from "./BehavioralAspect";
import TechnicalAspects from "./TechnicalAspects";
const IndustryCapablities = () => {
  return (
    <div className="bg-white rounded-3xl container mx-auto p-5 shadow-md my-10">
      <h1 className="my-5 text-wrap font-extralight antialiased font-catamaran capitalize text-center py-10 px-5 text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl  bg-slate-50 text-neutral-600">
        Industrial <br />
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-rose-500">
          Capablities{" "}
        </span>
        with{" "}
        <span className="font-bold text-wrap bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-yellow-500">
          Categories
        </span>
      </h1>

      <TechnicalAspects />
      <BehavioralAspect />
    </div>
  );
};

export default IndustryCapablities;
