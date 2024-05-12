import Banner from "../components/Banner";
import VolunteerPost from "../components/VolunteerPost";
import { Helmet } from "react-helmet-async";

const AddVolunteerPost = () => {
  return (
    <div>
      <Helmet>
        <title>Add Post - Volunteer Management</title>
      </Helmet>
      <Banner />
      <VolunteerPost />
    </div>
  );
};

export default AddVolunteerPost;
