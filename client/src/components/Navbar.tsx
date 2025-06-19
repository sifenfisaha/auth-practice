import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { logout } from "../features/authSlice";
import { useAppSelector } from "../hooks/useAppSelector";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);

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
          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) => (isActive ? "text-red-900" : "")}
              >
                Login
              </NavLink>
            </li>
          )}

          {token && (
            <li>
              <button
                className="bg-gray-400 p-1 rounded font-normal cursor-pointer"
                onClick={() => dispatch(logout())}
              >
                Log Out
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
