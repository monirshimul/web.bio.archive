import {
  BiAddToQueue,
  BiArchive,
  BiCodeBlock,
  BiLogoTailwindCss,
  BiSpreadsheet,
} from "react-icons/bi";
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
let iconSize = 15;
export const Items = [
  {
    id: randomId(),
    label: "Advanced Dynamic",
    link: "/learning/react/advanced/dynamic",
    iconImage: <BiSpreadsheet size={iconSize} />,
    children: [
      {
        id: randomId(),
        label: "Dynamic Menu",
        link: "/learning/react/advanced/dynamic/dynamic-menu",
        iconImage: <TbBrandFramerMotion size={iconSize} />,
      },
      {
        id: randomId(),
        label: "Selected Blur",
        link: "/learning/react/advanced/dynamic/select-blur",
        iconImage: <BiLogoTailwindCss size={iconSize} />,
      },
      {
        id: randomId(),
        label: "Selected Pill",
        link: "/learning/react/advanced/dynamic/select-pill",
        iconImage: <BiLogoTailwindCss size={iconSize} />,
      },
    ],
  },
  {
    id: randomId(),
    label: "Hooks",
    link: "#",
    iconImage: <BiAddToQueue size={iconSize} />,
    children: [
      {
        id: randomId(),
        label: "useCallback",
        link: "/learning/react/hooks/useCallback",
        iconImage: <BiArchive size={iconSize} />,
      },
      {
        id: randomId(),
        label: "useMemo",
        link: "/learning/react/hooks/useMemo",
        iconImage: <BiCodeBlock size={iconSize} />,
      },
      {
        id: randomId(),
        label: "useReducer",
        link: "/learning/react/hooks/useReducer",
        iconImage: <BiCodeBlock size={iconSize} />,
      },
      {
        id: randomId(),
        label: "useTransition",
        link: "/learning/react/hooks/useTransition",
        iconImage: <BiCodeBlock size={iconSize} />,
      },
      {
        id: randomId(),
        label: "useDeferredValue",
        link: "/learning/react/hooks/useDeferredValue",
        iconImage: <BiCodeBlock size={iconSize} />,
      },
    ],
  },
  {
    id: randomId(),
    label: "Tricky",
    link: "/learning/react/advanced/tricky",
    iconImage: <GiMagickTrick size={iconSize} />,
    children: [
      {
        id: randomId(),
        label: "otpGen",
        link: "/learning/react/advanced/tricky/otpGen",
        iconImage: <TbPasswordFingerprint size={iconSize} />,
      },
      {
        id: randomId(),
        label: "passGen",
        link: "/learning/react/advanced/tricky/passGen",
        iconImage: <RiLockPasswordFill size={iconSize} />,
      },
    ],
  },
  {
    id: randomId(),
    label: "Multistep Form",
    link: "/learning/react/multisteps",
    iconImage: <FaWpforms size={iconSize} />,
  },
  {
    id: randomId(),
    label: "axios",
    link: "/learning/react/axios",
    iconImage: <SiAxios size={iconSize} />,
  },
  {
    id: randomId(),
    label: "React Query",
    link: "/learning/react/react-query",
    iconImage: <SiReactquery size={iconSize} />,
  },
];
