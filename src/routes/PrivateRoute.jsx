import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ from: location.pathname || "/" }}
      />
    );
  }
  return children;
};

export default PrivateRoute;
