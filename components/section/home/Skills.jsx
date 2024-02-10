import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const dataOne = {
  labels: ["React", "Next", "Javascript", "Node"],
  datasets: [
    {
      label: "Core Knowledge",
      data: [300, 50, 100, 50],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(13, 146, 118)",
      ],
      hoverOffset: 4,
    },
  ],
};

const dataTwo = {
  labels: ["Tailwind", "Material UI", "Bootstrap", "CSS"],
  datasets: [
    {
      label: "UI Design Tools",
      data: [90, 150, 60, 120],
      backgroundColor: [
        "rgb(13, 146, 118)",
        "rgb(159, 112, 253)",
        "rgb(255, 137, 17)",
        "rgb(153, 188, 133)",
      ],
      hoverOffset: 4,
    },
  ],
};

const dataThree = {
  labels: ["Redux Toolkit", "React Native", "Modern JS", "Blockchain"],
  datasets: [
    {
      label: "React EcoSystem",
      data: [150, 90, 100, 50],
      backgroundColor: [
        "rgb(255, 137, 17)",
        "rgb(153, 188, 133)",
        "rgb(13, 146, 118)",
        "rgb(159, 112, 253)",
      ],
      hoverOffset: 4,
    },
  ],
};

const Skills = (props) => {
  return (
    <div className="container mx-auto rounded-3xl shadow-md p-5 bg-white">
      {/* <CallbackAsChildren /> */}

      <h1 className="my-5 text-wrap font-extralight antialiased font-catamaran capitalize text-center py-10 px-5 text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl  bg-slate-50 text-neutral-600">
        Some Graph of{" "}
        <span className="font-bold text-wrap bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-yellow-500">
          Technologies
        </span>{" "}
        that can describe my{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-fuchsia-500">
          Skills
        </span>
      </h1>

      <div className="border container flex flex-col lg:flex-row flex-wrap justify-center items-center py-10 border-dashed rounded-xl bg-gray-50 gap-5">
        <div className="border p-5 shadow-sm bg-white rounded-xl">
          <Doughnut data={dataOne} />
        </div>
        <div className=" border  p-5 shadow-sm bg-white rounded-xl">
          <Doughnut data={dataTwo} />
        </div>
        <div className=" border p-5 shadow-sm bg-white rounded-xl">
          <Doughnut data={dataThree} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
