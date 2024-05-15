import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import PostUpdate from "../components/PostUpdate";
import { Helmet } from "react-helmet-async";

const UpdatePost = () => {
  const { data } = useLoaderData();
  const img =
    "https://cdn.pixabay.com/photo/2022/01/24/14/26/dice-6963527_640.jpg";

  return (
    <div>
      <Helmet>
        <title>Update Post - Volunteer Management</title>
      </Helmet>
      <Banner
        image={img}
        title="Now update and modified your post"
        text="Update Post"
      />
      <PostUpdate post={data} />
    </div>
  );
};

export default UpdatePost;
