import React from "react";
import { CiSearch } from "react-icons/ci";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className="h-full container flex items-center mx-auto px-4 justify-between">
        <div>
          <Logo h={200} w={100}></Logo>
        </div>
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
        <div>user icon and cart</div>
      </div>
    </header>
  );
};

export default Header;
