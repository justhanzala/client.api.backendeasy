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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    transition: "all 0.4s ease-in",
    overflow: "scroll",
  };

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
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box
            className="sticky-top"
            sx={{
              bgcolor: "primary.main",
              px: 3,
              py: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton onClick={handleClose}>
              <CloseIcon className="text-white fs-3" />
            </IconButton>
            <Typography variant="h6" color="white" className="ms-3 mb-0">
              Signup API
            </Typography>
          </Box>
          <div className="container mt-5">
            <Box component="form">
              <Box sx={{ width: "100%", display: "flex" }}>
                <Box sx={{ width: "50%", mr: 2 }}>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" color="black">
                      Default Fields
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      label="API Name"
                      value="Signup"
                      fullWidth
                      disabled
                      variant="outlined"
                    />
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      label="API Type"
                      value="POST"
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
                    <TextField label="Name" fullWidth variant="outlined" />
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <TextField label="Email" fullWidth variant="outlined" />
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
