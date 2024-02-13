import DynamicFormSlice from "@/redux/features/testing/UserFormSlice";
import { configureStore } from "@reduxjs/toolkit";
import ChangeTheme from "./features/setting/SettingSlice";

export const store = configureStore({
  reducer: {
    userInfo: DynamicFormSlice,
    themeChange: ChangeTheme,
  },
});
