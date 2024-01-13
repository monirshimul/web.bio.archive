import todoImage from "@/public/img/app.png"
import calendarImage from "@/public/img/addver.png"
import { FcCalendar } from "react-icons/fc";
import { FcList } from "react-icons/fc";
import { FcInspection } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcGenealogy } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
export const navItems = [
    {
      label: "Features",
      link: "#",
      children: [
        {
          label: "Todo list",
          link: "#",
          iconImage:<FcList />
        },
        {
          label: "Calendar",
          link: "#",
          iconImage:<FcCalendar />
        },
        {
          label: "Reminders",
          link: "#",
          iconImage:<FcInspection />
        },
        {
          label: "Planning",
          link: "#",
          iconImage:<FcIdea />
        }
      ]
    },
    {
      label: "Compnay",
      link: "#",
      children: [
        {
          label: "History",
          link: "#",
          iconImage:<FcGenealogy />
        },
        {
          label: "Our Team",
          link: "#",
          iconImage:<FcCollaboration />
        },
        {
          label: "Blog",
          link: "#",
          iconImage:<FcReading />
        }
      ]
    },
    {
      label: "Careers",
      link: "#"
    },
    {
      label: "About",
      link: "#"
    }
  ];