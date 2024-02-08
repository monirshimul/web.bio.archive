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
    <div className="border flex flex-col lg:flex-row flex-wrap p-10 border-dashed rounded-xl bg-gray-50 gap-5">
      <div className="flex-1 border flex justify-center p-5 shadow-sm bg-white rounded-xl">
        <Doughnut data={dataOne} />
      </div>
      <div className="flex-1 border flex justify-center p-5 shadow-sm bg-white rounded-xl">
        <Doughnut data={dataTwo} />
      </div>
      <div className="flex-1 border flex justify-center p-5 shadow-sm bg-white rounded-xl">
        <Doughnut data={dataThree} />
      </div>
    </div>
  );
};

export default Skills;
