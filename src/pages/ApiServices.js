import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const ApiServices = () => {
  const history = useHistory();
  const location = useLocation();

  const apis = [
    {
      id: 1,
      click: () => history.push(`${location.pathname}/public-apis`),
      title: "Public APIs",
      path: "public-apis",
    },
    {
      id: 2,
      click: () => history.push(`${location.pathname}/private-apis`),
      title: "Private APIs",
      path: "private-apis",
    },
  ];

  return (
    <>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          width: "100%",
        }}
        className="sticky-top"
      >
        {apis.map(({ click, title, path }, i) => (
          <Button
            key={i}
            variant="contained"
            color="inherit"
            sx={{
              width: "50%",
              p: 2,
              textTransform: "capitalize",
              bgcolor: grey[100],
            }}
            onClick={click}
          >
            <Typography variant="h6" color="black" textAlign="center">
              {title}
            </Typography>
          </Button>
        ))}
      </Box>
      <Box className="row" sx={{ ml: 2 }}>
        <Card sx={{ maxWidth: 500, mr: 3, mb: 4, height: "400px" }}>
          <CardActionArea>
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
        <Card sx={{ maxWidth: 500, mr: 3, mb: 4, height: "400px" }}>
          <CardActionArea>
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
        <Card sx={{ maxWidth: 500, mr: 3, mb: 4, height: "400px" }}>
          <CardActionArea>
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
