import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="w-full p-9 flex items-center justify-center bg-gray-200">
      <nav className="flex items-center justify-center gap-9 text-lg font-bold">
        <ul className="flex items-center justify-center gap-9">
          <li>
            <Link
              className={`${({ isActive }: { isActive: boolean }) =>
                isActive ? "text-red-900" : undefined}`}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${({ isActive }: { isActive: boolean }) =>
                isActive ? "text-red-900" : undefined}`}
              to={"dashboard"}
            >
              dashboard
            </Link>
          </li>
          <li>
            <Link
              className={`${({ isActive }: { isActive: boolean }) =>
                isActive ? "text-red-900" : undefined}`}
              to={"auth?mode=login"}
            >
              login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
