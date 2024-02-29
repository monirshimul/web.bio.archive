import SideBarReuseable from "@/components/sideBar/SideBar";
import { Items } from "./components/SidebarData";
const ReactWorksLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideBarReuseable data={Items} title={"React-Works"} bg={"bg-cyan-500"} />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default ReactWorksLayout;
