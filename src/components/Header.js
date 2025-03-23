import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiUserFill } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container flex items-center mx-auto px-4 justify-between">
        <Link to="/">
          <Logo h={200} w={100}></Logo>
        </Link>
        <div className=" hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2 ">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Search Items Here.... "
          />
          <div className="bg-blue-600 text-lg min-w-[50px] h-8 flex items-center justify-center rounded-r-full">
            <CiSearch />
          </div>
        </div>
        {/* User and Cart section */}
        <div className="flex items-center gap-4">
          <div className="text-3xl cursor-pointer">
            <RiUserFill />
          </div>
          <div className="text-3xl relative">
            <span>
              <BsCart4 />
            </span>
            <div className="absolute -top-1 -right-1 bg-red-600 text-white flex items-center justify-center w-5 h-5 rounded-full">
              <p className="text-xs">0</p>
            </div>
          </div>
          {/* Login and Logout section */}
          <div>
            <Link
              to="/login"
              className="bg-blue-600 text-white rounded-full px-4 py-1 hover:bg-blue-500"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
