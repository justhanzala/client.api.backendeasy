import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector, useDispatch } from "react-redux";
import { LinearProgress, Box, CircularProgress } from "@mui/material";
import { getUser as getUserAction } from "./redux/user/actions";

// components
import Layout from "./components/Layout";

// Pages
import routes from "./routes";

function App() {
  const dispatch = useDispatch();
  const {
    site: { apiLoading, loading },
    user: { loggedIn },
  } = useSelector((state) => state);
  const jwtToken = localStorage.getItem("token");

  useEffect(() => {
    if (jwtToken) {
      dispatch(getUserAction());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Box
          className="d-flex align-items-center justify-content-center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className="App">
          {apiLoading && (
            <Box zIndex={9999} position="fixed" top={0} width="100%">
              <LinearProgress color="secondary" />
            </Box>
          )}
          <Router>
            <Layout routes={routes} loggedIn={loggedIn}>
              <Switch>
                {routes.map(({ exact, path, component, auth, title }) => {
                  if (auth) {
                    return (
                      <PrivateRoute
                        key={path}
                        exact={exact}
                        path={path}
                        component={component}
                        isAuthenticated={loggedIn}
                        title={title}
                      />
                    );
                  } else {
                    return (
                      <Route
                        exact={exact}
                        key={path}
                        path={path}
                        component={component}
                      />
                    );
                  }
                })}
              </Switch>
            </Layout>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
