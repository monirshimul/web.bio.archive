const Inner = (props) => {
  console.log("props", props);
  return (
    <div className="container mx-auto border rounded-xl mb-5 border-dashed bg-gray-50/30 p-5">
      {props.children(props.label)}
      {props.sub(
        "Here some skill that shows my Experience",
        "text-sm pl-3 text-neutral-400"
      )}
    </div>
  );
};

const CallbackAsChildren = () => {
  let assume = (subTitle, ownStyle) => {
    return <h1 className={ownStyle}>{subTitle}</h1>;
  };
  return (
    <Inner label="Skills" sub={assume}>
      {(val) => (
        <div className="p-2 bg-orange-50/30 text-3xl text-neutral-500 font-bold font-catamaran">
          This is the {val} Section
        </div>
      )}
    </Inner>
  );
};

export default CallbackAsChildren;
