import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

// Actions
import { signup as signupAction } from "../redux/user/actions";
import { useLocation, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import Copyright from "../components/Copyright";

const theme = createTheme();

export default function SignUp() {
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
      role: parseInt(role),
      email: data.get("email"),
      phoneNumber: data.get("phoneNumber"),
      password: data.get("password"),
    };

    dispatch(signupAction({ signupData }));
  };

  if (loggedIn) return <Redirect to={location?.state?.from} />;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
                <FormControl fullWidth required>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Role
                  </InputLabel>
                  <Select
                    label="Role"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <MenuItem value={0}>individual</MenuItem>
                    <MenuItem value={1}>company</MenuItem>
                    <MenuItem value={2}>other</MenuItem>
                  </Select>
                </FormControl>
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
}
