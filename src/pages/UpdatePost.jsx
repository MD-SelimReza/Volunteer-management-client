import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import PostUpdate from "../components/PostUpdate";
import { Helmet } from "react-helmet-async";

const UpdatePost = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Update Post - Volunteer Management</title>
      </Helmet>
      <Banner />
      <PostUpdate post={data} />
    </div>
  );
};

export default UpdatePost;
