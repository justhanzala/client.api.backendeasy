import axios from "axios";
import siteSlice from "./redux/site/slice";
import store from "./redux";

axios.interceptors.request.use(
  async (config) => {
    try {
      const { dispatch } = store;
      dispatch(siteSlice.actions.setApiLoading(true));

      const jwtToken = localStorage.getItem("token");
      config.headers["Authorization"] = `Bearer ${jwtToken}`;

      return config;
    } catch (error) {
      console.log(error);
      return config;
    }
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    const { dispatch } = store;
    dispatch(siteSlice.actions.setMessage({ text: "", variant: "" }));
    const { message = "" } = response.data || {};

    dispatch(siteSlice.actions.setApiLoading(false));
    dispatch(
      siteSlice.actions.setMessage({ text: message, variant: "success" })
    );

    return response;
  },
  (error) => {
    const { dispatch } = store;
    dispatch(siteSlice.actions.setMessage({ text: "", variant: "" }));
    dispatch(siteSlice.actions.setApiLoading(false));
    dispatch(
      siteSlice.actions.setMessage({ text: error.message, variant: "error" })
    );

    Promise.reject(error);
  }
);
