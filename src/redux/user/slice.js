import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "User",
  initialState: {
    userData: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload.userData;
    },
  },
});

export default user;
