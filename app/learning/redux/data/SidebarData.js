import { BiSpreadsheet } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
let randomId = () => {
  let ids = Math.random() * 100;
  let newId = Math.round(ids);
  return newId;
};
export const Items = [
  {
    id: randomId(),
    label: "Form Handle",
    link: "/learning/redux/",
    iconImage: <BiSpreadsheet size={25} />,
    //   children: [
    //     {
    //       id: randomId(),
    //       label: "Dynamic Menu",
    //       link: "/learning/react/advanced/dynamic/dynamic-menu",
    //       iconImage: <TbBrandFramerMotion size={25} />,
    //     },
    //     {
    //       id: randomId(),
    //       label: "Selected Blur",
    //       link: "/learning/react/advanced/dynamic/select-blur",
    //       iconImage: <BiLogoTailwindCss size={25} />,
    //     },
    //     {
    //       id: randomId(),
    //       label: "Selected Pill",
    //       link: "/learning/react/advanced/dynamic/select-pill",
    //       iconImage: <BiLogoTailwindCss size={25} />,
    //     },
    //   ],
  },
  {
    id: randomId(),
    label: "Rtk Query",
    link: "/learning/redux/rtk-query",
    iconImage: <TbBrandFramerMotion size={25} />,
  },
];
