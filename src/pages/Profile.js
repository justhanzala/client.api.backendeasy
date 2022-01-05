import React from "react";
import { Link } from "react-router-dom";

// Styled Components
import {
  Container,
  Box,
  Typography,
  IconButton,
  Divider,
  Card,
  CardContent,
  Button,
  CardMedia,
} from "@mui/material";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";

// Redux
import { useSelector } from "react-redux";

// Components
import AccountPreferences from "../components/AccountPreferences";
import Banner from "../components/Banner";

const Profile = () => {
  // Get user data from redux store
  const {
    user: { userData },
  } = useSelector((state) => state);

  const firstElement = (
    <IconButton color="inherit">
      <KeyboardBackspaceIcon className="text-white fs-2" />
    </IconButton>
  );
  const secondElement = (
    <Typography variant="h6" color="white">
      Back To Dashboard
    </Typography>
  );

  return (
    <>
      <Banner firstElement={firstElement} secondElement={secondElement} />
      <Container className="d-flex justify-content-center" sx={{ mt: 7 }}>
        <AccountPreferences />
        <Box className="bg-light p-3 overflow-auto mt-4" sx={{ width: "80%" }}>
          <Box className="py-3 px-2 d-flex justify-content-between">
            <Typography variant="h5" color="black">
              Profile
            </Typography>
            <Link
              className="text-white text-decoration-none"
              to="/update-information"
            >
              <Button variant="contained" color="primary">
                Update Information
              </Button>
            </Link>
          </Box>
          <Divider className="mb-3" />
          <Box className="d-flex justify-content-center align-items-center w-100">
            <Box sx={{ height: "250px", width: "250px" }}>
              {userData?.profile ? (
                <CardMedia
                  component="img"
                  className="rounded-circle mb-2 w-100 h-100 position-relative"
                  src={`${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/${userData?.profile}`}
                />
              ) : (
                <AccountCircleIcon className="w-100 h-100" />
              )}
            </Box>
          </Box>
          <Divider className="my-3" />
          <Box>
            <Box className="mb-4 d-flex w-100">
              <Box className="me-2 w-50">
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="GrayText">
                      {userData.name || "Hanzala"}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box className="ms-2 w-50">
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="GrayText">
                      {userData.role || "individual"}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Box className="mb-4 w-100">
              <Card>
                <CardContent>
                  <Typography variant="h6" color="GrayText">
                    {userData.email || "justHanzala786@gmail.com"}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box className="mb-4 w-100">
              <Card>
                <CardContent>
                  <Typography variant="h6" color="GrayText">
                    {userData.phoneNumber || "8077616404"}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
