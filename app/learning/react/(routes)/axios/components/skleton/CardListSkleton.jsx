const CardListSkleton = () => {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 bg-slate-50/30 gap-5 rounded-2xl p-3 dark:bg-slate-800">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((v, i) => (
        <div
          key={i}
          className=" border border-dashed dark:border-slate-500 p-3 rounded-xl w-96"
        >
          <h1 className=" bg-slate-300/40 animate-pulse dark:bg-slate-700/40 rounded-2xl border border-dashed dark:border-slate-500 text-wrap p-5 my-2"></h1>
          <div className="">
            <h3 className="bg-slate-300/40 animate-pulse w-72 dark:bg-slate-700/40 rounded-2xl border border-dashed dark:border-slate-500 text-wrap p-2 mt-3"></h3>
            <h3 className="bg-slate-300/40 animate-pulse w-52 dark:bg-slate-700/40 rounded-2xl border border-dashed dark:border-slate-500 text-wrap p-2 mt-3"></h3>
            <p className="bg-slate-300/40 animate-pulse w-52 dark:bg-slate-700/40 rounded-2xl border border-dashed dark:border-slate-500 text-wrap p-4 mt-3"></p>
            <p className="bg-slate-300/40 animate-pulse dark:bg-slate-700/40 rounded-2xl border border-dashed dark:border-slate-500 text-wrap p-2 mt-3"></p>
            <p className="bg-slate-300/40 animate-pulse dark:bg-slate-700/40 rounded-2xl border border-dashed dark:border-slate-500 text-wrap p-2 mt-3"></p>
            <p className="bg-slate-300/40 animate-pulse dark:bg-slate-700/40 rounded-2xl border border-dashed dark:border-slate-500 text-wrap p-2 mt-3"></p>
            <p className="bg-slate-300/40 animate-pulse w-72 dark:bg-slate-700/40 rounded-2xl border border-dashed dark:border-slate-500 text-wrap p-2 mt-3"></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardListSkleton;
