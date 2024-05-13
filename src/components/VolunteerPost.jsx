import { useState } from "react";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../src/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const VolunteerPost = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePost = async (data) => {
    const {
      thumbnail,
      post_title,
      category,
      NoOfVolunteers,
      location,
      description,
    } = data;
    const deadline = new Date(startDate).toLocaleDateString();
    const organizer_email = user?.email;
    const organizer_name = user?.displayName;
    const organizer_photo = user?.photoURL;
    const post = {
      thumbnail,
      post_title,
      category,
      NoOfVolunteers,
      location,
      description,
      deadline,
      organizer_email,
      organizer_name,
      organizer_photo,
    };
    try {
      const { data } = await axiosSecure.post("/post", post);
      console.log(data);
      toast.success("Create a post successfully!");
      navigate("/all-post");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
    console.log(post);
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className="w-3/4 p-2 md:p-6 mx-auto bg-white rounded-md shadow-lg border-4 border-[#FFC4AD]">
        <h2 className="text-3xl text-center font-bold text-[#091854] capitalize mb-10">
          Create A Post
        </h2>

        <form onSubmit={handleSubmit(handlePost)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="thumbnail">
                Thumbnail
              </label>
              <input
                id="thumbnail"
                type="text"
                placeholder="Thumbnail"
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-[3px] focus:rounded-md focus:border-black"
                {...register("thumbnail", { required: true })}
              />
              {errors.thumbnail && (
                <span className="text-red-500">
                  The thumbnail field is required
                </span>
              )}
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="post_title">
                Post Title
              </label>
              <input
                id="post_title"
                type="text"
                placeholder="Post Title"
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-[3px] focus:rounded-md focus:border-black"
                {...register("post_title", { required: true })}
              />
              {errors.post_title && (
                <span className="text-red-500">
                  The post title field is required
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>
              <DatePicker
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-[3px] focus:rounded-md focus:border-black"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Category
              </label>
              <select
                id="category"
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-[3px] focus:rounded-md focus:border-black"
                {...register("category", { required: true })}
              >
                <option value="Education">Education</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Social Services">Social Services</option>
                <option value="Animal Welfare">Animal Welfare</option>
              </select>
              {errors.category && (
                <span className="text-red-500">
                  The category field is required
                </span>
              )}
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="NoOfVolunteers">
                Number of Volunteers
              </label>
              <input
                id="NoOfVolunteers"
                type="number"
                placeholder="No of Volunteers"
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-[3px] focus:rounded-md focus:border-black"
                {...register("NoOfVolunteers", { required: true })}
              />
              {errors.NoOfVolunteers && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="location">
                Location
              </label>
              <input
                id="location"
                type="text"
                placeholder="Location"
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-[3px] focus:rounded-md focus:border-black"
                {...register("location", { required: true })}
              />
              {errors.location && (
                <span className="text-red-500">
                  The location field is required
                </span>
              )}
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                User Email
              </label>
              <input
                id="emailAddress"
                type="email"
                defaultValue={user?.email}
                disabled
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-[3px] focus:rounded-md focus:border-black"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="user_name">
                User Name
              </label>
              <input
                id="user_name"
                type="text"
                defaultValue={user?.displayName}
                disabled
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-[3px] focus:rounded-md focus:border-black"
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && (
              <span className="text-red-500">
                The description field is required
              </span>
            )}
          </div>
          <div className="flex justify-center mt-6">
            <button className="rounded relative inline-flex group items-center justify-center px-10 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <span className="relative font-bold">
                <input type="submit" value="Post" />
              </span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default VolunteerPost;
