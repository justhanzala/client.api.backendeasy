import React from "react";
import { useHistory, useLocation } from "react-router-dom";

// Styled Components
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  Dashboard as DashboardIcon,
  Api as ApiIcon,
} from "@mui/icons-material";

const SidebarItem = () => {
  const history = useHistory();
  const location = useLocation();

  const MenuItems = [
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
      {MenuItems.map(({ icon, title, path, click }, i) => (
        <ListItem
          key={i}
          button
          onClick={click}
          sx={{
            bgcolor: location.pathname === path ? grey[100] : "white",
          }}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </>
  );
};

export default SidebarItem;
