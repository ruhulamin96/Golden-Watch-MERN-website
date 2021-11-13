import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
  let { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="text-center">
        <div
          class="spinner-border"
          style={{ width: "3rem ", height: "3rem" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
}

export default PrivateRoute;
