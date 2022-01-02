import * as React from "react";
import { useLocation, useHistory } from "react-router-dom";

// Styled Components
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AppBar as MuiAppBar,
  Avatar,
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
} from "@mui/icons-material";

// Component
import SidebarItem from "./SidebarItem";

// Redux
import { useSelector } from "react-redux";

// Image
import ExampleImage from "../assets/img/ExampleImg.png";

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
  const { title } =
    routes.find((route) => route.path === location.pathname) || {};

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
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
        {loggedIn && (
          <>
            <AppBar position="absolute" open={open}>
              <Toolbar
                sx={{
                  pr: "24px", // keep right padding when drawer closed
                }}
              >
                <Tooltip title="Open">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                      marginRight: "36px",
                      ...(open && { display: "none" }),
                    }}
                  >
                    <ChevronRightIcon sx={{ color: "white" }} />
                  </IconButton>
                </Tooltip>
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
                  <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                    <CardMedia
                      component="img"
                      image={ExampleImage}
                      height="50"
                      width="50"
                      className="rounded-pill"
                    />
                  </IconButton>
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
        <MenuItem onClick={() => history.push("/profile")}>
          <Avatar /> {userData.name}
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => history.push("/account-setting")}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Account Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Settings
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
