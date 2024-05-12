import { useNavigate, useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  const navigate = useNavigate();
  const err = useRouteError();

  return (
    <section className="bg-white max-w-6xl mx-auto relative dark:bg-gray-900 ">
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="absolute lg:flex md:flex hidden top-16 left-24">
        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <span onClick={() => navigate(-1 || "/")}>Go back</span>
        </button>
      </div>
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 relative text-sm size-full font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
            <img
              src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x1985-6voscfd3.png"
              alt=""
            />
            <button
              onClick={() => navigate("/")}
              className="w-1/2 lg:flex md:flex hidden absolute bottom-20 right-[125px] px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
            >
              Take me home
            </button>
          </p>

          <p className="text-red-500 font-bold mt-5">{err?.data}</p>

          <div className="flex lg:hidden md:hidden items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span onClick={() => navigate(-1 || "/")}>Go back</span>
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
            >
              Take me home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
