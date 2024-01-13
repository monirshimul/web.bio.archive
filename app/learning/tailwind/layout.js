import SideBar from "./ui/sideBar/SideBar";

const TailWindLearningLayout = ({ children }) => {
  return (
    <div className="flex gap-5">
      <SideBar />
      <main className="max-w-full flex-1 mx-auto p-5">{children}</main>
    </div>
  );
};

export default TailWindLearningLayout;
