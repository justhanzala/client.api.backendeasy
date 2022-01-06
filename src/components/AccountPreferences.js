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
      path: "/user/profile",
    },
    {
      title: "Update Information",
      path: "/user/update-information",
    },
    {
      title: "Database Setting",
      path: "/user/database-setting",
    },
    {
      title: "Help",
      path: "/user/help",
    },
  ];

  return (
    <>
      <Box
        className="d-flex flex-column bg-light me-3 rounded overflow-auto"
        sx={{
          height: "80vh",
          position: "sticky",
          top: "6rem",
          zIndex: 6,
          mt: "2rem",
        }}
      >
        <Box className="px-3 py-3">
          <Typography variant="p" color="black">
            Account Preferences
          </Typography>
        </Box>
        <Divider />
        <Box>
          {Links.map(({ title, path }, index) => (
            <Link
              to={path}
              className="text-decoration-none text-dark"
              key={index}
            >
              <ListItem
                button
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
