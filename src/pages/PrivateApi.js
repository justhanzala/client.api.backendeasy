import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

// Component
import ApiCategories from "../components/ApiCategories";

import PrivateApiImg from "../assets/img/private-api.jpg";

const PrivateApi = () => {
  return (
    <>
      <ApiCategories />
      <Card sx={{ maxWidth: 500, mr: 3, mb: 4, height: "400px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={PrivateApiImg}
            alt="Img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default PrivateApi;
