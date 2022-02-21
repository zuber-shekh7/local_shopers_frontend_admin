import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  HiOutlineMenu,
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineViewGrid,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";

const DashboardSharedLayout = () => {
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
                to="/admin/customers"
              >
                <HiOutlineUsers className="inline h-6 w-6" /> Customers
              </Link>
            </div>
            <div className="px-5 py-4 hover:bg-indigo-600">
              <Link
                className="text-xl font-medium text-white flex items-center gap-2"
                to="/admin/sellers"
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
                to="/admin/help"
              >
                <HiOutlineQuestionMarkCircle className="inline h-6 w-6" /> Help
              </Link>
            </div>
          </div>
        </div>
        {/* dashboard content */}
        <div className="m-10 flex-1">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default DashboardSharedLayout;
