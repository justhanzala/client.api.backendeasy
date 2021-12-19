import siteSlice from "./site/slice";
import userSlice from "./user/slice";

export const reducers = {
  site: siteSlice.reducer,
  user: userSlice.reducer,
};
