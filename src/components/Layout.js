import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

// Styled Components
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AppBar as MuiAppBar,
  Box,
  Divider,
  Grid,
  Typography,
  CssBaseline,
  Drawer as MuiDrawer,
  Toolbar,
  List,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Tooltip,
  CardMedia,
} from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  AccountBox as AccountBoxIcon,
} from "@mui/icons-material";

// Component
import SidebarItem from "./SidebarItem";

// Redux
import { useSelector } from "react-redux";

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

const DashboardContent = ({ children, routes }) => {
  // Get user details from redux store
  const {
    user: { userData, loggedIn },
  } = useSelector((state) => state);

  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;
  const { title } =
    routes.find((route) => route.path === location.pathname) || {};

  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const profileDropdownOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const LogoutAction = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {loggedIn && !pathname.includes("user") && (
          <>
            <AppBar position="absolute" open={open}>
              <Toolbar
                sx={{
                  pr: "24px", // keep right padding when drawer closed
                }}
              >
                {!open && (
                  <Tooltip title="Open">
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={toggleDrawer}
                      sx={{
                        marginRight: "36px",
                      }}
                    >
                      <ChevronRightIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Tooltip>
                )}
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1 }}
                  className="text-start"
                >
                  {title}
                </Typography>
                <Tooltip title="My Profile">
                  {!userData?.profile ? (
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2, height: "50px", width: "50px" }}
                    >
                      <CardMedia
                        component="img"
                        className="rounded-pill w-100 h-100 position-relative"
                        image={`${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/${userData?.profile}`}
                      />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                    >
                      <AccountBoxIcon className="fs-1 text-white" />
                    </IconButton>
                  )}
                </Tooltip>
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
              <Toolbar
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  px: [1],
                }}
              >
                <Tooltip title="Close">
                  <IconButton
                    onClick={toggleDrawer}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <ChevronLeftIcon sx={{ color: "black" }} />
                  </IconButton>
                </Tooltip>
              </Toolbar>
              <Divider />
              <List>
                <SidebarItem />
              </List>
            </Drawer>
          </>
        )}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Box sx={{ ml: 2, mt: 3, mb: 4 }}>
            <Grid container spacing={3}>
              {children}
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* Profile Dropwdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={profileDropdownOpen}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => history.push("/user/profile")}>
          {userData?.profile ? (
            <>
              <Box sx={{ width: "45px", height: "45px" }} className="me-2">
                <CardMedia
                  component="img"
                  className="rounded-pill w-100 h-100 position-relative"
                  image={`${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/${userData?.profile}`}
                />
              </Box>
              {userData.name}
            </>
          ) : (
            <>
              <AccountBoxIcon className="fs-1 me-2 text-dark" /> {userData.name}
            </>
          )}
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Account Preferences
        </MenuItem>
        <MenuItem onClick={LogoutAction}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </ThemeProvider>
  );
};

export default DashboardContent;
