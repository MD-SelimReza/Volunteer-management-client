import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { baseURL } from "../../baseUrl";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser, updateUserProfile, user, loading, setUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

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

  const handleSignUp = async (data) => {
    const { name, email, photo, password } = data;
    if (!/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6,}$/.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase and lowercase letter"
      );
      return;
    }
    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photo);
      setUser({ ...result?.user, photoURL: photo, displayName: name });
      if (result?.user) {
        const { data } = await axiosSecure.post(`${baseURL}/jwt`, {
          email: result?.user?.email,
        });
        if (data.success) {
          toast.success("Sign In Successful");
          navigate(location.state || "/");
        }
      }
    } catch (err) {
      toast.error(err?.message);
    }
  };

  if (user || loading) return;

  return (
    <div className="lg:max-w-md max-w-sm my-10 p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Helmet>
        <title>Registration - VolunteerVision</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center mx-auto">
        <img className="size-16" src="/logo.png" alt="" />
        <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">
          Welcome back
        </h1>

        <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
          create an account
        </h1>
      </div>

      <form onSubmit={handleSubmit(handleSignUp)} className="mt-6">
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Username
          </label>

          <input
            type="text"
            placeholder="Username"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>

          <input
            type="email"
            placeholder="Email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mt-4">
          <label
            htmlFor="photoURL"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Photo URL
          </label>

          <input
            type="text"
            placeholder="PhotoURL"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("photo", { required: true })}
          />
          {errors.photoUrl && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="relative mt-4">
          <label
            htmlFor="password"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Password
          </label>
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">This field is required</span>
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

        <div className="mt-6">
          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign In
          </button>
        </div>
      </form>

      <div className="mt-6 text-center ">
        <p className="text-sm text-blue-500 dark:text-blue-400">
          Already have an account yet?{" "}
          <Link to="/login" className=" hover:underline text-emerald-400">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
