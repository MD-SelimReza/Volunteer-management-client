import Banner from "../components/Banner";
import MyPost from "../components/MyPost";
import { Helmet } from "react-helmet-async";

const ManageMyPost = () => {
  const img =
    "https://cdn.pixabay.com/photo/2022/01/24/14/26/dice-6963527_640.jpg";

  return (
    <div>
      <Helmet>
        <title>Manage Post - VolunteerVision</title>
      </Helmet>
      <Banner
        image={img}
        title="You can update and delete your post to here."
        text="Manage post"
      />
      <MyPost />
    </div>
  );
};

export default ManageMyPost;
