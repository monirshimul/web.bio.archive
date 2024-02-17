const AchievementHeading = () => {
  return (
    <div>
      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="mt-5 container mx-auto">
            <h1 className="my-5 bg-transparent text-wrap dark:shadow-md rounded-2xl font-extralight antialiased font-catamaran text-center py-10 px-5 text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl bg-slate-50 text-neutral-600 dark:text-slate-300">
              Achievement with
              <br />
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-rose-500">
                Certifications
                <br />
              </span>{" "}
              &{" "}
              <span className="font-bold text-wrap bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-yellow-500">
                Contributions
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementHeading;
