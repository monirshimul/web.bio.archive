"use client";
import Headings from "@/app/learning/react/ui/components/Headings";
import Profile from "@/public/img/user/avaterUser.png";
import { onChangeForInfo } from "@/redux/features/testing/UserFormSlice";
import { Input, Radio, RadioGroup } from "@nextui-org/react";
import Image from "next/image";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
const PersonalInfo = memo(function PersonalInfo() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userInfo);
  const { image } = data?.personalInfo || "";
  const { base64Flag } = data;
  const personalInfoHandle = (e) => {
    dispatch(
      onChangeForInfo({
        name: e.target.name,
        value: e.target.value,
        section: "personalInfo",
      })
    );
  };
  const fileSelectedHandler = (e) => {
    if (e.target.files[0]) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsBinaryString(file);

      reader.onload = () => {
        let baseImage = btoa(reader.result);
        dispatch(
          onChangeForInfo({
            name: "image",
            value: baseImage,
            section: "personalInfo",
          })
        );
      };

      reader.onerror = () => {
        console.log("File Upload Error==========");
      };
    }
  };
  return (
    <div className="max-w-7xl mx-auto border border-dashed dark:border-slate-500 my-5 p-5 rounded-2xl">
      <Headings
        title={"Provide Your Personal Information"}
        bg={
          " bg-orange-50/30 dark:bg-slate-700/40 border-none dark:text-cyan-300"
        }
      />
      <section className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-4 my-10">
        <div className="flex flex-col gap-3 bg-slate-50/30 dark:border-slate-500 dark:bg-slate-700/40 p-5 border border-dashed rounded-lg">
          <div className="p-5 min-w-fit min-h-fit rounded-md border border-slate-300 dark:border-slate-500 border-dashed bg-green-100/60 dark:bg-slate-700/40 dark:hover:bg-slate-700 hover:bg-green-200/60 transition-all">
            <Image
              src={image ? base64Flag + image : Profile}
              //   src={Profile}
              alt="profile"
              height={100}
              width={100}
              className="object-cover mx-auto rounded-xl"
            />
          </div>
          <input
            type="file"
            onChange={(e) => fileSelectedHandler(e)}
            className="text-sm p-3 shadow-sm border border-slate-300 border-dashed bg-neutral-100/50 rounded-xl w-2/3 md:w-full mx-auto text-grey-500 dark:bg-slate-700/40 dark:text-slate-300 
              file:mr-5 file:py-2 file:px-6
              file:rounded-full file:border-0
              file:text-sm file:font-medium dark:border-slate-500
              file:bg-blue-50 file:dark:bg-slate-800 file:dark:text-slate-300 file:text-neutral-500 file:shadow-md
              hover:file:cursor-pointer hover:file:bg-green-50
              hover:file:text-green-700 hover:file:dark:text-orange-400 transition-all
            "
          />
        </div>
        <div className="flex flex-col gap-3 px-3">
          <RadioGroup
            label="Select your city"
            orientation="horizontal"
            name="city"
            // value={city}
            onChange={(e) => personalInfoHandle(e)}
          >
            <Radio value="Dhaka">Dhaka</Radio>
            <Radio value="Sylet">Sylet</Radio>
            <Radio value="Chitagong">Chitagong</Radio>
            <Radio value="Rajshahi">Rajshahi</Radio>
            <Radio value="Dinajpur">Dinajpur</Radio>
          </RadioGroup>
          <Input
            type="text"
            variant="underlined"
            label="Father Name"
            placeholder="Enter Father Name"
            color="success"
            name="fatherName"
            // value={fatherName}
            onChange={(e) => personalInfoHandle(e)}
          />
          <Input
            type="text"
            variant="underlined"
            label="Mother Name"
            placeholder="Enter Mother Name"
            color="success"
            name="motherName"
            // value={motherName}
            onChange={(e) => personalInfoHandle(e)}
          />
          <Input
            type="text"
            variant="underlined"
            label="Mobile"
            placeholder="Enter Mobile Number"
            color="success"
            name="mobile"
            // value={mobile}
            onChange={(e) => personalInfoHandle(e)}
          />
        </div>
      </section>
    </div>
  );
});

export default PersonalInfo;
