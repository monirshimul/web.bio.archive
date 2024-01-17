"use client";
import { createContext, useState } from "react";
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

  const changeView = () => {
    let view = {
      Basic: <BasicInfo />,
      Personal: <PersonalInfo />,
      Official: <OfficialInfo />,
    };

    return view[type];
  };

  console.log("personalInfoHandle", personalInfo);
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
      <section className="w-full bg-slate-50/30 max-w-screen-2xl mx-auto mt-5">
        <h1 className="border-b p-5 text-3xl text-neutral-600 font-bold font-catamaran">
          Multisteps Form
        </h1>
        {/* tab sections */}

        <section className="flex flex-col sm:w-full md:flex-row bg-slate-50/30 h-fit p-5 mx-auto gap-2">
          {/* left Side */}
          <div className="w-full md:w-1/4 h-fit bg-white flex flex-col p-3 gap-2">
            <LeftMenuList name="Basic" icon={<GrCloudDownload size={25} />} />
            <LeftMenuList name="Personal" icon={<FaLocationDot size={25} />} />
            <LeftMenuList name="Official" icon={<FaUserGear size={25} />} />
          </div>
          {/* right side */}
          <div className="w-full md:w-3/4 h-fit bg-white">{changeView()}</div>
        </section>
      </section>
    </MainContext.Provider>
  );
};

export default MainForm;
