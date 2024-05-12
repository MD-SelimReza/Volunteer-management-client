import Banner from "../components/Banner";
import MyVolunteerRequestPost from "../components/MyVolunteerRequestPost";
import { Helmet } from "react-helmet-async";

const MyVolunteerRequestedPost = () => {
  return (
    <div>
      <Helmet>
        <title>Volunteer Request Post - Volunteer Management</title>
      </Helmet>
      <Banner />
      <MyVolunteerRequestPost />
    </div>
  );
};

export default MyVolunteerRequestedPost;
