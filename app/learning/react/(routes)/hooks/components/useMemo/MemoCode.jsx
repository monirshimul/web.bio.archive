import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
const MemoCode = () => {
  const codeString = `const changeView = useMemo(() => {
    console.log("changeView is called");
    let view = {
      Basic: <BasicInfo />,
      Personal: <PersonalInfo />,
      Official: <OfficialInfo />,
    };

    return view[type];
  }, [type]);`;
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-3 justify-center items-start">
        <div className="bg-slate-50 rounded-2xl p-3 dark:bg-slate-700/40 w-11/12 lg:w-6/12">
          <p className="text-slate-700 text-wrap font-catamaran antialiased dark:text-slate-300 text-lg font-semibold ">
            useMemo hook can be used for caching the return value of a function,
            that is not to be recalculated or rerendered every time the
            component rerendered. We just wrap any function with useMemo hook
            and rest of work should done by itself. it receives two arguments,
            first one is the caching function and second one is the dependency
            array.
          </p>
        </div>
        <div className="p-5 w-11/12 lg:w-6/12 bg-slate-100 rounded-2xl dark:bg-slate-700/40">
          <SyntaxHighlighter language="js" style={atomOneDarkReasonable}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default MemoCode;
