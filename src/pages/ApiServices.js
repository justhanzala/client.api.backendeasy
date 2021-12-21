import * as React from "react";

// Styled Modules
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
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
};

export default ApiServices;
