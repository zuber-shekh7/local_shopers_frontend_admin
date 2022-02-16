import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { user } = useSelector((state) => state.adminLogin);
  return (
    <div className="bg-indigo-400 py-10 px-10 rounded-lg w-full">
      <h2 className="text-4xl text-white font-bold">👋🏼 Hi {user.firstName}</h2>
      <p className="mt-5 font-white text-xl text-gray-200">
        Hope that you are feeling happy and healthy today
      </p>
    </div>
  );
};

export default HomePage;
