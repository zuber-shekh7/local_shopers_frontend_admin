import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { adminLogout } from "../../actions/adminActions";

const Navigation = () => {
  const { user } = useSelector((state) => state.adminLogin);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(adminLogout());
  };

  return (
    <nav className="bg-white shadow-lg">
      <section className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* logo and brand name */}
        <div>
          <Link to="/" className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="text-2xl font-bold ">Local Shoppers</span>
            <span className="text-sm">Admin</span>
          </Link>
        </div>
        {/* links */}

        <div className="hidden lg:flex space-x-2 items-center">
          {user ? (
            <>
              <Link
                to="/admin/account"
                className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
              >
                Home
              </Link>

              <button
                onClick={handleLogout}
                className="py-2 px-4  bg-indigo-500 text-white rounded-lg font-bold text-lg hover:text-indigo-400 transition duration-300"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
              >
                Home
              </Link>

              <Link
                to="/"
                className="py-2 px-4  bg-indigo-500 text-white rounded-lg font-bold text-lg hover:text-indigo-400 transition duration-300"
              >
                Log In
              </Link>
            </>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
