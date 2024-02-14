import { createSlice } from "@reduxjs/toolkit";

const themeSetting = createSlice({
  name: "CurrentTheme",
  initialState: {
    themeName: "dark",
    privateAccess: false,
  },
  reducers: {
    changeCurrnetTheme: (state, action) => {
      const { themeValue } = action.payload;
      state.themeName = themeValue;
    },

    providePrivateAccess: (state, action) => {
      const { userName, pinCode } = action.payload;
      if (userName === "monir" && pinCode === "Monir@1234") {
        state.privateAccess = true;
      }
    },

    logoutPrivateAccess: (state, action) => {
      state.privateAccess = false;
    },
  },
});

export const { changeCurrnetTheme, providePrivateAccess, logoutPrivateAccess } =
  themeSetting.actions;
export default themeSetting.reducer;
