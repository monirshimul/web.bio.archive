const Headings = ({ title, bg }) => {
  return (
    <div>
      <h1
        className={`border-b p-5 text-xl text-center text-neutral-600 font-bold font-catamaran${bg}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Headings;
