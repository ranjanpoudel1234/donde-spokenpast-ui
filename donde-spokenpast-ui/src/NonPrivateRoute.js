import React from "react";
import { Redirect, Route } from "react-router-dom";

export const NonPrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("Id") ? (
        <Redirect
          to={{
            pathname: "/Index",
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);
