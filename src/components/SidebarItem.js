import * as React from "react";
import { useHistory } from "react-router-dom";

// Material UI Modules
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

// Material UI Icons
import {
  Dashboard as DashboardIcon,
  Api as ApiIcon,
} from "@mui/icons-material";

const SidebarItem = () => {
  const history = useHistory();

  const menus = [
    {
      icon: <DashboardIcon />,
      title: "Dashboard",
      path: "/dashboard",
      click: () => history.push("/dashboard"),
    },
    {
      icon: <ApiIcon />,
      title: "API Services",
      path: "/api-services",
      click: () => history.push("/api-services"),
    },
  ];

  return (
    <>
      {menus.map(({ icon, title, click }, i) => (
        <ListItem key={i} button onClick={click}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </>
  );
};

export default SidebarItem;
