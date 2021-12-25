import React from "react";

// Styled Components
import {
  Container,
  Box,
  Typography,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";

// Redux
// import { useSelector } from "react-redux";

const AccountSetting = () => {
  //   // Get user details from redux store
  //   const {
  //     user: { userData },
  //   } = useSelector((state) => state);

  const Links = [
    {
      click: () => console.log("Clicked"),
      title: "Example-1",
      path: "/",
    },
    {
      click: () => console.log("Clicked"),
      title: "Example-2",
      path: "/",
    },
    {
      click: () => console.log("Clicked"),
      title: "Example-3",
      path: "/",
    },
    {
      click: () => console.log("Clicked"),
      title: "Example-3",
      path: "/",
    },
  ];

  return (
    <>
      <Container className="d-flex">
        <Box className="d-flex flex-column bg-light h-100 me-4 rounded">
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
        <Box className="bg-light p-3 overflow-auto h-100" sx={{ width: "80%" }}>
          <Box className="py-3 px-2">
            <Typography variant="h5" color="black">
              Profile information
            </Typography>
          </Box>
          <Divider />
        </Box>
      </Container>
    </>
  );
};

export default AccountSetting;
