import DynamicFormSlice from "@/redux/features/testing/UserFormSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    userInfo: DynamicFormSlice,
  },
});
