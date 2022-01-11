import React from "react";

// Styled Components
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";

// Component
import ApiCategories from "../components/ApiCategories";

// Image
import ApiImg from "../assets/img/api.jpeg";

const ApiServices = () => {
  return (
    <>
      <ApiCategories />
      <Box className="row" sx={{ ml: 2 }}>
        <Card sx={{ maxWidth: 500, mr: 3, mb: 4, height: "500px" }}>
          <CardActionArea>
            <CardMedia component="img" height="250" image={ApiImg} alt="Img" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                API
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
      </Box>
    </>
  );
};

export default ApiServices;
