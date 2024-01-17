import Profile from "@/public/img/user/user1.png";
import { Input, Radio, RadioGroup } from "@nextui-org/react";
import Image from "next/image";
import { useContext } from "react";
import Headings from "../components/Headings";
import { MainContext } from "./MainForm";
const PersonalInfo = () => {
  // console.log("PersonalInfo");
  let { fileSelectedHandler, personalInfo, flag, personalInfoHandle } =
    useContext(MainContext);
  let { image, city, fatherName, motherName, mobile } = personalInfo;

  return (
    <div>
      <Headings
        title={"Provide Your Personal Information"}
        bg={" bg-orange-50/30"}
      />
      <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 my-10 mx-3">
        <div className="flex flex-col gap-3 bg-slate-50/30 p-5 border border-dashed rounded-lg">
          <div className="p-5 min-w-fit min-h-fit rounded-md border border-slate-300 border-dashed bg-orange-100/30">
            <Image
              src={image ? flag + image : Profile}
              alt="profile"
              height={100}
              width={100}
              className="object-cover mx-auto rounded-xl"
            />
          </div>
          <input
            type="file"
            onChange={(e) => fileSelectedHandler(e)}
            className="text-sm p-3 shadow-sm border border-slate-300 border-dashed bg-neutral-100/50 rounded-xl w-2/3 md:w-full mx-auto text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-neutral-500 file:shadow-md
            hover:file:cursor-pointer hover:file:bg-green-50
            hover:file:text-green-700 transition-all
          "
          />
        </div>
        <div className="flex flex-col gap-3 px-3">
          <RadioGroup
            label="Select your city"
            orientation="horizontal"
            name="city"
            value={city}
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
            value={fatherName}
            onChange={(e) => personalInfoHandle(e)}
          />
          <Input
            type="text"
            variant="underlined"
            label="Mother Name"
            placeholder="Enter Mother Name"
            color="success"
            name="motherName"
            value={motherName}
            onChange={(e) => personalInfoHandle(e)}
          />
          <Input
            type="text"
            variant="underlined"
            label="Mobile"
            placeholder="Enter Mobile Number"
            color="success"
            name="mobile"
            value={mobile}
            onChange={(e) => personalInfoHandle(e)}
          />
        </div>
      </section>
    </div>
  );
};

export default PersonalInfo;
