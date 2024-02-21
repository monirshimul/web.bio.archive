import { BiLogoTailwindCss, BiSpreadsheet } from "react-icons/bi";
import { FaWpforms } from "react-icons/fa6";
import { GiMagickTrick } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";
import { SiAxios, SiReactquery } from "react-icons/si";
import { TbBrandFramerMotion, TbPasswordFingerprint } from "react-icons/tb";
let randomId = () => {
  let ids = Math.random() * 100;
  let newId = Math.round(ids);
  return newId;
};
export const Items = [
  {
    id: randomId(),
    label: "Advanced Dynamic",
    link: "/learning/react/advanced/dynamic",
    iconImage: <BiSpreadsheet size={25} />,
    children: [
      {
        id: randomId(),
        label: "Dynamic Menu",
        link: "/learning/react/advanced/dynamic/dynamic-menu",
        iconImage: <TbBrandFramerMotion size={25} />,
      },
      {
        id: randomId(),
        label: "Selected Blur",
        link: "/learning/react/advanced/dynamic/select-blur",
        iconImage: <BiLogoTailwindCss size={25} />,
      },
      {
        id: randomId(),
        label: "Selected Pill",
        link: "/learning/react/advanced/dynamic/select-pill",
        iconImage: <BiLogoTailwindCss size={25} />,
      },
    ],
  },
  // {
  //   id: randomId(),
  //   label: "Hooks",
  //   link: "#",
  //   iconImage: <BiAddToQueue size={25} />,
  //   children: [
  //     {
  //       id: randomId(),
  //       label: "useCallback",
  //       link: "/learning/react/hooks/useCallback",
  //       iconImage: <BiArchive size={25} />,
  //     },
  //     {
  //       id: randomId(),
  //       label: "useMemo",
  //       link: "/learning/react/hooks/useMemo",
  //       iconImage: <BiCodeBlock size={25} />,
  //     },
  //   ],
  // },
  {
    id: randomId(),
    label: "Tricky",
    link: "/learning/react/advanced/tricky",
    iconImage: <GiMagickTrick size={25} />,
    children: [
      {
        id: randomId(),
        label: "otpGen",
        link: "/learning/react/advanced/tricky/otpGen",
        iconImage: <TbPasswordFingerprint size={25} />,
      },
      {
        id: randomId(),
        label: "passGen",
        link: "/learning/react/advanced/tricky/passGen",
        iconImage: <RiLockPasswordFill size={25} />,
      },
    ],
  },
  {
    id: randomId(),
    label: "Multistep Form",
    link: "/learning/react/multisteps",
    iconImage: <FaWpforms size={25} />,
  },
  {
    id: randomId(),
    label: "axios",
    link: "/learning/react/axios",
    iconImage: <SiAxios size={25} />,
  },
  {
    id: randomId(),
    label: "React Query",
    link: "/learning/react/react-query",
    iconImage: <SiReactquery size={25} />,
  },
];
