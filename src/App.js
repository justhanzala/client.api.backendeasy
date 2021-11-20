import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

// components
import Layout from "./components/Layout";

// Pages
import routes from "./routes";

function App() {
  let loggedIn = false;

  return (
    <div className="App">
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
                console.log(":ssssssssssssssss")
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
