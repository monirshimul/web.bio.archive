"use client";
import { createContext, useMemo, useState } from "react";
import { FaLocationDot, FaUserGear } from "react-icons/fa6";
import { GrCloudDownload } from "react-icons/gr";
import BasicInfo from "./BasicInfo";
import LeftMenuList from "./LeftMenuList";
import OfficialInfo from "./OfficialInfo";
import PersonalInfo from "./PersonalInfo";
export const MainContext = createContext();
const MainForm = () => {
  const [type, setType] = useState("Basic");
  const [flag, setFlag] = useState("data:image/jpeg;base64,");
  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [personalInfo, setPersonalInfo] = useState({
    mimeType: "",
    image: "",
    fatherName: "",
    motherName: "",
    city: "",
    mobile: "",
  });

  const [status, setStatus] = useState({
    Basic: false,
    Personal: false,
    Official: false,
  });

  const basicInfoHandle = (e) => {
    // console.log("event", e);
    setBasicInfo({
      ...basicInfo,
      [e.target.name]: e.target.value,
    });
  };
  console.log("Main Form Rerendered....");

  const personalInfoHandle = (e) => {
    console.log("e radio", e.target.name);
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const fileSelectedHandler = (e) => {
    if (e.target.files[0]) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsBinaryString(file);

      reader.onload = () => {
        let baseImage = btoa(reader.result);
        setPersonalInfo({
          ...personalInfo,
          image: baseImage,
          mimeType: file.type,
        });
      };

      reader.onerror = () => {
        console.log("File Upload Error==========");
      };
    }
  };

  const changeType = (changeType, changeStatus) => {
    setType(changeType);

    if (changeStatus !== undefined) {
      console.log("changeStatus", changeStatus);
      let copyStatus = { ...status };
      copyStatus[changeStatus] = true;
      setStatus(copyStatus);
    }
  };

  const changeView = useMemo(() => {
    console.log("changeView is called");
    let view = {
      Basic: <BasicInfo />,
      Personal: <PersonalInfo />,
      Official: <OfficialInfo />,
    };

    return view[type];
  }, [type]);
  // const changeView = () => {
  //   console.log("changeView is called");
  //   let view = {
  //     Basic: <BasicInfo />,
  //     Personal: <PersonalInfo />,
  //     Official: <OfficialInfo />,
  //   };

  //   return view[type];
  // };

  // console.log("personalInfoHandle", personalInfo);
  return (
    <MainContext.Provider
      value={{
        type,
        changeType,
        basicInfo,
        basicInfoHandle,
        status,
        fileSelectedHandler,
        personalInfo,
        flag,
        personalInfoHandle,
      }}
    >
      <section className="w-full xl:p-5 container mx-auto rounded-2xl bg-slate-50/30 border border-dashed dark:border-slate-500 dark:bg-slate-700/40 max-w-screen-2xl mt-5">
        <h1 className="border-b dark:border-slate-500 p-5 text-3xl text-neutral-600 dark:text-slate-300 font-bold font-catamaran">
          Multisteps Form
        </h1>
        {/* tab sections */}

        <section className="flex flex-col xl:flex-row dark:bg-slate-800 h-fit py-5 px-2 mx-auto gap-2">
          {/* left Side */}
          {/* md:w-2/4 xl:w-1/4 h-fit bg-white p-3 gap-2 */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-1 xl:w-2/5 h-fit bg-white dark:bg-slate-700/40 p-3 gap-2">
            <LeftMenuList name="Basic" icon={<GrCloudDownload size={25} />} />
            <LeftMenuList name="Personal" icon={<FaLocationDot size={25} />} />
            <LeftMenuList name="Official" icon={<FaUserGear size={25} />} />
          </div>
          {/* right side */}
          <div className="w-full h-fit bg-white dark:bg-slate-800">
            {changeView}
          </div>
        </section>
      </section>
    </MainContext.Provider>
  );
};

export default MainForm;
