import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { signIn, signInWithGoogle, user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = async (data) => {
    const { email, password } = data;
    if (!/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6,}$/.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase and lowercase letter"
      );
      return;
    }
    try {
      const result = await signIn(email, password);
      if (result?.user) {
        toast.success("Sign in successful");
        navigate(location.state || "/");
      }
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      if (result?.user) {
        toast.success("Sing In Successful");
        navigate(location.state || "/");
      }
    } catch (err) {
      toast.error(err?.message);
    }
  };

  if (user || loading) return;

  return (
    <div className="lg:max-w-md max-w-sm my-10 p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Helmet>
        <title>Login - Volunteer Management</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center mx-auto">
        <img className="size-16" src="/logo.png" alt="" />
        <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">
          Welcome back
        </h1>

        <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
          login to your account
        </h1>
      </div>

      <form onSubmit={handleSubmit(handleSignIn)} className="mt-6">
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">The email field is required</span>
          )}
        </div>

        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">
                The password field is required
              </span>
            )}
            <p
              onClick={() => setShowPass(!showPass)}
              className=" absolute right-3 bottom-3 cursor-pointer"
            >
              {showPass ? (
                <FaEye className="size-5 text-white" />
              ) : (
                <FaEyeSlash className="size-5 text-white" />
              )}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign In
          </button>
        </div>
      </form>

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

        <a
          href="#"
          className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
        >
          or login with Social Media
        </a>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
      </div>

      <div className="mt-6">
        <a
          onClick={handleGoogleSignIn}
          href="#"
          className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <div className="px-4 py-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40">
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              <path
                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                fill="#FF3D00"
              />
              <path
                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                fill="#4CAF50"
              />
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#1976D2"
              />
            </svg>
          </div>

          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Sign in with Google
          </span>
        </a>
      </div>

      <div className="mt-6 text-center ">
        <p className="text-sm text-blue-500 dark:text-blue-400">
          Don’t have an account yet?{" "}
          <Link to="/register" className=" hover:underline text-emerald-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
