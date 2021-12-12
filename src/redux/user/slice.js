import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "User",
  initialState: {
    userData: {},
    loggedIn: false,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export default user;
