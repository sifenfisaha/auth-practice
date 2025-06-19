import React, { useEffect } from "react";
import { Outlet, useSubmit } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAppSelector } from "../hooks/useAppSelector";
import { getTokenDuration } from "../utils/auth";

const Root: React.FC = () => {
  const submit = useSubmit();
  const token = useAppSelector((state) => state.auth.token);
  useEffect(() => {
    if (!token) {
      return;
    }
    const tokenDuration = getTokenDuration();
    if (token === "EXPIRED") {
      submit(null, { action: "logout", method: "post" });
    }
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
};

export default Root;
