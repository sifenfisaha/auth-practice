import React, { type JSX } from "react";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  return children;
};

export default ProtectedRoute;
