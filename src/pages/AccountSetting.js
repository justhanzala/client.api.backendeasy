import React, { useState } from "react";

// Styled Components
import {
  Container,
  Box,
  Typography,
  Divider,
  Button,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  MenuItem,
  CardActionArea,
} from "@mui/material";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  AccountBox as AccountBoxIcon,
} from "@mui/icons-material";

// Redux
import { useSelector } from "react-redux";

// Components
import Banner from "../components/Banner";
import AccountPreferences from "../components/AccountPreferences";

const AccountSetting = () => {
  const [expandedEditAccordion, setExpandedEditAccordion] = useState(true);
  const [expendedChangePasswordAccordion, setExpendedChangePasswordAccordion] =
    useState(false);
  const [editedData, seteditedData] = useState({
    name: "",
    role: "",
    emailAddress: "",
    phoneNumber: "",
  });
  const {
    user: { userData },
  } = useSelector((state) => state);

  const handleAccordion = (panel) => (event, isExpanded) => {
    setExpandedEditAccordion(isExpanded ? panel : false);
    if (
      expendedChangePasswordAccordion === true ||
      expandedEditAccordion === true
    ) {
      setExpendedChangePasswordAccordion(false);
    }
  };

  const handleChangePasswordAccordion = (panel) => (event, isExpanded) => {
    setExpendedChangePasswordAccordion(isExpanded ? panel : false);
    if (
      expandedEditAccordion === true ||
      expendedChangePasswordAccordion === true
    ) {
      setExpandedEditAccordion(false);
    }
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
    <Button
      variant="contained"
      color="primary"
      disabled={
        !editedData.name.length ||
        !editedData.emailAddress.length ||
        !editedData.phoneNumber.length
      }
    >
      Save Changes
    </Button>
  );

  return (
    <>
      <Banner firstElement={firstElement} secondElement={secondElement} />
      <Container className="d-flex justify-content-center" sx={{ mt: 6 }}>
        <AccountPreferences />
        <Box className="bg-light p-3 overflow-auto mt-4" sx={{ width: "80%" }}>
          <Box className="py-3 px-2">
            <Typography variant="h5" color="black">
              Update Information
            </Typography>
          </Box>
          <Divider className="mb-3" />
          <Box className="d-flex justify-content-center align-items-center w-100">
            <CardActionArea sx={{ height: "200px", width: "200px" }}>
              <AccountBoxIcon className="w-100 h-100" />
            </CardActionArea>
          </Box>
          <Divider className="my-3" />
          <Box className="mt-3">
            <Accordion
              expanded={expandedEditAccordion === true}
              onChange={handleAccordion(true)}
            >
              <AccordionSummary>
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
                    {expandedEditAccordion === false && <ExpandMoreIcon />}
                    {expandedEditAccordion === true && <ExpandLessIcon />}
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
          <Divider className="my-3" />
          <Box className="mt-3">
            <Accordion
              expanded={expendedChangePasswordAccordion === true}
              onChange={handleChangePasswordAccordion(true)}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className="d-flex justify-content-between align-items-center w-100">
                  <Box className="d-flex flex-column">
                    <Box className="mb-2">
                      <Typography variant="h6" color="black">
                        Password
                      </Typography>
                    </Box>
                    <Typography variant="p" color="GrayText">
                      Change Your Password
                    </Typography>
                  </Box>
                  <IconButton color="inherit">
                    {expendedChangePasswordAccordion === false && (
                      <ExpandMoreIcon />
                    )}
                    {expendedChangePasswordAccordion === true && (
                      <ExpandLessIcon />
                    )}
                  </IconButton>
                </Box>
              </AccordionSummary>
              <hr className="text-dark mt-0" />
              <AccordionDetails>
                <Box className="mb-4">
                  <TextField
                    type="password"
                    name="currentPassword"
                    variant="outlined"
                    label="Current Password"
                    required
                    fullWidth
                  />
                </Box>
                <Box className="mb-4">
                  <TextField
                    type="password"
                    name="newPassword"
                    variant="outlined"
                    label="New Password"
                    required
                    fullWidth
                  />
                </Box>
                <Box className="mb-4">
                  <TextField
                    type="password"
                    name="confirmPassword"
                    variant="outlined"
                    label="Confirm Password"
                    required
                    fullWidth
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AccountSetting;
