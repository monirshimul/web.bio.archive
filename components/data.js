import { FcIdea } from "react-icons/fc";

export const navItems = [
  {
    label: "Projects",
    link: "#",
    children: [
      {
        label: "Next",
        link: "#",
        iconImage: <FcIdea />,
      },
      {
        label: "React",
        link: "#",
        iconImage: <FcIdea />,
      },
      {
        label: "TypeScript",
        link: "#",
        //   iconImage:<FcInspection />
        iconImage: <FcIdea />,
      },
      {
        label: "Tailwind",
        link: "#",
        iconImage: <FcIdea />,
      },
    ],
  },
  {
    label: "Learning",
    link: "#",
    children: [
      {
        label: "TailWind",
        link: "/learning/tailwind",
        iconImage: <FcIdea />,
      },
      {
        label: "React",
        link: "/learning/react",
        iconImage: <FcIdea />,
      },
      {
        label: "Next",
        link: "#",
        iconImage: <FcIdea />,
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
