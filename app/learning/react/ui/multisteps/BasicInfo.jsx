"use client";

import { useContext } from "react";
import Headings from "../components/Headings";
import { MainContext } from "./MainForm";

const BasicInfo = () => {
  //   let check = Object.values(basicInfo).every(Boolean);

  let { basicInfo, basicInfoHandle, changeType, checkingVal, status } =
    useContext(MainContext);
  let { firstName, lastName, email } = basicInfo;
  const btnDisableCheck = () => {
    let check = Object.values(basicInfo).every(Boolean);
    if (check) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className="">
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
            value={firstName}
            name="firstName"
            onChange={(e) => basicInfoHandle(e)}
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
            value={lastName}
            name="lastName"
            onChange={(e) => basicInfoHandle(e)}
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
            value={email}
            name="email"
            onChange={(e) => basicInfoHandle(e)}
          />
        </div>
      </section>
      <div>
        <button
          type="button"
          className="bg-orange-500 cursor-pointer shadow-md rounded-md w-24 mb-5 ml-2 p-2 scale-90 transition-all duration-700 text-white hover:rounded-3xl hover:scale-100 hover:shadow-xl disabled:bg-gray-200 disabled:cursor-not-allowed disabled:scale-90 disabled:rounded-md"
          disabled={btnDisableCheck()}
          onClick={() => changeType("Personal", "Basic")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BasicInfo;
