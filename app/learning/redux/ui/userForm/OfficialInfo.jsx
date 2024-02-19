"use client";
import Headings from "@/app/learning/react/ui/components/Headings";
import {
  addUserInfo,
  onChangeForInfo,
} from "@/redux/features/testing/UserFormSlice";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useDispatch } from "react-redux";

const OfficialInfo = () => {
  const dispatch = useDispatch();
  let departments = [
    { label: "Software Development", value: "Software Development" },
    { label: "Quality Assurance", value: "Quality Assurance" },
    { label: "Software Testing", value: "Software Testing" },
    { label: "UI & UX", value: "UI & UX" },
  ];

  const officialInfoHandle = (e) => {
    dispatch(
      onChangeForInfo({
        name: e.target.name,
        value: e.target.value,
        section: "officialInfo",
      })
    );
  };

  const localDataSave = (e) => {
    dispatch(addUserInfo({ notice: "Save The Data" }));
  };

  return (
    <div className="max-w-7xl mx-auto border border-dashed dark:border-slate-500 my-5 p-5 rounded-2xl">
      <Headings
        title={"Provide Your Official Information"}
        bg={
          " bg-yellow-50/30 dark:bg-slate-700/40 border-none dark:text-cyan-300"
        }
      />
      <section className="mt-5 border border-dashed dark:border-slate-500 rounded-xl p-5 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Input
          type="text"
          variant="bordered"
          label="Office Name"
          placeholder="Enter Office Name"
          color="success"
          name="officeName"
          // value={officeName}
          onChange={(e) => officialInfoHandle(e)}
        />
        <Input
          type="text"
          variant="bordered"
          label="Office Address"
          placeholder="Enter Office Address"
          color="success"
          name="officeAddress"
          // value={officeAddress}
          onChange={(e) => officialInfoHandle(e)}
        />

        <div className="">
          <Select
            variant="bordered"
            label="Departments"
            placeholder="Select Your Department"
            className="max-w-full"
            color="success"
            name="department"
            onChange={(e) => officialInfoHandle(e)}
          >
            {departments.map((dep) => (
              <SelectItem key={dep.value} value={dep.value}>
                {dep.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </section>
      <div className="mt-5">
        <button
          onClick={(e) => localDataSave(e)}
          type="button"
          className="bg-orange-500 cursor-pointer shadow-md rounded-md w-24 mb-5 ml-2 p-2 scale-90 transition-all duration-700 dark:shadow-2xl dark:shadow-orange-500 text-white hover:rounded-3xl hover:scale-100 hover:shadow-xl disabled:bg-gray-200 disabled:cursor-not-allowed disabled:scale-90 disabled:rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OfficialInfo;
