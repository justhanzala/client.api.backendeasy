import { useState } from "react";

// Styled Modules
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Modal,
  TextField,
  Button,
  IconButton,
  Popover,
  MenuItem,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

// Component
import ApiCategories from "../components/ApiCategories";

const PublicApi = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [ApiData, setApiData] = useState({
    apiName: "Signup",
    apiType: "POST",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [anchorEl, setAnchorEl] = useState(null);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApiData({
      ...ApiData,
      [name]: value,
    });
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const PopoverOpen = Boolean(anchorEl);

  return (
    <>
      <ApiCategories />
      <Card
        sx={{ maxWidth: 500, mr: 3, mb: 4, height: "100%" }}
        onClick={handleModalOpen}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sign Up API
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An application programming interface is a connection between
              computers or between computer programs. It is a type of software
              interface, offering a service to other pieces of software. A
              document or standard that describes how to build or use such a
              connection or interface is called an API specification.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* Modal */}
      <Modal open={ModalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            bgcolor: "background.paper",
            boxShadow: 24,
            transition: "all 0.4s ease-in",
            overflow: "auto",
          }}
          className="rounded"
        >
          <Box
            className="sticky-top d-flex justify-content-between align-items-center"
            sx={{
              bgcolor: "primary.main",
              px: 3,
              py: 1,
            }}
          >
            <Typography variant="h6" color="white">
              Signup API
            </Typography>
            <IconButton onClick={handleModalClose}>
              <CloseIcon className="text-white fs-3" />
            </IconButton>
          </Box>
          <Box sx={{ mt: 10 }}>
            <Box
              component="form"
              sx={{ mb: 4 }}
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <Box className="w-100 d-flex justify-content-around">
                <Box className="me-4" sx={{ width: "40%" }}>
                  <Box sx={{ mb: 4 }} className="ms-1">
                    <Typography variant="h6" color="black">
                      Default Fields
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      id="apiName"
                      name="apiName"
                      label="API Name"
                      value={ApiData.apiName}
                      onChange={handleChange}
                      variant="outlined"
                      disabled
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      id="apiType"
                      name="apiType"
                      label="API Type"
                      value={ApiData.apiType}
                      onChange={handleChange}
                      variant="outlined"
                      disabled
                      fullWidth
                    />
                  </Box>
                </Box>
                <Box sx={{ width: "40%" }}>
                  <Box sx={{ mb: 4 }} className="ms-1">
                    <Typography variant="h6" color="black">
                      Payload
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      type="text"
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      value={ApiData.firstName}
                      onChange={handleChange}
                      variant="outlined"
                      className="me-2"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      type="text"
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      value={ApiData.lastName}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      type="email"
                      id="email"
                      name="email"
                      label="Email Address"
                      value={ApiData.email}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      type="number"
                      id="phoneNumber"
                      name="phoneNumber"
                      label="Phone Number"
                      value={ApiData.phoneNumber}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      type="password"
                      id="password"
                      name="password"
                      label="Password"
                      value={ApiData.password}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                  <Box className="d-flex justify-content-between align-items-center">
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                    <Button
                      variant="contained"
                      color="inherit"
                      onClick={handlePopoverOpen}
                    >
                      Add Field
                    </Button>
                    {/* Add Field Popover */}
                    <Popover
                      open={PopoverOpen}
                      anchorEl={anchorEl}
                      onClose={handlePopoverClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <Box className="p-4">
                        <Box className="d-flex align-items-center">
                          <Box className="">
                            <TextField type="text" name="key" label="Key" />
                          </Box>
                          <p className="mx-2 mt-3">=</p>
                          <Box className="me-3">
                            <TextField
                              name="type"
                              label="Type"
                              variant="outlined"
                              defaultValue={"text"}
                              fullWidth
                              select
                            >
                              {["text", "email", "number", "password"].map(
                                (inputType) => (
                                  <MenuItem
                                    key={inputType}
                                    value={inputType}
                                    className="overflow-auto"
                                  >
                                    {inputType}
                                  </MenuItem>
                                )
                              )}
                            </TextField>
                          </Box>
                          <Box>
                            <TextField type="text" name="label" label="Label" />
                          </Box>
                        </Box>
                        <Box className="d-flex justify-content-end mt-4">
                          <Button
                            variant="contained"
                            color="inherit"
                            className="me-3 text-capitalize"
                            onClick={handlePopoverClose}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            className="text-capitalize"
                          >
                            Add
                          </Button>
                        </Box>
                      </Box>
                    </Popover>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PublicApi;
