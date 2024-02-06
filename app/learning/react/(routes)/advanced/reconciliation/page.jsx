const page = () => {
  return (
    <div className="mx-2">
      <h1 className="bg-gray-50 rounded-lg p-5 my-2 text-neutral-600 text-xl font-bold">
        Reconciliation
      </h1>
      <p className="text-neutral-400 bg-gray-50 rounded-lg p-5">
        React provides a declarative API so that you don’t have to worry about
        exactly what changes on every update. This makes writing applications a
        lot easier, but it might not be obvious how this is implemented within
        React. This article explains the choices we made in React’s “diffing”
        algorithm so that component updates are predictable while being fast
        enough for high-performance apps.
      </p>
    </div>
  );
};

export default page;
