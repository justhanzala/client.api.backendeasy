import React from "react";
import {
  Box,
  Typography,
  Divider,
  ListItem,
  ListItemText,
} from "@mui/material";

const AccountPreferences = () => {
  const Links = [
    {
      click: () => console.log("Clicked"),
      title: "Profile",
      path: "/",
    },
    {
      click: () => console.log("Clicked"),
      title: "Account Setting",
      path: "/",
    },
    {
      click: () => console.log("Clicked"),
      title: "Database Setting",
      path: "/",
    },
    {
      click: () => console.log("Clicked"),
      title: "Product",
      path: "/",
    },
  ];

  return (
    <>
      <Box
        className="d-flex flex-column bg-light me-3 rounded overflow-auto mt-4"
        sx={{ height: "90vh", position: "sticky", top: "1.5rem", zIndex: 6 }}
      >
        <Box className="px-3 py-3">
          <Typography variant="p" color="black">
            Account preferences
          </Typography>
        </Box>
        <Divider />
        <Box>
          {Links.map(({ click, title, path }, i) => (
            <ListItem button onClick={click} key={i}>
              <ListItemText primary={title} className="ms-0" />
            </ListItem>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default AccountPreferences;
