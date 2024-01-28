import { createSlice } from "@reduxjs/toolkit";

const userForm = createSlice({
  name: "UserFormInfo",
  initialState: {
    basicInfo: {
      firstName: "",
      lastName: "",
      email: "",
      description: "",
    },
    personalInfo: {
      mimeType: "",
      image: "",
      fatherName: "",
      motherName: "",
      city: "",
      mobile: "",
    },
    officialInfo: {
      officeName: "",
      officeAddress: "",
      department: "",
    },
    base64Flag: "data:image/jpeg;base64,",
    users: [],
  },
  reducers: {
    addUserInfo: (state, action) => {
      let user = {
        BasicInfo: state.basicInfo,
        PersonalInfo: state.personalInfo,
        OfficialInfo: state.officialInfo,
      };
      state.users.push(user);
    },
    onChangeForInfo: (state, action) => {
      const { name, value, section } = action.payload;
      state[section][name] = value;
    },
  },
});

export const { addUserInfo, onChangeForInfo } = userForm.actions;
export default userForm.reducer;
