import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
};

export default Root;
