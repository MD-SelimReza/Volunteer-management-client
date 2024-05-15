import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "../components/Loader";
import { FaRegUser } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

const Blogs = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: blogs = [],
    isLoading: blogsLoading,
    isError: blogsError,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure("/blogs");
      return data;
    },
    queryKey: ["blogs"],
  });

  if (blogsLoading) return <Loader />;
  if (blogsError) return <p>Failed to fetch data...</p>;

  return (
    <div>
      <section className="bg-white pb-10 lg:px-10 px-5 dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              recent posts
            </h1>

            <button className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog._id}>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mt-5">
                <div className="flex text-gray-500 gap-10 items-center">
                  <p className="flex items-center gap-2">
                    <span>
                      <FaRegUser />
                    </span>
                    <span>By {blog.author}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>
                      <FaRegComment />
                    </span>
                    <span>{blog.no_of_comments}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>
                      <LuCalendarDays />
                    </span>
                    <span>{blog.date}</span>
                  </p>
                </div>
                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  {blog.title}
                </h1>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  {blog.category}
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
