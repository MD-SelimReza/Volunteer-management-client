import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const PostBox = () => {
  const axiosSecure = useAxiosSecure();

  const { data: posts = [], isLoading } = useQuery({
    queryFn: () => getPosts(),
    queryKey: ["posts"],
  });

  const getPosts = async () => {
    const { data } = await axiosSecure("/posts");
    return data;
  };

  if (isLoading) return <Loader />;

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
    </div>
  );
};

export default PostBox;
