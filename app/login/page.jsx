"use client";
import Workers from "@/public/img/workersTwo.png";
import { providePrivateAccess } from "@/redux/features/setting/SettingSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const access = useSelector((state) => state.themeChange.privateAccess);
  const [loginData, setLoginData] = useState({
    userName: "",
    pinCode: "",
  });

  const handleLoginData = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const onLoginDataSubmit = (e) => {
    e.preventDefault();
    let check = Object.values(loginData).every(Boolean);
    if (check) {
      dispatch(providePrivateAccess(loginData));
      setLoginData({
        userName: "",
        pinCode: "",
      });
      //   console.log("Access", access);
      //   access ? router.push("/") : "";
    }
  };

  const { userName, pinCode } = loginData;
  //   let check = Object.values(loginData).every(Boolean);
  //   console.log("loginData", check);
  return (
    <section className="w-full h-screen flex justify-center items-center relative overflow-hidden">
      <Image
        src={Workers}
        alt="effect"
        className="blur-3xl absolute top-0 left-0 object-contain z-0 w-full opacity-[0.2]"
        width={1000}
        height={500}
      />
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-lg shadow-indigo-600/10 dark:border-gray-700 dark:bg-gray-800/30 z-10 sm:p-6 md:p-8">
        <form
          className="space-y-6"
          action="#"
          onSubmit={(e) => onLoginDataSubmit(e)}
        >
          <h5 className="text-2xl py-2 font-bold font-catamaran text-gray-600 dark:text-white text-center">
            Login Here
          </h5>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
              Your User Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={handleLoginData}
              className="outline-none block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-orange-500 focus:ring-orange-500 dark:border-slate-500 dark:bg-slate-600 dark:text-white dark:placeholder-slate-400"
              placeholder="User Name"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="pinCode"
              value={pinCode}
              onChange={handleLoginData}
              placeholder="Password"
              className="outline-none block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-orange-500 dark:border-slate-500 dark:bg-slate-600 dark:text-white dark:placeholder-slate-400"
              required
            />
          </div>
          {/* <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-orange-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-orange-600"
                  required
                />
              </div>
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-orange-700 hover:underline dark:text-orange-500"
            >
              Lost Password?
            </a>
          </div> */}
          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            Login your account
          </button>
          {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="#"
              className="text-orange-700 hover:underline dark:text-orange-500"
            >
              Create account
            </a>
          </div> */}
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
