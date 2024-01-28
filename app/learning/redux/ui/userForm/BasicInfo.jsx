"use client";
import Headings from "@/app/learning/react/ui/components/Headings";
import { onChangeForInfo } from "@/redux/features/testing/UserFormSlice";
import { Textarea } from "@nextui-org/react";
import { useDispatch } from "react-redux";
const BasicInfo = () => {
  console.count("calling");
  const dispatch = useDispatch();
  const changePropertiesValue = (e) => {
    dispatch(
      onChangeForInfo({
        name: e.target.name,
        value: e.target.value,
        section: "basicInfo",
      })
    );
  };
  return (
    <div className="max-w-7xl mx-auto border-2 border-dashed my-5 p-5 rounded-2xl">
      <Headings
        title={"Provide Your Basic Information"}
        bg={" bg-cyan-50/30"}
      />

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10 mx-3">
        <div>
          <span class="block text-sm font-medium text-slate-500 mb-1">
            First Name
          </span>
          <input
            type="text"
            placeholder="Ex. Monirul"
            className="block w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            name="firstName"
            onChange={(e) => changePropertiesValue(e)}
          />
        </div>

        <div>
          <span class="block text-sm font-medium text-slate-500 mb-1">
            Last Name
          </span>
          <input
            type="text"
            placeholder="Ex. Islam"
            className="block w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            name="lastName"
            onChange={(e) => changePropertiesValue(e)}
          />
        </div>

        <div>
          <span class="block text-sm font-medium text-slate-500 mb-1">
            Email
          </span>
          <input
            type="email"
            placeholder="example@sample.com"
            className="block w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            name="email"
            onChange={(e) => changePropertiesValue(e)}
          />
        </div>
      </section>
      <div className="px-2">
        <Textarea
          label="Description"
          variant="flat"
          placeholder="Enter your description"
          className="max-w-full"
          color="success"
          name="description"
          onChange={(e) => changePropertiesValue(e)}
        />
      </div>
    </div>
  );
};

export default BasicInfo;
