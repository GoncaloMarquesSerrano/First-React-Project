import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ element }) {
  const isLogged = localStorage.getItem("isLoggedIn") === "true";

  return isLogged ? element : <Navigate to="/login" />;
}

export default PrivateRoute;
