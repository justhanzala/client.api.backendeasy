import React from "react";

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
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

// Component
import ApiCategories from "../components/ApiCategories";

const PublicApi = () => {
  const [ApiData, setApiData] = React.useState({
    apiName: "Signup",
    apiType: "POST",
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setApiData({
      ...ApiData,
      [name]: value,
    });
  };

  const [ModalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <ApiCategories />
      <Card
        sx={{ maxWidth: 500, mr: 3, mb: 4, height: "100%" }}
        onClick={handleOpen}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sign Up API
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* Modal */}
      <Modal open={ModalOpen} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            transition: "all 0.4s ease-in",
            overflow: "auto",
          }}
        >
          <Box
            className="sticky-top d-flex justify-content-between align-items-center"
            sx={{
              bgcolor: "primary.main",
              px: 3,
              py: 2,
            }}
          >
            <Typography variant="h6" color="white">
              Signup API
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon className="text-white fs-3" />
            </IconButton>
          </Box>
          <div className="container mt-5">
            <Box
              component="form"
              className="mb-5"
              onSubmit={(event) => event.preventDefault()}
            >
              <Box sx={{ width: "100%", display: "flex" }}>
                <Box sx={{ width: "50%", mr: 2 }}>
                  <Box sx={{ mb: 4 }}>
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
                      fullWidth
                      disabled
                      variant="outlined"
                    />
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      id="apiType"
                      name="apiType"
                      label="API Type"
                      value={ApiData.apiType}
                      onChange={handleChange}
                      fullWidth
                      disabled
                      variant="outlined"
                    />
                  </Box>
                </Box>
                <Box sx={{ width: "50%" }}>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" color="black">
                      Payload
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      id="name"
                      name="name"
                      label="Name"
                      value={ApiData.name}
                      onChange={handleChange}
                      fullWidth
                      variant="outlined"
                    />
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      id="email"
                      name="email"
                      label="Email"
                      value={ApiData.email}
                      onChange={handleChange}
                      fullWidth
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Box>
              <Box>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </Box>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default PublicApi;
