import React from "react";
import LoginImage from "../../assets/images/LoginImage.svg";

const LoginPage = () => {
  return (
    <main className="mt-10 md:mt-20 h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2  px-10">
        <div>
          <section className="max-w-md mx-auto mt-10 bg-gray-100 p-10 rounded-xl shadow-lg">
            <form>
              <h2 className="text-4xl font-bold text-center mb-5">Login</h2>
              <div className="mb-5">
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-5">
                <label className="block" htmlFor="password">
                  Password
                </label>
                <input
                  className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="mb-5">
                <button
                  className="w-full py-2 text-lg bg-indigo-500 rounded-lg text-white"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </section>
        </div>
        <div className="hidden md:flex justify-start items-center ">
          <img className="h-72 w-auto" src={LoginImage} alt="Admin Login" />
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
