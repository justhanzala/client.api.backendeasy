import React from "react";

// Styled Components
import {
  Container,
  Box,
  Typography,
  ListItem,
  ListItemText,
  Divider,
  Button,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  MenuItem,
} from "@mui/material";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from "@mui/icons-material";

// Redux
import { useSelector } from "react-redux";

// Components
import Banner from "../components/Banner";
import AccountPreferences from "../components/AccountPreferences";

const AccountSetting = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [editedData, seteditedData] = React.useState({
    name: "",
    role: "",
    emailAddress: "",
    phoneNumber: "",
  });
  const {
    user: { userData },
  } = useSelector((state) => state);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    seteditedData({
      ...editedData,
      [name]: value,
    });
  };

  // Banner elements for pass to the props
  const firstElement = (
    <IconButton color="inherit">
      <KeyboardBackspaceIcon className="text-white fs-2" />
    </IconButton>
  );
  const secondElement = (
    <Button variant="contained" color="primary">
      Save Changes
    </Button>
  );

  return (
    <>
      <Banner firstElement={firstElement} secondElement={secondElement} />
      <Container className="d-flex" sx={{ mt: 6 }}>
        <AccountPreferences />
        <Box className="bg-light p-3 overflow-auto mt-4" sx={{ width: "80%" }}>
          <Box className="py-3 px-2">
            <Typography variant="h5" color="black">
              Update Information
            </Typography>
          </Box>
          <Divider />
          <Box className="mt-3">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleAccordionChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className="d-flex justify-content-between align-items-center w-100">
                  <Box className="d-flex flex-column">
                    <Box className="mb-2">
                      <Typography variant="h6" color="black">
                        Name, email, Phone Number
                      </Typography>
                    </Box>
                    <Typography variant="p" color="GrayText">
                      Change Your Profile Details
                    </Typography>
                  </Box>
                  <IconButton color="inherit">
                    {expanded === false && <ExpandMoreIcon />}
                    {expanded === "panel1" && <ExpandLessIcon />}
                  </IconButton>
                </Box>
              </AccordionSummary>
              <hr className="text-dark mt-0" />
              <AccordionDetails>
                <Box className="mb-4 d-flex">
                  <TextField
                    type="text"
                    name="name"
                    variant="outlined"
                    defaultValue={userData.name}
                    onChange={handleOnChange}
                    label="Name"
                    className="me-3"
                    required
                    fullWidth
                  />
                  <TextField
                    select
                    label="Role"
                    name="role"
                    onChange={handleOnChange}
                    variant="outlined"
                    defaultValue={userData.role}
                    fullWidth
                    required
                  >
                    {[
                      {
                        id: 1,
                        value: "individual",
                        placeholder: "Individual",
                      },
                      {
                        id: 2,
                        value: "company",
                        placeholder: "Company",
                      },
                      {
                        id: 3,
                        value: "other",
                        placeholder: "Other",
                      },
                    ].map((role) => (
                      <MenuItem key={role.id} value={role.value}>
                        {role.placeholder}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box className="mb-4">
                  <TextField
                    type="email"
                    name="emailAddress"
                    variant="outlined"
                    defaultValue={userData.email}
                    onChange={handleOnChange}
                    label="Email Address"
                    className="me-3"
                    required
                    fullWidth
                  />
                </Box>
                <Box className="mb-4">
                  <TextField
                    type="number"
                    name="phoneNumber"
                    variant="outlined"
                    defaultValue={userData.phoneNumber}
                    onChange={handleOnChange}
                    label="Phone Number"
                    className="me-3"
                    required
                    fullWidth
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Divider />
        </Box>
      </Container>
    </>
  );
};

export default AccountSetting;
