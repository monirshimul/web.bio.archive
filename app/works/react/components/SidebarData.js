// import {
//     BiAddToQueue,
//     BiArchive,
//     BiCodeBlock,
//     BiLogoTailwindCss,
//     BiSpreadsheet,
//   } from "react-icons/bi";
//   import { FaWpforms } from "react-icons/fa6";
//   import { GiMagickTrick } from "react-icons/gi";
//   import { RiLockPasswordFill } from "react-icons/ri";
//   import { SiAxios, SiReactquery } from "react-icons/si";
//   import { TbBrandFramerMotion, TbPasswordFingerprint } from "react-icons/tb";

import { BiSpreadsheet } from "react-icons/bi";
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
    label: "Form Handle",
    link: "#",
    iconImage: <BiSpreadsheet size={iconSize} />,
    children: [
      {
        id: randomId(),
        label: "Reducers Form",
        link: "/works/react/reducers-form",
        iconImage: <TbBrandFramerMotion size={iconSize} />,
      },
    ],
  },
];
