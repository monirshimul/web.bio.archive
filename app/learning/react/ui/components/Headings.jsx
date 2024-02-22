const Headings = ({ title, bg }) => {
  return (
    <div>
      <h1
        className={`border-b p-5 text-xl dark:text-slate-300 dark:border-slate-500 text-center text-neutral-600 font-bold font-catamaran${bg}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Headings;
