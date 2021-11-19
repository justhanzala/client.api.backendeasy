import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map(({ exact, path, component, auth }) => {
            if (auth) {
              return <Layout key={path}></Layout>;
            } else {
              return (
                <Route
                  key={path}
                  exact={exact}
                  path={path}
                  component={component}
                />
              );
            }
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
