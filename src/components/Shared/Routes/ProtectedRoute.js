import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.adminLogin);

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
