import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Signup from "./components/signup";
import ForgotPW from "./components/ForgotPW";
import Index from "./components/Index";
import { PrivateRoute } from "./PrivateRoute";
import { NonPrivateRoute } from "./NonPrivateRoute";
import EditProfile from "./components/EditProfile";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <NonPrivateRoute path="/login" component={Login} />
    <NonPrivateRoute path="/signup" component={Signup} />
    <Route path="/forgotPW" component={ForgotPW} />
    <PrivateRoute path="/Index" component={Index} />
    <PrivateRoute path="/EditProfile" component={EditProfile} />
  </Switch>
);

export default Routes;
