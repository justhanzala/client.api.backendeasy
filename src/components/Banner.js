import { Box } from "@mui/material";

const Banner = ({ firstElement, secondElement }) => {
  return (
    <Box className="w-100 d-flex justify-content-between align-items-center px-3 py-2 bg-primary rounded fixed-top">
      <Box>{firstElement}</Box>
      <Box>{secondElement}</Box>
    </Box>
  );
};

export default Banner;
