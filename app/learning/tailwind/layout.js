import SideBarReuseable from "@/components/sideBar/SideBar";
import { Items } from "./data/SidebarData";
const TailWindLearningLayout = ({ children }) => {
  return (
    <div className="flex gap-2">
      <SideBarReuseable
        data={Items}
        title={"Tailwind Sidebar Menus"}
        bg={"bg-green-50"}
      />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default TailWindLearningLayout;
