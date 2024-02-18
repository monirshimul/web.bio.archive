"use client";

import { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const inputRefs = useRef([]);
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (e, index) => {
    let value = e.target.value;
    console.log(value.substring(value.length - 1));
    if (isNaN(value)) return;
    let newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // move to next inpur if current field is filled
    // if (newOtp[index].length > 0) {
    //   inputRefs.current[index + 1].focus();
    // }
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[newOtp.indexOf("")].focus();
    }
  };
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    console.log("Calling key down", otp[index]);
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };
  //   console.log(otp);
  return (
    <div className="flex flex-row gap-2 sm:gap-4 my-2">
      {otp.map((value, index) => (
        <input
          ref={(input) => (inputRefs.current[index] = input)}
          key={index}
          type="text"
          value={value}
          onChange={(e) => handleChange(e, index)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="block max-w-12 px-3 py-3 dark:bg-slate-700/40 dark:border-slate-500 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:text-slate-300 text-center"
        />
      ))}
    </div>
  );
};

export default OtpInput;
