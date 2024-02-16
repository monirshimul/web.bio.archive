import EduBa from "./EduBa";
import EduHsc from "./EduHsc";
import EduIdb from "./EduIdb";
import EduMasters from "./EduMasters";
import EduSsc from "./EduSsc";

const EducationList = () => {
  return (
    <div className="container mx-auto px-5 dark:bg-slate-700/40 border border-dashed rounded-2xl dark:border-slate-600 flex flex-col">
      <EduIdb />
      <EduMasters />
      <EduBa />
      <EduHsc />
      <EduSsc />
    </div>
  );
};

export default EducationList;
