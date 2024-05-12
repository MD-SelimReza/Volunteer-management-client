import Banner from "../components/Banner";
import PostUpdate from "../components/PostUpdate";
import { Helmet } from "react-helmet-async";

const UpdatePost = () => {
  return (
    <div>
      <Helmet>
        <title>Update Post - Volunteer Management</title>
      </Helmet>
      <Banner />
      <PostUpdate />
    </div>
  );
};

export default UpdatePost;
