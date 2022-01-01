import React from "react";
import { Link } from "react-router-dom";

// Styled Modules
import {
  Container,
  Box,
  Typography,
  IconButton,
  Divider,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Button,
} from "@mui/material";
import { KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material";

// Redux
import { useSelector } from "react-redux";

// Components
import AccountPreferences from "../components/AccountPreferences";
import Banner from "../components/Banner";

// Image
import ExampleImage from "../assets/img/ExampleImg.png";

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
              Profile Information
            </Typography>
            <Link
              className="text-white text-decoration-none"
              to="/account-setting"
            >
              <Button variant="contained" color="primary">
                Edit
              </Button>
            </Link>
          </Box>
          <Divider className="mb-3" />
          <Box className="d-flex justify-content-center align-items-center w-100">
            <CardActionArea sx={{ height: "200px", width: "200px" }}>
              <CardMedia
                component="img"
                image={ExampleImage}
                alt="Img"
                className="rounded"
              />
            </CardActionArea>
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
