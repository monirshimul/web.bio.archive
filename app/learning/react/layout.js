import SideBar from "./ui/sideBar/SideBar";

const ReactLearningLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <main className="max-w-full flex-1 py-5">{children}</main>
    </div>
  );
};

export default ReactLearningLayout;
