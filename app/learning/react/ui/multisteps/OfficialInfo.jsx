"use client";
import { Input, Select, SelectItem } from "@nextui-org/react";
import Headings from "../components/Headings";

const OfficialInfo = () => {
  let data = [
    { label: "Software Development", value: "softwareDev" },
    { label: "Quality Assurance", value: "qa" },
    { label: "Software Testing", value: "softwareTest" },
    { label: "UI & UX", value: "uiUx" },
  ];
  return (
    <div>
      <Headings
        title={"Provide Your Official Information"}
        bg={
          " bg-yellow-50/30 dark:bg-slate-700/40 dark:border-slate-500 dark:text-slate-300"
        }
      />
      <section className="mt-5 border dark:border-slate-500 rounded-2xl p-5 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Input
          type="text"
          variant="bordered"
          label="Office Name"
          placeholder="Enter Office Name"
          color="success"
          // name="officeName"
          // value={officeName}
          // onChange={(e) => officialInfoHandle(e)}
        />
        <Input
          type="text"
          variant="bordered"
          label="Office Address"
          placeholder="Enter Office Address"
          color="success"
          // name="officeAddress"
          // value={officeAddress}
          // onChange={(e) => officialInfoHandle(e)}
        />

        <div className="">
          <Select
            variant="bordered"
            label="Departments"
            placeholder="Select Your Department"
            className="max-w-full"
            color="success"
          >
            {data.map((dep) => (
              <SelectItem key={dep.value} value={dep.value}>
                {dep.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </section>
    </div>
  );
};

export default OfficialInfo;
