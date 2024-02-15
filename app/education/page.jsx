import EducationHeading from "./components/EducationHeading";
import EducationList from "./components/EducationList";

const EducationPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        {/* <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div> */}
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-sky-900/70 dark:via-sky-900/70 dark:to-blue-900/70"></div>
      </div>

      <EducationHeading />
      <EducationList />
    </div>
  );
};

export default EducationPage;
