import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="w-full p-9 flex items-center justify-center bg-gray-200">
      <nav className="flex items-center justify-center gap-9 text-lg font-bold">
        <ul className="flex items-center justify-center gap-9">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-red-900" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "text-red-900" : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth?mode=login"
              className={({ isActive }) => (isActive ? "text-red-900" : "")}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
