import SideBarReuseable from "@/components/sideBar/SideBar";
import { Items } from "./data/SidebarData";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <SideBarReuseable
        data={Items}
        title={"Sidebar for Redux"}
        bg={"bg-rose-500"}
      />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default layout;
