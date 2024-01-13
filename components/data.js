import todoImage from "@/public/img/app.png"
import calendarImage from "@/public/img/addver.png"
import { FcCalendar } from "react-icons/fc";
import { FcList } from "react-icons/fc";
import { FcInspection } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcGenealogy } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import project from "@/public/img/proIcon.png";
import learning from "@/public/img/learningIcon.png";
import next from "@/public/img/next.png";
import react from "@/public/img/react.svg";
import tailwind from "@/public/img/tailwind.svg";
import typescript from "@/public/img/typescript.png";




export const navItems = [
    {
      label: "Projects",
      link: "#",
      img: project,
      children: [
        {
          label: "Next",
          link: "#",
          iconImage:next
        },
        {
          label: "React",
          link: "#",
          iconImage:react
        },
        {
          label: "TypeScript",
          link: "#",
        //   iconImage:<FcInspection />
          iconImage:typescript
        },
        {
          label: "Tailwind",
          link: "#",
          iconImage:tailwind
        }
      ]
    },
    {
      label: "Learning",
      link: "#",
      img: learning,
      children: [
        {
          label: "TailWind",
          link: "/learning/tailwind",
          iconImage:tailwind
        },
        {
          label: "React",
          link: "#",
          iconImage:react
        },
        {
          label: "Next",
          link: "#",
          iconImage:next
        }
      ]
    },
    {
      label: "Experiences",
      link: ""
    },
    {
      label: "Achievement",
      link: "#"
    },
    {
        label: "Blogs",
        link: ""
      },
      {
        label: "Collections",
        link: "#"
      }
  ];