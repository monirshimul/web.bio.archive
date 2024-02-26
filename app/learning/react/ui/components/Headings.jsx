const Headings = ({ title, bg }) => {
  return (
    <div>
      <h1
        className={`border-b p-5 text-xl mb-3 container mx-auto bg-slate-50 dark:bg-slate-700/40 dark:text-slate-300 dark:border-slate-500 text-left md:text-center text-neutral-600 font-bold font-catamaran${bg}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Headings;
