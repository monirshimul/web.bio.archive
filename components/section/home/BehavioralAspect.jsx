import BehavioralAspectCard from "./BehavioralAspectCard";

const BehavioralAspect = () => {
  return (
    <div>
      <h1 className="text-3xl antialiased z-20 text-center rounded-xl border border-dashed p-2 font-bold md:text-6xl lg:text-5xl xl:text-7xl text-slate-600 font-catamaran my-5">
        Behavioral & Cultural Aspects
      </h1>

      <div className="flex flex-col sm:flex-row flex-wrap gap-5 py-5 px-2 border border-dashed justify-center items-center rounded-2xl bg-gray-50">
        <BehavioralAspectCard
          gradiant={"bg-gradient-to-br from-rose-500 to-amber-500"}
          title={"LeaderShip"}
          markNumber={70}
          markString={"70"}
        />
        <BehavioralAspectCard
          gradiant={"bg-gradient-to-r from-amber-500 to-purple-500"}
          title={"Management"}
          markNumber={75}
          markString={"75"}
        />
        <BehavioralAspectCard
          gradiant={"bg-gradient-to-br from-violet-500 to-fuchsia-500"}
          title={"Training"}
          markNumber={80}
          markString={"80"}
        />
        <BehavioralAspectCard
          gradiant={"bg-gradient-to-br from-indigo-500 to-rose-500"}
          title={"Research"}
          markNumber={70}
          markString={"70"}
        />
        <BehavioralAspectCard
          gradiant={"bg-gradient-to-r from-pink-500 to-purple-500"}
          title={"Client Handle"}
          markNumber={65}
          markString={"65"}
        />
      </div>
    </div>
  );
};

export default BehavioralAspect;
