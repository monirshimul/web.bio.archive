import eraLogo from "@/public/img/era.png";
import foxLogo from "@/public/img/fox.png";
import { BsFillHouseGearFill } from "react-icons/bs";
import { FaLocationDot, FaUserGear } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

export const expData = [
  {
    positionLabel: "Lead Frontend Developer",
    iconForPositionLabel: <FaUserGear className="text-green-500" size={20} />,
    companyName: "Foxcatcher IT Solution",
    iconForCompanyName: (
      <BsFillHouseGearFill className="text-green-500" size={20} />
    ),
    duration: "2022-Present",
    iconForDuration: <SlCalender className="text-green-500" size={20} />,
    address: "House: 140, Road: 4, Avenue:4, Mirpur-DOHS, Dhaka-1216",
    iconForAddress: <FaLocationDot className="text-green-500" size={20} />,
    achievement: [
      "Successfully completed 3 projects",
      "Development running one project",
    ],
    imgUrl: foxLogo,
  },
  {
    positionLabel: "Frontend Developer",
    iconForPositionLabel: <FaUserGear className="text-cyan-500" size={20} />,
    companyName: "Era InfoTech Ltd.",
    iconForCompanyName: (
      <BsFillHouseGearFill className="text-cyan-500" size={20} />
    ),
    duration: "2019-2022",
    iconForDuration: <SlCalender className="text-cyan-500" size={20} />,
    address: "Fareast Tower, 35 Topkhana Road, (Level-3), Dhaka-1000",
    iconForAddress: <FaLocationDot className="text-cyan-500" size={20} />,
    achievement: [
      "In-House Javascript, React, Next Js trainer for RDCD Projects",
      "R&D experience in AI (DNN), Blockchain (Hyperledger Fabric)",
      "Successfully completed more than 4 projects",
      "Play role as a lead frontend developer in 2 projects",
    ],
    imgUrl: eraLogo,
  },
];
