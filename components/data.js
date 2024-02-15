"use client";

import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa6";
import { GiArchiveResearch } from "react-icons/gi";
import { GrAchievement } from "react-icons/gr";
import {
  MdCastForEducation,
  MdContactPhone,
  MdOutlineWorkHistory,
} from "react-icons/md";
import { SiNextdotjs, SiReactquery, SiRedux } from "react-icons/si";
import { VscFeedback } from "react-icons/vsc";
import { useSelector } from "react-redux";

export const useNavData = () => {
  const access =
    useSelector((state) => state.themeChange.privateAccess) || false;
  const navItems = [
    {
      label: "Research",
      link: "#",
      iconImage: <GiArchiveResearch size={25} />,
      access,
      children: [
        {
          label: "Tailwind",
          link: "/learning/tailwind",
          iconImage: <BiLogoTailwindCss size={25} />,
        },
        {
          label: "React",
          link: "/learning/react",
          iconImage: <FaReact size={25} />,
        },
        {
          label: "Next",
          link: "/learning/next",
          iconImage: <SiNextdotjs size={25} />,
        },
        {
          label: "Redux",
          link: "/learning/redux",
          iconImage: <SiRedux size={25} />,
        },
        {
          label: "Reat-Query",
          link: "#",
          iconImage: <SiReactquery size={25} />,
        },
      ],
    },
    {
      label: "Works",
      link: "#",
      iconImage: <MdOutlineWorkHistory size={25} />,
      access,
      children: [
        {
          label: "Next",
          link: "#",
          iconImage: <SiNextdotjs size={25} />,
        },
        {
          label: "React",
          link: "#",
          iconImage: <FaReact size={25} />,
        },
        {
          label: "TypeScript",
          link: "#",
          //   iconImage:<FcInspection />
          iconImage: <BiLogoTypescript size={25} />,
        },
        {
          label: "Tailwind",
          link: "#",
          iconImage: <BiLogoTailwindCss size={25} />,
        },
        {
          label: "Bootstrap 5",
          link: "#",
          iconImage: <BsBootstrapFill size={25} />,
        },
      ],
    },

    {
      label: "Education",
      link: "/education",
      iconImage: <MdCastForEducation size={25} />,
      access: true,
    },
    {
      label: "Achievement",
      link: "/achievement",
      iconImage: <GrAchievement size={25} />,
      access: true,
    },
    {
      label: "Feedback",
      link: "/feedback",
      iconImage: <VscFeedback size={25} />,
      access: true,
    },
    {
      label: "Contact",
      link: "/contact",
      iconImage: <MdContactPhone size={25} />,
      access: true,
    },
  ];

  return navItems;
};
