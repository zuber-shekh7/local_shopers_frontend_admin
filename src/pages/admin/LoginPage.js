import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../actions/adminActions";
import LoginImage from "../../assets/images/LoginImage.svg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, user, error } = useSelector((state) => state.adminLogin);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/admin/account");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      return;
    }

    dispatch(adminLogin(email, password));
  };

  return (
    <main className="mt-10 md:mt-20 h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2  px-10">
        <div>
          <section className="max-w-md mx-auto mt-10 bg-gray-100 p-10 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
