import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styled Components
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  IconButton,
  TextField,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from "@mui/icons-material";

// Components
import AccountPreferences from "../components/AccountPreferences";
import Banner from "../components/Banner";

const DatabaseSetting = () => {
  const [disabledDatabaseBtn, setDisabledDatabaseBtn] = useState(true);
  const [expandedDatabaseAccordion, setExpandedDatabaseAccordion] =
    useState(false);
  const [expandedAddDatabaseAccordion, setExpandedAddDatabaseAccordion] =
    useState(false);
  const [database, setDatabase] = useState(
    "mongodb://exampleUser:examplePassword@cluster0-shard-00-00.ibnqj.mongodb.net:27017,cluster0"
  );

  const handleDatabaseAccordion = (panel) => (event, isExpanded) => {
    setExpandedDatabaseAccordion(isExpanded ? panel : false);
    if (
      expandedAddDatabaseAccordion === true ||
      expandedDatabaseAccordion === true
    ) {
      setExpandedAddDatabaseAccordion(false);
    }
  };

  const handleAddDatabaseAccordion = (panel) => (event, isExpanded) => {
    setExpandedAddDatabaseAccordion(isExpanded ? panel : false);
    if (
      expandedAddDatabaseAccordion === true ||
      expandedDatabaseAccordion === true
    ) {
      setExpandedDatabaseAccordion(false);
    }
  };

  // Banner elements for pass to the props
  const firstElement = (
    <Link className="text-white text-decoration-none" to="/">
      <IconButton color="inherit">
        <KeyboardBackspaceIcon className="text-white fs-2" />
      </IconButton>
    </Link>
  );

  const availableDatabases = [
    "mongodb://exampleUser:examplePassword2@cluster0-shard-00-00.ibnqj.mongodb.net:27017,cluster0" ===
    database
      ? database
      : "mongodb://exampleUser:examplePassword2@cluster0-shard-00-00.ibnqj.mongodb.net:27017,cluster0",
    "mongodb://exampleUser2:examplePassword2@cluster0-shard-00-00.ibnqj.mongodb.net:27017,cluster0",
    "mongodb://exampleUser3:examplePassword@cluster0-shard-00-00.ibnqj.mongodb.net:27017,cluster0",
  ];

  return (
    <>
      <Banner firstElement={firstElement} />
      <Container className="d-flex justify-content-center" sx={{ mt: 6 }}>
        <AccountPreferences />
        <Box className="bg-light p-3 overflow-auto mt-4" sx={{ width: "80%" }}>
          <Box className="py-3 px-2">
            <Typography variant="h5" color="black">
              Database Information
            </Typography>
          </Box>
          <Divider />
          <Box className="mt-3">
            <Accordion
              expanded={expandedDatabaseAccordion === true}
              onChange={handleDatabaseAccordion(true)}
            >
              <AccordionSummary>
                <Box className="d-flex justify-content-between align-items-center w-100">
                  <Box className="d-flex">
                    <Typography variant="h6" color="InfoText">
                      Available databases, select new database, selected
                      database
                    </Typography>
                  </Box>
                  <IconButton color="inherit">
                    {expandedDatabaseAccordion === false && <ExpandMoreIcon />}
                    {expandedDatabaseAccordion === true && <ExpandLessIcon />}
                  </IconButton>
                </Box>
              </AccordionSummary>
              <Divider className="mb-3" />
              <AccordionDetails>
                <Box className="mb-3">
                  <TextField
                    type="text"
                    name="database"
                    variant="outlined"
                    label="Database List"
                    defaultValue={availableDatabases.slice(0, 1)}
                    onChange={(e) => setDatabase(e.target.value)}
                    fullWidth
                    select
                  >
                    {availableDatabases.map((database, index) => (
                      <MenuItem key={index} value={database}>
                        {database}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box className="mb-3">
                  <TextField
                    type="text"
                    name="database"
                    variant="outlined"
                    label="SeLected Database"
                    value={database}
                    onChange={(e) => setDatabase(e.target.value)}
                    disabled={disabledDatabaseBtn}
                    focused={!disabledDatabaseBtn}
                    fullWidth
                  />
                </Box>
                <Box className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={() => setDisabledDatabaseBtn(false)}
                    disabled={!disabledDatabaseBtn}
                  >
                    Edit Database
                  </Button>
                  {database !==
                    "mongodb://exampleUser:examplePassword@cluster0-shard-00-00.ibnqj.mongodb.net:27017,cluster0" && (
                    <Button variant="contained" color="primary">
                      Save
                    </Button>
                  )}
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Divider className="my-3" />
          <Box className="mt-3">
            <Accordion
              expanded={expandedAddDatabaseAccordion === true}
              onChange={handleAddDatabaseAccordion(true)}
            >
              <AccordionSummary>
                <Box className="d-flex justify-content-between align-items-center w-100">
                  <Box className="d-flex flex-column">
                    <Typography variant="h6" color="InfoText">
                      Add new database information
                    </Typography>
                  </Box>
                  <IconButton color="inherit">
                    {expandedAddDatabaseAccordion === false && (
                      <ExpandMoreIcon />
                    )}
                    {expandedAddDatabaseAccordion === true && (
                      <ExpandLessIcon />
                    )}
                  </IconButton>
                </Box>
              </AccordionSummary>
              <Divider className="mb-3" />
              <AccordionDetails>
                <Box className="mb-3">
                  <TextField
                    type="text"
                    name="name"
                    variant="outlined"
                    label="Database Name"
                    fullWidth
                  />
                </Box>
                <Box className="mb-3">
                  <TextField
                    type="text"
                    name="url"
                    variant="outlined"
                    label="Database URL"
                    fullWidth
                  />
                </Box>
                <Box className="mb-3">
                  <TextField
                    type="text"
                    name="user"
                    variant="outlined"
                    label="User"
                    fullWidth
                  />
                </Box>
                <Box className="mb-3">
                  <TextField
                    type="password"
                    name="password"
                    variant="outlined"
                    label="Password"
                    fullWidth
                  />
                </Box>
                <Box>
                  <Button variant="contained" color="primary">
                    Add
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default DatabaseSetting;
