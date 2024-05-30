import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TbGridDots } from "react-icons/tb";
import { MdFormatAlignJustify } from "react-icons/md";

const PostBox = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const {
    data: posts = [],
    isLoading: postsLoading,
    isError: postsError,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/all-post?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`,
        {
          params: {
            page: currentPage,
            size: itemsPerPage,
          },
        }
      );
      return data;
    },
    queryKey: ["posts", currentPage, itemsPerPage, filter, sort, search],
  });

  const {
    data: countData,
    isLoading: countLoading,
    isError: countError,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/total-post?filter=${filter}&search=${search}`
      );
      return data;
    },
    queryKey: ["countData", filter, search],
  });

  const count = countData?.total || 0;
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((index) => index + 1);

  const handlePaginationButton = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  const handleReset = () => {
    setFilter("");
    setSort("");
    setSearch("");
    setSearchText("");
  };

  if (postsLoading || countLoading) return <Loader />;
  if (postsError || countError)
    return <p className="text-red-500">Error fetching data</p>;

  return (
    <div className="lg:mb-16 mb-10 mt-5 lg:px-10 md:px-5 px-2">
      <div className="inline-flex w-full text-center overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
        <div className="px-5 lg:flex md:flex hidden w-full py-2 text-xs font-medium transition-colors duration-200 sm:text-sm bg-gray-900 dark:text-gray-300">
          Total Post: {countData?.total}
        </div>
        <div className="w-full text-center">
          <select
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(currentPage);
            }}
            value={filter}
            name="category"
            id="category"
            className="px-5 py-2 text-xs font-medium outline-none transition-colors duration-200 sm:text-sm bg-gray-900 dark:text-gray-300"
          >
            <option value="">Filter By Category</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Social Services">Social Services</option>
            <option value="Animal Welfare">Animal Welfare</option>
          </select>
        </div>
        <div className="w-full text-center">
          <select
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(currentPage);
            }}
            value={sort}
            name="sort"
            id="sort"
            className="px-5 py-2 text-xs font-medium outline-none transition-colors duration-200 sm:text-sm bg-gray-900 dark:text-gray-300"
          >
            <option value="">No of volunteers</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
        <div className="px-5 lg:flex md:flex hidden w-80 gap-8 flex items-center py-2 text-xs font-medium transition-colors duration-200 sm:text-sm bg-gray-900 dark:text-gray-300">
          <span>
            <TbGridDots
              onClick={() => setIsVisible(true)}
              className="size-5 text-emerald-300"
            />
          </span>
          <span>
            <MdFormatAlignJustify
              onClick={() => setIsVisible(false)}
              className="size-5 text-emerald-300"
            />
          </span>
        </div>
      </div>
      <div className="flex w-full mb-5 flex-col md:flex-row justify-center items-center lg:gap-5 md:gap-5">
        <form className="my-5 lg:w-3/4 md:w-3/4" onSubmit={handleSearch}>
          <div className="flex p-1 gap-5 justify-between input input-bordered overflow-hidden rounded-lg">
            <label className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-5 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                name="search"
                className="grow pl-1 py-1"
                placeholder="Search"
              />
            </label>
            <button className="px-5 py-2 rounded-lg text-xs font-medium transition-colors duration-200 sm:text-sm bg-gray-900 dark:text-gray-300">
              Search
            </button>
          </div>
        </form>

        <div className="flex lg:w-auto md:w-auto w-[90%]">
          <div className="px-5 lg:hidden md:hidden w-full flex rounded-tl-lg rounded-bl-lg justify-center items-center text-xs font-medium transition-colors duration-200 sm:text-sm bg-gray-900 dark:text-gray-300">
            Total Post: {countData?.total}
          </div>

          <button
            onClick={handleReset}
            className="px-8 lg:w-40 md:w-36 w-full py-3 md:rounded-lg lg:rounded-lg text-xs font-medium transition-colors duration-200 sm:text-sm bg-gray-900 hover:bg-gray-700 uppercase dark:text-gray-300"
          >
            Reset All
          </button>

          <div className="px-5 lg:hidden md:hidden rounded-tr-lg rounded-br-lg w-80 gap-8 flex items-center py-2 text-xs font-medium transition-colors duration-200 sm:text-sm bg-gray-900 dark:text-gray-300">
            <span>
              <TbGridDots
                onClick={() => setIsVisible(true)}
                className="size-5 text-emerald-300"
              />
            </span>
            <span>
              <MdFormatAlignJustify
                onClick={() => setIsVisible(false)}
                className="size-5 text-emerald-300"
              />
            </span>
          </div>
        </div>
      </div>

      {isVisible ? (
        <div className="grid grid-cols-1 justify-center gap-x-4 gap-y-4 lg:gap-y-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post._id}
              className="lg:max-w-[19rem] md:max-w-sm w-[22rem] sm:max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
            >
              <div className="flex flex-col justify-between">
                <div className="px-6 py-4 h-40">
                  <div className="flex justify-between items-center mb-3">
                    <p
                      className={`py-1  ${
                        post.category === "Education" && "text-blue-500"
                      } ${
                        post.category === "Healthcare" && "text-emerald-500"
                      } ${
                        post.category === "Social Services" && "text-pink-500"
                      } ${
                        post.category === "Animal Welfare" && "text-purple-500"
                      }`}
                    >
                      {post.category}
                    </p>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      Volunteers :{" "}
                      <span className="text-blue-500">
                        {post.NoOfVolunteers}
                      </span>
                    </p>
                  </div>
                  <p className="text-xl font-semibold text-gray-800 dark:text-white">
                    {post.post_title}
                  </p>
                  <p
                    title={post.description}
                    className="py-2 text-gray-700 dark:text-gray-400"
                  >
                    {post.description.substring(0, 45)}...
                  </p>
                </div>
                <div className="h-">
                  <div className="flex justify-between px-6 py-4">
                    <p className="text-white">{post.deadline}</p>
                    <Link to={`/post-details/${post._id}`}>
                      <p
                        className={`px-3 py-1 uppercase hover:underline  ${
                          post.category === "Education" && "text-blue-500"
                        } ${
                          post.category === "Healthcare" && "text-emerald-500"
                        } ${
                          post.category === "Social Services" && "text-pink-500"
                        } ${
                          post.category === "Animal Welfare" &&
                          "text-purple-500"
                        }`}
                      >
                        Read more
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col mt-5">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-12 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span className="font-bold">Author</span>
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-12 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span className="font-bold">Post Title</span>
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-12 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span className="font-bold">Volunteers</span>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span className="font-bold">Category</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span className="font-bold">Location</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span className="font-bold">Deadline</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span className="font-bold">Details</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {posts.map((post) => (
                      <tr key={post._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            {post.organizer_name}
                          </h2>
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {post.post_title}
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <span className="text-purple-400 mr-3">
                            {post.NoOfVolunteers}
                          </span>{" "}
                          volunteers
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <p
                            className={`px-3 py-1  ${
                              post.category === "Education" && "text-blue-500"
                            } ${
                              post.category === "Healthcare" &&
                              "text-emerald-500"
                            } ${
                              post.category === "Social Services" &&
                              "text-pink-500"
                            } ${
                              post.category === "Animal Welfare" &&
                              "text-purple-500"
                            }`}
                          >
                            {post.category}
                          </p>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {post.location}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {post.deadline}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <Link to={`/post-details/${post._id}`}>
                            <p
                              className={`px-3 py-1 uppercase  ${
                                post.category === "Education" && "text-blue-500"
                              } ${
                                post.category === "Healthcare" &&
                                "text-emerald-500"
                              } ${
                                post.category === "Social Services" &&
                                "text-pink-500"
                              } ${
                                post.category === "Animal Welfare" &&
                                "text-purple-500"
                              }`}
                            >
                              Read more
                            </p>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-12">
        <button
          disabled={currentPage === 1 || countData?.total === 0}
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
          disabled={currentPage === numberOfPages || countData?.total === 0}
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
