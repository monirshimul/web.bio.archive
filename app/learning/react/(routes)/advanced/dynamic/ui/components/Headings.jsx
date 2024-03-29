const Headings = ({ title }) => {
  return (
    <div>
      <h1 className="bg-gray-50 dark:bg-slate-700/40 dark:text-slate-300 rounded-lg p-5 my-2 text-neutral-400 text-xl font-bold">
        {title}
      </h1>
    </div>
  );
};

export default Headings;
