import React, { useEffect } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import {
  redirect,
  useNavigate,
  type ActionFunctionArgs,
} from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Authentication: React.FC = () => {
  const token = useAppSelector((state) => state.auth.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return <AuthForm />;
};

export default Authentication;

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const mode = formData.get("mode") as string;
  const authData = {
    email,
    password,
    mode,
  };
  console.log(authData);
  if (mode === "signup") {
    return redirect("/auth?login");
  } else {
    return redirect("/");
  }
}
