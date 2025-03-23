import React, { useState } from "react";
import loginImg from "../assest/login.gif";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({});

  console.log(userData);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    const user = { email, password };
    setUserData(user);
  };
  return (
    <section id="login">
      <div className="bg-slate-500 mx-auto p-4 my-2 container ">
        <div className="bg-white px-4 py-5 w-full max-w-md mx-auto rounded-lg ">
          <div className="w-20 h-20 mx-auto ">
            <img src={loginImg} alt="login Icon" />
          </div>
          {/* form section */}

          <form
            onSubmit={handleLogin}
            className="card-body flex flex-col gap-4"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
                <div
                  onClick={() => setShowPassword((preAction) => !preAction)}
                  className="cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                </div>
              </div>
            </div>
            <Link
              className="block w-fit ml-auto hover:underline hover:text-red-500"
              to="/forgot-password"
            >
              Forgot Password ?
            </Link>

            <div className="form-control mt-6">
              <input
                className="bg-blue-500 py-2 px-6 mt-2 mb-4 mx-auto rounded-full hover:scale-95 transition-all block  text-white"
                type="submit"
                value="Login Here"
              />
            </div>
          </form>

          {/* navigate to Sign Up page */}
          <p>
            If you don't have account, please{" "}
            <Link
              to="/sign-up"
              className="text-blue-500 hover:text-red-500 hover:underline mt-4"
            >
              Sign Up
            </Link>{" "}
            here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
