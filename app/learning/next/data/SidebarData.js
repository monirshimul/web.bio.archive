import {
  BiAddToQueue,
  BiArchive,
  BiCloudUpload,
  BiCodeBlock,
  BiDetail,
  BiEqualizer,
  BiLogoTailwindCss,
  BiSpreadsheet,
} from "react-icons/bi";
import { FaUsersViewfinder } from "react-icons/fa6";
import { LuDatabaseBackup, LuServerCog } from "react-icons/lu";
import { TbBrandFramerMotion } from "react-icons/tb";
let randomId = () => {
  let ids = Math.random() * 100;
  let newId = Math.round(ids);
  return newId;
};
let iconSize = 15;
export const Items = [
  {
    id: randomId(),
    label: "Projects",
    link: "/learning/next/projects",
    iconImage: <BiSpreadsheet size={iconSize} />,
    children: [
      {
        id: randomId(),
        label: "With Framer Motion",
        link: "/learning/next/projects/withFramerMotion",
        iconImage: <TbBrandFramerMotion size={iconSize} />,
      },
      {
        id: randomId(),
        label: "With Tailwind",
        link: "/learning/next/projects/withTailwind",
        iconImage: <BiLogoTailwindCss size={iconSize} />,
      },
    ],
  },
  {
    id: randomId(),
    label: "Topics",
    link: "#",
    iconImage: <BiAddToQueue size={iconSize} />,
    children: [
      {
        id: randomId(),
        label: "Server Component",
        link: "",
        iconImage: <BiArchive size={iconSize} />,
      },
      {
        id: randomId(),
        label: "Client Component",
        link: "",
        iconImage: <BiCodeBlock size={iconSize} />,
      },
      {
        id: randomId(),
        label: "SSG",
        link: "",
        iconImage: <BiCloudUpload size={iconSize} />,
      },
      {
        id: randomId(),
        label: "SSR",
        link: "",
        iconImage: <BiDetail size={iconSize} />,
      },
    ],
  },
  {
    id: randomId(),
    label: "Data Fetching",
    link: "",
    iconImage: <BiEqualizer size={iconSize} />,
  },
  {
    id: randomId(),
    label: "Rendering",
    link: "#",
    iconImage: <FaUsersViewfinder size={iconSize} />,
  },
  {
    id: randomId(),
    label: "Caching",
    link: "",
    iconImage: <LuDatabaseBackup size={iconSize} />,
  },
  {
    id: randomId(),
    label: "Server Actions",
    link: "#",
    iconImage: <LuServerCog size={iconSize} />,
  },
];
