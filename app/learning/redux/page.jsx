import Users from "./ui/user/Users";
import BasicInfo from "./ui/userForm/BasicInfo";
import OfficialInfo from "./ui/userForm/OfficialInfo";
import PersonalInfo from "./ui/userForm/PersonalInfo";

const ReduxLearning = () => {
  return (
    <div>
      <Users />
      <BasicInfo />
      <PersonalInfo />
      <OfficialInfo />
    </div>
  );
};

export default ReduxLearning;
