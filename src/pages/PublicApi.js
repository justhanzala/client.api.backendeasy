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
import PublicApiImg from "../assets/img/public-api.png";

const PublicApi = () => {
  return (
    <>
      <ApiCategories />
      <Card sx={{ maxWidth: 500, mr: 3, mb: 4, height: "500px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={PublicApiImg}
            alt="Img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Public APIs
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

export default PublicApi;
