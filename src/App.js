import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import { LinearProgress, Box } from "@mui/material";

// components
import Layout from "./components/Layout";

// Pages
import routes from "./routes";

function App() {
  const {
    site: { loading },
    user: { loggedIn },
  } = useSelector((state) => state);

  return (
    <div className="App">
      {loading && (
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
  );
}

export default App;
