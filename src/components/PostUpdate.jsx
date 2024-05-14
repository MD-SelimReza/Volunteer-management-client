import { useState } from "react";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const PostUpdate = ({ post }) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    _id,
    thumbnail,
    post_title,
    category,
    NoOfVolunteers,
    location,
    description,
    deadline,
  } = post;

  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date(deadline) || new Date());

  const { register, handleSubmit } = useForm();

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
    const updatePost = {
      thumbnail,
      post_title,
      category,
      NoOfVolunteers,
      location,
      description,
      deadline,
      organizer_email,
      organizer_name,
    };

    try {
      const { data } = await axiosSecure.put(`post/${_id}`, updatePost);
      if (data.modifiedCount === 1) {
        toast.success("Post update successfully!");
      }
      navigate("/all-post");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className="w-3/4 p-2 md:p-6 mx-auto bg-white rounded-md shadow-lg border-4 border-[#FFC4AD]">
        <h2 className="text-3xl text-center font-bold text-[#091854] capitalize mb-10">
          Become a Volunteer
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
                defaultValue={thumbnail}
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-[3px] focus:rounded-md focus:border-black"
                {...register("thumbnail")}
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="post_title">
                Post Title
              </label>
              <input
                id="post_title"
                type="text"
                defaultValue={post_title}
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-[3px] focus:rounded-md focus:border-black"
                {...register("post_title")}
              />
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
                defaultValue={category}
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-[3px] focus:rounded-md focus:border-black"
                {...register("category")}
              >
                <option value="Education">Education</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Social Services">Social Services</option>
                <option value="Animal Welfare">Animal Welfare</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="no_of_volunteers">
                Number of Volunteers
              </label>
              <input
                id="no_of_volunteers"
                type="number"
                defaultValue={NoOfVolunteers}
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-[3px] focus:rounded-md focus:border-black"
                {...register("NoOfVolunteers")}
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="location">
                Location
              </label>
              <input
                id="location"
                type="text"
                defaultValue={location}
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-[3px] focus:rounded-md focus:border-black"
                {...register("location")}
              />
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
              defaultValue={description}
              className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-[3px] focus:rounded-md focus:border-black"
              {...register("description")}
            ></textarea>
          </div>
          <div className="flex justify-center mt-6">
            <button className="rounded relative inline-flex group items-center justify-center px-10 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <span className="relative font-bold">
                <input type="submit" value="Update" />
              </span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PostUpdate;
