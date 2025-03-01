import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-2 px-8 bg-gray-200">
      <div className="flex justify-between items-center">
        <div className="tooltip tooltip-left" data-tip="hello">
          <img  src="./loos.webp" className="w-14 btn h-14 rounded-full" alt="" />
        </div> 
        <div className="nav">
          <ul className="flex gap-4 font-medium">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/2D">2D</NavLink>
            </li>
            <li>
              <NavLink to="/3D">3D</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
