"use client";
import Profile from "@/public/img/user/avaterUser.png";
import Image from "next/image";
import { useSelector } from "react-redux";
const User = () => {
  const data = useSelector((state) => state.userInfo);
  const { users, base64Flag } = data;
  let content = null;
  if (users.length > 0) {
    let copyUser = [...users].pop();
    const {
      BasicInfo: { firstName, lastName, description },
      PersonalInfo: { image },
      OfficialInfo: { department, officeName },
    } = copyUser;
    content = (
      <figure className="md:flex bg-green-100/60 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-48 md:rounded-none rounded-full m-auto"
          src={image ? base64Flag + image : Profile}
          alt=""
          height={100}
          width={100}
        />

        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              {description ? `"${description}"` : " "}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {firstName} {lastName}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {department ? `${department},` : " "} {officeName}
            </div>
          </figcaption>
        </div>
      </figure>
    );
  } else {
    content = (
      <figure className="md:flex bg-neutral-100/60 rounded-xl p-8 md:p-5 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-48 md:rounded-none rounded-full m-auto"
          src={Profile}
          alt=""
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-slate-700">
              “Hey, this is Monirul Islam. Now I’m working as a frontend
              developer at Foxcatcher IT Solution an American based start-up
              firm. Previously I worked for Era Infotech LTD, that was my first
              job. I have gather 5years of industry experiences from Era till
              now. At Era I had some R&D experience in AI, Blockchain and so
              many others modern technologies along side with frontend
              developing.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Md.Monirul Islam
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Software Engineer, Dhaka
            </div>
          </figcaption>
        </div>
      </figure>
    );
  }
  return content;
};

export default User;
