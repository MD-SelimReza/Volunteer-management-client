import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useState } from "react";

const PostBox = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: posts = [],
    isLoading: postsLoading,
    isError: postsError,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/all-post?page=${currentPage}&size=6`,
        {
          params: {
            page: currentPage,
            size: 6,
          },
        }
      );
      return data;
    },
    queryKey: ["posts", currentPage],
  });

  const {
    data: countData,
    isLoading: countLoading,
    isError: countError,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure("/total-post");
      return data;
    },
    queryKey: ["countData"],
  });

  const count = countData?.count || 0;
  const numberOfPages = Math.ceil(count / 6);
  const pages = [...Array(numberOfPages).keys()].map((index) => index + 1);

  const handlePaginationButton = (page) => {
    setCurrentPage(page);
  };

  if (postsLoading || countLoading) return <Loader />;
  if (postsError || countError)
    return <p className="text-red-500">Error fetching data</p>;

  return (
    <div className="lg:my-20 md:my-16 my-10 lg:px-10 px-5">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <div
            key={post._id}
            className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <img
              className="object-cover object-center w-full h-56"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />
            <div className="flex flex-col justify-between">
              <div className="px-6 py-4 h-36">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {post.post_title}
                </h1>

                <p
                  title={post.description}
                  className="py-2 text-gray-700 dark:text-gray-400"
                >
                  {post.description.substring(0, 45)}...
                </p>
              </div>
              <div className="h-">
                <div className="flex justify-between px-6 py-4">
                  <p className="text-white">{post.organizer_name}</p>
                  <Link
                    to={`/post-details/${post._id}`}
                    className="text-violet-400 hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>
        {pages.map((page) => (
          <button
            className={`hidden ${
              currentPage === page ? "bg-blue-500 text-white" : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
            onClick={() => handlePaginationButton(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PostBox;
