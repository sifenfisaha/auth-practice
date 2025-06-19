import React from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

const AuthForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") === "signup" ? "signup" : "login";
  const error = useActionData() as string | undefined;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isLogin = searchParams.get("mode") === "login";
  return (
    <div className="flex pt-20 items-center justify-center">
      <Form
        method="post"
        className="bg-white p-8 rounded shadow space-y-4 w-full max-w-sm"
      >
        <input type="hidden" name="mode" value={mode} />

        <h2 className="text-2xl font-semibold text-center capitalize">
          {mode}
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          required
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-black cursor-pointer hover:bg-gray-800 text-white py-2 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Submitting..."
            : mode === "login"
            ? "Login"
            : "Sign up"}
        </button>
        <div className="flex justify-center">
          <Link
            className="text-center underline text-gray-700"
            to={`?mode=${isLogin ? "signup" : "login"}`}
          >
            {isLogin ? "Create new user" : "Login"}
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default AuthForm;
