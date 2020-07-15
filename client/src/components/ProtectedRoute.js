import React, { useContext } from "react";
import { AuthContext, } from "../providers/AuthProvider";
import { Route, Redirect, } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { authenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}

