import Banner from "../components/Banner";
import VolunteerPost from "../components/VolunteerPost";
import { Helmet } from "react-helmet-async";

const AddVolunteerPost = () => {
  const img =
    "https://cdn.pixabay.com/photo/2022/01/24/14/26/dice-6963527_640.jpg";

  return (
    <div>
      <Helmet>
        <title>Add Post - Volunteer Management</title>
      </Helmet>
      <Banner image={img} title="Create A post" text="Add Volunteers Post" />
      <VolunteerPost />
    </div>
  );
};

export default AddVolunteerPost;
