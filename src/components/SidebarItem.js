import * as React from "react";
import { useHistory } from "react-router-dom";

// Material Ui Modules
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

// Material Ui Icons
import DashboardIcon from "@mui/icons-material/Dashboard";

const SidebarItem = () => {
  const history = useHistory();

  const menus = [
    {
      icon: <DashboardIcon />,
      title: "Dashboard",
      click: () => history.push("/dashboard"),
    },
    {
      icon: <DashboardIcon />,
      title: "API Services",
      click: () => history.push("/api-services"),
    },
  ];

  return (
    <div>
      {menus.map(({ icon, title, click }, i) => (
        <ListItem key={i} button onClick={click}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </div>
  );
};

export default SidebarItem;
