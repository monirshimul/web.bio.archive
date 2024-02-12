import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  CircularProgress,
} from "@nextui-org/react";
import { motion } from "framer-motion";
const BehavioralAspectCard = ({
  gradiant,
  title,
  markString,
  markNumber,
  variants,
}) => {
  return (
    <motion.div
      variants={variants}
      className="p-3 bg-white rounded-2xl shadow-md"
    >
      <Card className={`w-[240px] h-[240px] border-none ${gradiant}`}>
        <CardBody className="justify-center items-center pb-0">
          <CircularProgress
            classNames={{
              svg: "w-36 h-36 drop-shadow-md",
              indicator: "stroke-white",
              track: "stroke-white/10",
              value: "text-3xl font-semibold text-white",
            }}
            value={markNumber}
            strokeWidth={4}
            showValueLabel={true}
            valueLabel={markString}
          />
        </CardBody>
        <CardFooter className="justify-center items-center pt-0">
          <Chip
            classNames={{
              base: "border-1 bg-white/30 border-white/30 p-5 shadow-lg",
              content: "text-white/90 text-lg font-semibold",
            }}
            variant="bordered"
          >
            {title}
          </Chip>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BehavioralAspectCard;
