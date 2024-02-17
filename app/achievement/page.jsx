import AchievementHeading from "./components/AchievementHeading";
import Certifications from "./components/Certifications";
import Olympiad from "./components/Olympiad";
import OpenSource from "./components/OpenSource";

const AchievementPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-cyan-300/50 to-sky-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-cyan-900/50 dark:to-sky-900"></div>
        {/* <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-sky-900/70 dark:via-sky-900/70 dark:to-blue-900/70"></div> */}
      </div>

      <AchievementHeading />
      <div className="container mx-auto px-5 dark:bg-slate-700/40 border border-dashed rounded-2xl dark:border-slate-600 flex flex-col">
        <Certifications />
      </div>
      <div className="container mt-3 mx-auto px-5 dark:bg-slate-700/40 border border-dashed rounded-2xl dark:border-slate-600 flex flex-col">
        <Olympiad />
      </div>
      <div className="container mt-3 mx-auto px-5 dark:bg-slate-700/40 border border-dashed rounded-2xl dark:border-slate-600 flex flex-col">
        <OpenSource />
      </div>
    </div>
  );
};

export default AchievementPage;
