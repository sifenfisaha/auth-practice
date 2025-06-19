import React from "react";
import { useSearchParams } from "react-router-dom";

type Mode = "login" | "signup" | string;

const AuthForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const mode: Mode = searchParams.get("mode") || "login";
  return <div>AuthForm</div>;
};

export default AuthForm;
