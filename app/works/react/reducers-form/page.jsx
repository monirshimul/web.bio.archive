import HeadingsGlobal from "@/components/HeadingsGlobal";
import MultiInputForm from "./components/MultiInputForm";
import { inputMaker } from "./components/formData";

const page = () => {
  const data = {
    title: "Form Handle With useReducers",
    fontSize: "text-3xl",
    textPosition: "text-center",
  };
  return (
    <div>
      <HeadingsGlobal {...data} />
      <MultiInputForm feedData={inputMaker} />
    </div>
  );
};

export default page;
