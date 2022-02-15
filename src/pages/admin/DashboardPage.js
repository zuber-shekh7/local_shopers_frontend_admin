import React from "react";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const { user } = useSelector((state) => state.adminLogin);
  return (
    <main>
      <h1>Welcome {user.firstName}</h1>
    </main>
  );
};

export default DashboardPage;
