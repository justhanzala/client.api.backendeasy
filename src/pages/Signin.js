import * as React from "react";
import { useLocation, Redirect } from "react-router-dom";

// Styled Modules
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Button,
  CssBaseline,
  Container,
  TextField,
  Link,
  Box,
  Typography,
} from "@mui/material";
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";

// Redux
import { signin as signinAction } from "../redux/user/actions";
import { useDispatch, useSelector } from "react-redux";

// Components
import Copyright from "../components/Copyright";

const SignIn = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    user: { loggedIn },
  } = useSelector((state) => state);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const signinData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(signinAction({ signinData }));
  };

  if (loggedIn) {
    return <Redirect to={location?.state?.from?.pathname || ""} />;
  }

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            ml: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              id="email"
              name="email"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              margin="normal"
              autoComplete="current-password"
              required
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              fullWidth
            >
              Sign In
            </Button>
            <Box textAlign="right">
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
              <Link href="/signup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
