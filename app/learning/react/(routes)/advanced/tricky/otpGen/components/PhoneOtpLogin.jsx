"use client";

import { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpLogin = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const handlePhoneNumber = (e) => {
    setphoneNumber(e.target.value);
  };
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    // phone Validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }
    // call the api

    // show otp Input
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Success", otp);
  };
  return (
    <div className="container mx-auto w-11/12 bg-slate-50 dark:bg-slate-700/40 rounded-2xl">
      <h1 className="text-5xl font-bold text-slate-500 dark:text-slate-300 text-center py-5 font-catamaran">
        Otp Validation Logic
      </h1>
      <div className="border border-dashed dark:border-slate-500 rounded-2xl p-3">
        {!showOtpInput ? (
          <form
            className="flex flex-col gap-3 justify-center items-center"
            onSubmit={handlePhoneSubmit}
            action=""
          >
            <input
              type="text"
              value={phoneNumber}
              placeholder="Enter Mobile Number"
              onChange={handlePhoneNumber}
              className="block w-11/12 sm:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 px-3 py-3 dark:bg-slate-700/40 dark:border-slate-500 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:text-slate-300"
            />
            <button
              type="submit"
              className="rounded-2xl w-fit z-10 bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-1 text-white transition-all cursor-pointer hover:scale-90 shadow-lg shadow-orange-600 hover:shadow-sm"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-slate-500 font-bold dark:text-slate-300 text-center">
              Enter OTP sent to{" "}
              <span className="dark:text-green-500 text-orange-500">
                {phoneNumber}
              </span>
            </p>

            <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneOtpLogin;
