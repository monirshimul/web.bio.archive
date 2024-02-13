import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs, SiReactquery, SiRedux } from "react-icons/si";
export const navItems = [
  {
    label: "Learning",
    link: "#",
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
  },
  {
    label: "Achievement",
    link: "#",
  },
  {
    label: "Blogs",
    link: "",
  },
  {
    label: "Collections",
    link: "#",
  },
];
