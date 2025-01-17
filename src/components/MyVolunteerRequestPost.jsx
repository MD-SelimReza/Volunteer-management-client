import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loader from "./Loader";
import Swal from "sweetalert2";

const MyVolunteerRequestPost = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: posts = [], isLoading } = useQuery({
    queryFn: () => getPosts(),
    queryKey: ["posts"],
  });

  const getPosts = async () => {
    const { data } = await axiosSecure(`/request/${user?.email}`);
    return data;
  };

  const { mutateAsync } = useMutation({
    mutationFn: async ({ email }) => {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        try {
          const { data } = await axiosSecure.delete(`/request/${email}`);
          if (data.deletedCount === 1) {
            Swal.fire({
              title: "Deleted!",
              text: "Canceled request.",
              icon: "success",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the post.",
            icon: "error",
          });
        }
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleRequest = async (email) => {
    await mutateAsync({ email });
  };

  if (isLoading) return <Loader />;

  return (
    <div className="my-10 px-5">
      <section className="container w-full mx-auto">
        <div className="flex mb-5 flex-col justify-center items-center space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-5 border-b-4 border-[#DE2A4D]"></span>

            <p className="text-[#DE2A4D] font-bold">Request Post</p>

            <span className="w-5 border-b-4 border-[#DE2A4D]"></span>
          </div>
          <p className="text-3xl font-bold text-center">
            Client Requested Post
          </p>
        </div>

        <div className="text-lg text-right lg:px-2 font-medium text-[#DE2A4D]">
          Total Post :{" "}
          <span className="bg-purple-200 px-3 rounded-full">
            {posts.length}
          </span>
        </div>
        {posts.length > 0 ? (
          <div className="flex flex-col mt-5">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <span className="font-bold">Client</span>
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <span className="font-bold">Status</span>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <span className="font-bold">Post Title</span>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <span className="font-bold">Email Address</span>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <span className="font-bold">Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {posts.map((post) => (
                        <tr key={post._id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <p className="font-medium text-gray-800 dark:text-white ">
                              {post.volunteer_name}
                            </p>
                          </td>
                          <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                              <h2 className="text-sm font-normal text-emerald-500">
                                {post.status}
                              </h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {post.post_title}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {post.volunteer_email}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button
                              onClick={() =>
                                handleRequest(post.volunteer_email)
                              }
                              className="btn btn-outline btn-error"
                            >
                              cancel
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-2xl text-center">No post available...</p>
        )}
      </section>
    </div>
  );
};

export default MyVolunteerRequestPost;
