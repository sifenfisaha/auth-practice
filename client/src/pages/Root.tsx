import React from "react";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <>
      <h1>Root</h1>
      <Outlet />
    </>
  );
};

export default Root;
