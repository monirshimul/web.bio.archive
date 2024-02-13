import { useSelector } from "react-redux";
export const AccessState = () => {
  const data = useSelector((state) => state.themeChange.themeName);
  return data;
};
