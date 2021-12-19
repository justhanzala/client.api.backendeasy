import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ApiServices from "./pages/ApiServices";

const routes = [
  {
    exact: true,
    path: "/",
    component: Signin,
  },
  {
    exact: true,
    path: "/signin",
    component: Signin,
  },
  {
    exact: true,
    path: "/signup",
    component: Signup,
  },
  {
    exact: true,
    auth: true,
    path: "/dashboard",
    component: Dashboard,
    title: "Dashboard",
  },
  {
    exact: true,
    auth: true,
    path: "/api-services",
    component: ApiServices,
    title: "Api Services",
  },
];

export default routes;
