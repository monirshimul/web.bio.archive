"use client";

import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs, SiReactquery, SiRedux } from "react-icons/si";
import { useSelector } from "react-redux";

export const useNavData = () => {
  const access =
    useSelector((state) => state.themeChange.privateAccess) || false;
  const navItems = [
    {
      label: "Learning",
      link: "#",
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
      label: "Projects",
      link: "#",
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
      label: "Experiences",
      link: "",
      access: true,
    },
    {
      label: "Achievement",
      link: "#",
      access: true,
    },
    {
      label: "Blogs",
      link: "",
      access: true,
    },
    {
      label: "Collections",
      link: "#",
      access: true,
    },
  ];

  return navItems;
};
