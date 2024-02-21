import { Spinner } from "@nextui-org/react";
const Loading = () => {
  return (
    <div className=" w-11/12 mx-auto flex justify-center py-5">
      <Spinner label="Loading..." color="warning" />
    </div>
  );
};

export default Loading;
