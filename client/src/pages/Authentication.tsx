import React, { useEffect } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import {
  redirect,
  useNavigate,
  type ActionFunctionArgs,
} from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login, signup } from "../features/authSlice";
import { store } from "../app/store";

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

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }

  try {
    if (mode === "signup") {
      const result = await store.dispatch(signup({ email, password }));
      if (signup.rejected.match(result)) {
        return new Response(result.payload || "Signup failed", { status: 400 });
      }

      return redirect("/auth?mode=login");
    } else {
      const result = await store.dispatch(login({ email, password }));
      if (login.rejected.match(result)) {
        return new Response(result.payload || "Login failed", { status: 401 });
      }

      return redirect("/dashboard");
    }
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}
