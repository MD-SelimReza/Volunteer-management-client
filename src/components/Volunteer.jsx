import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";

const Volunteer = () => {
  const axiosSecure = useAxiosSecure();

  const { data: posts = [], isLoading } = useQuery({
    queryFn: () => getPosts(),
    queryKey: ["posts"],
  });

  const getPosts = async () => {
    const { data } = await axiosSecure("/posts/upcoming");
    return data;
  };

  console.log(posts);

  if (isLoading) return <Loader />;

  return (
    <div className="lg:my-20 md:my-16 my-10 lg:px-10 px-5">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:text-left md:text-left text-center">
          <div className="flex flex-col space-y-3">
            <div className="flex lg:justify-normal md:justify-normal justify-center items-center gap-3">
              <span className="w-5 border-b-4 border-[#DE2A4D]"></span>

              <p className="text-[#DE2A4D] font-bold">Our Events</p>

              <span className="w-5 border-b-4 border-[#DE2A4D]"></span>
            </div>
            <p className="text-3xl font-bold leading-relaxed">
              You Can <br /> Attend Our <br /> Upcoming{" "}
              <br className="lg:flex hidden" /> Events
            </p>
          </div>
          <div className="flex lg:justify-normal md:justify-normal justify-center mt-5">
            <span className="w-16 border-b-[6px] border-[#DE2A4D]"></span>
            <span className="w-16 border-b-[6px] border-[#274DCF]"></span>
          </div>
        </div>
        {posts.slice(0, 6).map((post) => (
          <div
            key={post._id}
            className="flex flex-col shadow-xl bg-gray-100 p-4"
          >
            <div>
              <img
                alt=""
                className="object-cover w-full h-52 bg-gray-500"
                src="https://source.unsplash.com/200x200/?fashion?1"
              />
            </div>
            <div className="flex flex-col flex-1 pt-4">
              <p className="text-lg tracking-wider uppercase hover:underline text-violet-600">
                {post.category}
              </p>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                {post.post_title}
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                <span className="text-lg">Deadline: {post.deadline}</span>
                <Link
                  to={`/post-details/${post._id}`}
                  className="inline-flex w-full mt-4 items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  data-rounded="rounded-md"
                  data-primary="blue-600"
                  data-primary-reset="{}"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/all-post"
          className="relative rounded px-8 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">See all</span>
        </Link>
      </div>
    </div>
  );
};

export default Volunteer;
