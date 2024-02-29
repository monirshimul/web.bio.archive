import { useState } from "react";

const CheckboxTypeInput = ({ data }) => {
  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };
  console.log("checkChild", userinfo);
  return (
    <>
      {data.map((v, i) => (
        <div key={i} className="flex gap-2">
          <input
            className=""
            type={v.type}
            name={v.name}
            value={v.value}
            onChange={handleChange}
          />
          <label className="capitalize dark:text-slate-300">{v.label}</label>
        </div>
      ))}
    </>
  );
};

export default CheckboxTypeInput;
