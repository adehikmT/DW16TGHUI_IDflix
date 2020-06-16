import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
  const { component: Component, title: Title } = props;
  const Login = true;
  return (
    <Route
      render={(props) =>
        !Login ? <Redirect to="/" /> : <Component {...props} title={Title} />
      }
    />
  );
}

export default PrivateRoute;
