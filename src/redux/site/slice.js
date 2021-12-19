import { createSlice } from "@reduxjs/toolkit";

const site = createSlice({
  name: "site",
  initialState: {
    apiLoading: false,
    loading: false,
    message: {
      variant: "",
      text: "",
    },
  },
  reducers: {
    setApiLoading: (state, action) => {
      state.apiLoading = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setMessage: (state, action) => {
      state.message.variant = action.payload.variant;
      state.message.text = action.payload.text;
    },
  },
});

export default site;
