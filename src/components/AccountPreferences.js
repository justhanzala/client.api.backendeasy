import React from "react";
import { Link, useLocation } from "react-router-dom";

// Styled Components
import {
  Box,
  Typography,
  Divider,
  ListItem,
  ListItemText,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const AccountPreferences = () => {
  const location = useLocation();
  const Links = [
    {
      title: "Profile",
      path: "/profile",
    },
    {
      title: "Update Information",
      path: "/update-information",
    },
    {
      title: "Database Setting",
      path: "/database-setting",
    },
    {
      title: "Help",
      path: "/help",
    },
  ];

  return (
    <>
      <Box
        className="d-flex flex-column bg-light me-3 rounded overflow-auto mt-3"
        sx={{ height: "90vh", position: "sticky", top: "5rem", zIndex: 6 }}
      >
        <Box className="px-3 py-3">
          <Typography variant="p" color="black">
            Account preferences
          </Typography>
        </Box>
        <Divider />
        <Box>
          {Links.map(({ click, title, path }, i) => (
            <Link to={path} className="text-decoration-none text-dark" key={i}>
              <ListItem
                button
                onClick={click}
                sx={{
                  bgcolor: location.pathname === path ? grey[300] : "white",
                }}
              >
                <ListItemText primary={title} className="ms-0" />
              </ListItem>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default AccountPreferences;
