import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const routes = [
  {
    exact: true,
    path: "/",
    component: Signin,
  },
  {
    exact: true,
    path: "/signup",
    component: Signup,
  },
];

export default routes;
