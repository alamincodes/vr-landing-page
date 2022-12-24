import React from "react";
import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";
import { HiMenu } from "react-icons/hi";
const Header = ({ setNavMobile }) => {
  return (
    <header className="py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} className="h-[30px]" alt="" />
          </a>
          {/* nav */}
          <Nav />
          {/* nav mobile */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl text-white cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
