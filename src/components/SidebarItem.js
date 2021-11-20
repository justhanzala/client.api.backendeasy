import * as React from "react";

// Material Ui Modules
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

// Material Ui Icons
import DashboardIcon from "@mui/icons-material/Dashboard";

const SidebarItem = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </div>
  );
};

export default SidebarItem;
