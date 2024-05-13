import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { useState } from "react";

const PostBox = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

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
  console.log(count, pages);

  const handlePaginationButton = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  console.log(search);

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
    <div className="lg:my-20 md:my-16 my-10 lg:px-10 px-5">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
        <p>Total Post: {countData?.total}</p>
        <div>
          <select
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(currentPage);
            }}
            value={filter}
            name="category"
            id="category"
            className="border p-4 rounded-lg"
          >
            <option value="">Filter By Category</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Social Services">Social Services</option>
            <option value="Animal Welfare">Animal Welfare</option>
          </select>
        </div>

        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              name="search"
              placeholder="Enter Job Title"
              aria-label="Enter Job Title"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
        <div>
          <select
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(currentPage);
            }}
            value={sort}
            name="sort"
            id="sort"
            className="border p-4 rounded-md"
          >
            <option value="">Sort By Deadline</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
        <button onClick={handleReset} className="btn">
          Reset
        </button>
      </div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post._id}
            className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div className="flex flex-col justify-between">
              <div className="px-6 py-4 h-40">
                <div className="flex justify-between items-center mb-3">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    {post.category}
                  </h1>
                  <p>Volunteers : {post.NoOfVolunteers}</p>
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
