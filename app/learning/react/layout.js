import SideBarReuseable from "@/components/sideBar/SideBar";
import { Items } from "./data/SidebarData";
const ReactLearningLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideBarReuseable
        data={Items}
        title={"Sidebar for React"}
        bg={"bg-purple-500"}
      />
      <div className="flex-1 inset-0">{children}</div>
    </div>
  );
};

export default ReactLearningLayout;
