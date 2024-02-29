import { useState } from "react";

const SelectTypeInput = ({ data }) => {
  console.log("select child", data);
  const [multiSelect, setMultiSelect] = useState(data);
  const handleSelectChange = (e, i, arr) => {
    console.log("check select", e.target.value, i, arr);
    arr[i].value = e.target.value;
    setMultiSelect([...arr]);
  };
  return (
    <>
      {multiSelect.map((v, i, arr) => (
        <label
          key={i}
          for="small"
          className="block mb-2 text-sm font-medium text-slate-900 dark:text-slate-400"
        >
          {v.label}
          <select
            name={v.name}
            value={v.value}
            id="small"
            onChange={(e) => handleSelectChange(e, i, arr)}
            className=" block p-2 mb-6 w-11/12 text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose an option</option>
            {v.options.map((cv, ci) => (
              <option
                key={ci}
                value={cv}
                className="capitalize dark:bg-slate-700/40"
              >
                {cv}
              </option>
            ))}
          </select>
        </label>
      ))}
    </>
  );
};

export default SelectTypeInput;
