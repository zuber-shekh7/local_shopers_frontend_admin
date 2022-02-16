import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineViewGrid,
  HiOutlineQuestionMarkCircle,
  HiOutlineMenu,
} from "react-icons/hi";

const DashboardPage = () => {
  const { user } = useSelector((state) => state.adminLogin);
  return (
    <main className="bg-gray-200">
      <section className="flex flex-1">
        {/* dashboard menu */}
        <div className="bg-indigo-500 w-72 h-screen">
          <div className="flex items-center bg-indigo-700">
            <h1 className="flex items-center text-2xl font-bold text-white p-5">
              <HiOutlineMenu className="mr-2" /> Menu
            </h1>
          </div>
          <div>
            <div className="px-5 py-4 hover:bg-indigo-600">
              <Link
                className="text-xl font-medium text-white flex items-center gap-2"
                to="/admin/account"
              >
                <HiOutlineHome className="inline h-6 w-6" /> Home
              </Link>
            </div>
            <div className="px-5 py-4 hover:bg-indigo-600">
              <Link
                className="text-xl font-medium text-white flex items-center gap-2"
                to="/admin/account"
              >
                <HiOutlineUsers className="inline h-6 w-6" /> Customers
              </Link>
            </div>
            <div className="px-5 py-4 hover:bg-indigo-600">
              <Link
                className="text-xl font-medium text-white flex items-center gap-2"
                to="/admin/account"
              >
                <HiOutlineUsers className="inline h-6 w-6" /> Sellers
              </Link>
            </div>
            <div className="px-5 py-4 hover:bg-indigo-600">
              <Link
                className="text-xl font-medium text-white flex items-center gap-2"
                to="/admin/categories"
              >
                <HiOutlineViewGrid className="inline h-6 w-6" /> Categories
              </Link>
            </div>
            <div className="px-5 py-4 hover:bg-indigo-600">
              <Link
                className="text-xl font-medium text-white flex items-center gap-2"
                to="/admin/account"
              >
                <HiOutlineQuestionMarkCircle className="inline h-6 w-6" /> Help
              </Link>
            </div>
          </div>
        </div>
        {/* dashboard content */}
        <div className="m-10 flex-1">
          <div className="bg-indigo-400 py-10 px-10 rounded-lg w-full">
            <h2 className="text-4xl text-white font-bold">
              👋🏼 Hi {user.firstName}
            </h2>
            <p className="mt-5 font-white text-xl text-gray-200">
              Hope that you are feeling happy and healthy today
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
