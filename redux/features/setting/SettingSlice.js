import { createSlice } from "@reduxjs/toolkit";

const themeSetting = createSlice({
  name: "CurrentTheme",
  initialState: {
    themeName: "dark",
  },
  reducers: {
    changeCurrnetTheme: (state, action) => {
      const { themeValue } = action.payload;
      state.themeName = themeValue;
    },
  },
});

export const { changeCurrnetTheme } = themeSetting.actions;
export default themeSetting.reducer;
