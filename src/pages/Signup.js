import * as React from "react";

// Material UI Modules
import {
  Avatar,
  Button,
  Box,
  CssBaseline,
  Container,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Material UI Icons
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";

// Actions
import { signup as signupAction } from "../redux/user/actions";
import { useLocation, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Component
import Copyright from "../components/Copyright";

const theme = createTheme();

const SignUp = () => {
  const [role, setRole] = React.useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    user: { loggedIn },
  } = useSelector((state) => state);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const signupData = {
      name: data.get("name"),
      role: data.get("role"),
      email: data.get("email"),
      phoneNumber: data.get("phoneNumber"),
      password: data.get("password"),
    };

    dispatch(signupAction({ signupData }));
  };

  if (loggedIn) {
    return <Redirect to={location?.state?.from?.pathname || ""} />;
  }

  let roles = [
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
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            ml: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  variant="outlined"
                  fullWidth
                  required
                >
                  {roles.map((role) => (
                    <MenuItem key={role.id} value={role.value}>
                      {role.placeholder}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
