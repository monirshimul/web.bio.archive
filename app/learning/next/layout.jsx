import SideBarReuseable from "@/components/sideBar/SideBar";
import { Items } from "./data/SidebarData";

const NextLayout = ({ children }) => {
  return (
    <div className="flex gap-2">
      <SideBarReuseable
        data={Items}
        title={"Sidebar for Next Js"}
        bg={"bg-orange-500"}
      />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default NextLayout;
