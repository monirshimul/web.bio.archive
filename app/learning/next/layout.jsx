import SideBarReuseable from "@/components/sideBar/SideBar";

const NextLayout = ({ children }) => {
  return (
    <div>
      <SideBarReuseable />
      {children}
    </div>
  );
};

export default NextLayout;
