import React from "react";

// Styled Modules
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

// Component
import ApiCategories from "../components/ApiCategories";

// Image
import PrivateApiImg from "../assets/img/private-api.jpg";

const PrivateApi = () => {
  return (
    <>
      <ApiCategories />
      <Card sx={{ maxWidth: 500, mr: 3, mb: 4, height: "500px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={PrivateApiImg}
            alt="Img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Private APIs
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
    </>
  );
};

export default PrivateApi;
