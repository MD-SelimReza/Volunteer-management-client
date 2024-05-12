import Banner from "../components/Banner";
import MyPost from "../components/MyPost";
import { Helmet } from "react-helmet-async";

const ManageMyPost = () => {
  return (
    <div>
      <Helmet>
        <title>Manage Post - Volunteer Management</title>
      </Helmet>
      <Banner />
      <MyPost />
    </div>
  );
};

export default ManageMyPost;
