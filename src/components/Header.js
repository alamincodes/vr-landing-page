import React from "react";
import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";
import { HiMenu } from "react-icons/hi";
const Header = ({ setNavMobile }) => {
  return (
    <header
      className="py-6"
      data-aos="fade-down"
      data-aos-duration="800"
      data-aos-delay="700"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <a href="#">
            <img src={Logo} className="h-[30px]" alt="" />
          </a>
          {/* nav */}
          <Nav />
          {/* nav mobile */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="text-3xl text-white cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
