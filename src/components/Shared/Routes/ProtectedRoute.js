import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.adminLogin);

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
