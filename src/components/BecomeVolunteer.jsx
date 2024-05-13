import useAuth from "../hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const BecomeVolunteer = ({ post }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // const navigate = useNavigate();
  const {
    _id,
    thumbnail,
    post_title,
    category,
    NoOfVolunteers,
    location,
    description,
    deadline,
    organizer_email,
    organizer_name,
  } = post;

  const requestId = _id;
  const volunteer_email = user?.email;
  const volunteer_name = user?.displayName;
  const status = "request";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRequest = async (data) => {
    const { suggestion } = data;
    const beVolunteer = {
      requestId,
      thumbnail,
      post_title,
      category,
      NoOfVolunteers,
      location,
      description,
      deadline,
      organizer_email,
      organizer_name,
      volunteer_email,
      volunteer_name,
      suggestion,
      status,
    };

    if (NoOfVolunteers === "0") {
      return toast.error("No set available for volunteer!");
    }

    if (organizer_email === volunteer_email) {
      return toast.error("Sorry, you can not request on this post!");
    }

    try {
      const { data } = await axiosSecure.post("/request", beVolunteer);
      console.log(data);
      toast.success("Request successfully!");
      // navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data);
    }

    console.table(post);
    console.table(beVolunteer.NoOfVolunteers === "0");
  };
  return (
    <div>
      <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
        <section className="w-3/4 p-2 md:p-6 mx-auto bg-white rounded-md shadow-lg border-4 border-[#FFC4AD]">
          <h2 className="text-3xl text-center text-[#091854] font-medium capitalize mb-10">
            Become a Volunteer
          </h2>

          <form onSubmit={handleSubmit(handleRequest)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-[#091854] font-medium"
                  htmlFor="thumbnail"
                >
                  Thumbnail
                </label>
                <input
                  id="thumbnail"
                  type="text"
                  disabled
                  defaultValue={thumbnail}
                  className="block w-full px-4 py-3 mt-2 bg-[#E8F0FE] text-black border-2 rounded-md border-[#A14AF2]"
                />
              </div>
              <div>
                <label
                  className="text-[#091854] font-medium"
                  htmlFor="post_title"
                >
                  Post Title
                </label>
                <input
                  id="post_title"
                  type="text"
                  disabled
                  defaultValue={post_title}
                  className="block w-full px-4 py-3 mt-2 bg-[#E8F0FE] text-black border-2 rounded-md border-[#A14AF2]"
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700">Deadline</label>
                <input
                  id="deadline"
                  type="text"
                  disabled
                  defaultValue={deadline}
                  className="block w-full px-4 py-3 mt-2 bg-[#E8F0FE] text-black border-2 rounded-md border-[#A14AF2]"
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label
                  className="text-[#091854] font-medium"
                  htmlFor="category"
                >
                  Category
                </label>
                <input
                  id="post_title"
                  type="text"
                  disabled
                  defaultValue={category}
                  className="block w-full px-4 py-3 mt-2 bg-[#E8F0FE] text-black border-2 rounded-md border-[#A14AF2]"
                />
              </div>

              <div>
                <label
                  className="text-[#091854] font-medium"
                  htmlFor="NoOfVolunteers"
                >
                  Number of Volunteers
                </label>
                <input
                  id="NoOfVolunteers"
                  type="number"
                  disabled
                  defaultValue={NoOfVolunteers}
                  className="block w-full px-4 py-3 mt-2 bg-[#E8F0FE] text-black border-2 rounded-md border-[#A14AF2]"
                />
              </div>

              <div>
                <label
                  className="text-[#091854] font-medium"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  defaultValue={location}
                  disabled
                  className="block w-full px-4 py-3 mt-2 bg-[#E8F0FE] text-black border-2 rounded-md border-[#A14AF2]"
                />
              </div>

              <div>
                <label
                  className="text-[#091854] font-medium"
                  htmlFor="emailAddress"
                >
                  Organizer Email
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  defaultValue={organizer_email}
                  disabled
                  className="block w-full px-4 py-3 mt-2 bg-[#E8F0FE] text-black border-2 rounded-md border-[#A14AF2]"
                />
              </div>

              <div>
                <label
                  className="text-[#091854] font-medium"
                  htmlFor="user_name"
                >
                  Organizer Name
                </label>
                <input
                  id="user_name"
                  type="text"
                  defaultValue={organizer_name}
                  disabled
                  className="block w-full px-4 py-3 mt-2 bg-[#E8F0FE] text-black border-2 rounded-md border-[#A14AF2]"
                />
              </div>

              <div>
                <label
                  className="text-[#091854] font-medium"
                  htmlFor="emailAddress"
                >
                  Volunteer Email
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  defaultValue={user?.email}
                  disabled
                  className="block w-full px-4 py-3 mt-2 bg-[#E8F0FE] text-black border-2 rounded-md border-[#A14AF2]"
                />
              </div>

              <div>
                <label
                  className="text-[#091854] font-medium"
                  htmlFor="user_name"
                >
                  Volunteer Name
                </label>
                <input
                  id="user_name"
                  type="text"
                  defaultValue={user?.displayName}
                  disabled
                  className="block w-full px-4 py-3 mt-2 bg-[#E8F0FE] text-black border-2 rounded-md border-[#A14AF2]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label
                className="text-[#091854] font-medium"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                defaultValue={description}
                disabled
                className="block w-full px-4 py-3 mt-2 bg-[#E8F0FE] text-black border-2 rounded-md border-[#A14AF2]"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label
                className="text-[#091854] font-medium"
                htmlFor="suggestion"
              >
                Suggestion
              </label>
              <textarea
                id="suggestion"
                className="block w-full px-4 py-3 mt-2 bg-[#E8F0FE] text-black border-2 rounded-md border-[#A14AF2]"
                {...register("suggestion", { required: true })}
              ></textarea>
              {errors.suggestion && (
                <span className="text-red-500">
                  The suggestion field is required
                </span>
              )}
            </div>
            <div className="flex justify-center mt-6">
              <button className="rounded relative inline-flex group items-center justify-center px-10 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                <span className="relative font-medium">
                  <input type="submit" value="Request" />
                </span>
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default BecomeVolunteer;
