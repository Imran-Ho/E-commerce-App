import React, { useState } from "react";
import SignUpImgIcon from "../assest/login.gif";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import imageToBase64 from "../hooks/imageToBase64";
const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userData, setUserData] = useState({});
  console.log(userData);

  const handleSignUP = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const user = { name, email, password, confirmPassword };
    setUserData(user);
  };
  // handle User Picture upload
  const handleUserPicUpdate = async (e) => {
    const file = e.target.files[0];
    const uploadImg = await imageToBase64(file);
    console.log("updated Image", uploadImg);
    setUserData((previousData) => {
      return {
        ...previousData,
        profilePic: uploadImg,
      };
    });
  };
  return (
    <section id="signUp">
      <div className="bg-slate-500 mx-auto p-4 my-2 container ">
        <div className="bg-white px-4 py-5 w-full max-w-md mx-auto rounded-lg  ">
          <div className="w-40 h-40 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img
                src={userData.profilePic || SignUpImgIcon}
                alt="signUp Icon"
              />
            </div>
            {/* image upload section */}
            <form>
              <label>
                <div className="bg-opacity-50 text-md pb-4 pt-2 cursor-pointer text-center bg-slate-400 absolute bottom-0 w-full">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUserPicUpdate}
                />
              </label>
            </form>
          </div>
          {/* form section */}

          <form
            onSubmit={handleSignUP}
            className="card-body flex flex-col gap-4"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name:</span>
              </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Type Your Full Name"
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Type Your Email"
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="confirm password"
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
                <div
                  onClick={() =>
                    setShowConfirmPassword((preAction) => !preAction)
                  }
                  className="cursor-pointer"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaRegEye />}
                </div>
              </div>
            </div>

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
            If you have an account, please{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:text-red-500 hover:underline mt-4"
            >
              Login
            </Link>{" "}
            here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
