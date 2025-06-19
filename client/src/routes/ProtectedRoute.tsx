import React, { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const token = useAppSelector((state) => state.auth.token);
  if (!token) {
    return <Navigate to={"/auth?mode=login"} replace></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
