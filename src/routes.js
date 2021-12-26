import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ApiServices from "./pages/ApiServices";
import PublicApi from "./pages/PublicApi";
import PrivateApi from "./pages/PrivateApi";
import AccountSetting from "./pages/AccountSetting";

const routes = [
  {
    exact: true,
    auth: true,
    path: "/",
    component: Dashboard,
    title: "Dashboard",
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
  {
    exact: true,
    auth: true,
    path: "/api-services/public-apis",
    component: PublicApi,
    title: "Public APIs",
  },
  {
    exact: true,
    auth: true,
    path: "/api-services/private-apis",
    component: PrivateApi,
    title: "Private APIs",
  },
  {
    exact: true,
    path: "/account-setting",
    component: AccountSetting,
  },
];

export default routes;
