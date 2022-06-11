import React from "react";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeDark} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
