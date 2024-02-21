const Error = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-center text-5xl dark:text-rose-500 text-orange-600 mt-5 font-catamaran text-wrap">
        Something went wrong!
      </h1>
      <p className="text-slate-500 dark:text-slate-300 text-medium mb-5 text-wrap">
        There is an error to fetch the data from the Server.Please try again
        later.
      </p>
    </div>
  );
};

export default Error;
