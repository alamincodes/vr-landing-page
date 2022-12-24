import React from "react";
import { IoClose } from "react-icons/io5";
const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden bg-[#251f3f] w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute left-4 top-6 cursor-pointer"
      />
      <ul className="flex flex-col items-center justify-center h-full space-y-8 font-secondary">
        <li className="nav-link">
          <a href="#">Home</a>
        </li>
        <li className="nav-link">
          <a href="#">Company</a>
        </li>
        <li className="nav-link">
          <a href="#">Features</a>
        </li>
        <li className="btn">
          <a href="#">Signup</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
