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
export const Items = [
  {
    id: randomId(),
    label: "Projects",
    link: "/learning/next/projects",
    iconImage: <BiSpreadsheet />,
    children: [
      {
        id: randomId(),
        label: "With Framer Motion",
        link: "/learning/next/projects/withFramerMotion",
        iconImage: <TbBrandFramerMotion />,
      },
      {
        id: randomId(),
        label: "With Tailwind",
        link: "/learning/next/projects/withTailwind",
        iconImage: <BiLogoTailwindCss />,
      },
    ],
  },
  {
    id: randomId(),
    label: "Topics",
    link: "#",
    iconImage: <BiAddToQueue />,
    children: [
      {
        id: randomId(),
        label: "Server Component",
        link: "",
        iconImage: <BiArchive />,
      },
      {
        id: randomId(),
        label: "Client Component",
        link: "",
        iconImage: <BiCodeBlock />,
      },
      {
        id: randomId(),
        label: "SSG",
        link: "",
        iconImage: <BiCloudUpload />,
      },
      {
        id: randomId(),
        label: "SSR",
        link: "",
        iconImage: <BiDetail />,
      },
    ],
  },
  {
    id: randomId(),
    label: "Data Fetching",
    link: "",
    iconImage: <BiEqualizer />,
  },
  {
    id: randomId(),
    label: "Rendering",
    link: "#",
    iconImage: <FaUsersViewfinder />,
  },
  {
    id: randomId(),
    label: "Caching",
    link: "",
    iconImage: <LuDatabaseBackup />,
  },
  {
    id: randomId(),
    label: "Server Actions",
    link: "#",
    iconImage: <LuServerCog />,
  },
];
