import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";

// Styled Modules
import { Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const ApiCategories = () => {
  const history = useHistory();
  const location = useLocation();

  const ApiCategory = [
    {
      id: 1,
      click: () => history.push("/api-services/public-apis"),
      title: "Public APIs",
      path: "/api-services/public-apis",
    },
    {
      id: 2,
      click: () => history.push("/api-services/private-apis"),
      title: "Private APIs",
      path: "/api-services/private-apis",
    },
  ];

  return (
    <Box
      sx={{
        mb: 4,
        display: "flex",
        width: "100%",
      }}
      className="sticky-top"
    >
      {ApiCategory.map(({ click, title, path }, i) => (
        <Button
          variant="contained"
          color="inherit"
          sx={{
            width: "50%",
            p: 2,
            textTransform: "capitalize",
            bgcolor: location.pathname === path ? grey[300] : grey[100],
          }}
          onClick={click}
        >
          <Typography variant="h6" color="black" textAlign="center">
            {title}
          </Typography>
        </Button>
      ))}
    </Box>
  );
};

export default ApiCategories;
