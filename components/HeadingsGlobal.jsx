const HeadingsGlobal = ({ title, fontSize, textPosition = "text-left" }) => {
  return (
    <div>
      <h1
        className={`bg-gray-50 dark:bg-slate-700/40 dark:text-slate-300 rounded-lg p-5 my-2 text-slate-600 ${fontSize} ${textPosition} font-normal font-catamaran`}
      >
        {title}
      </h1>
    </div>
  );
};

export default HeadingsGlobal;
