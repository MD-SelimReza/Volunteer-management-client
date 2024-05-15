import Banner from "../components/Banner";
import MyVolunteerRequestPost from "../components/MyVolunteerRequestPost";
import { Helmet } from "react-helmet-async";

const MyVolunteerRequestedPost = () => {
  const img = "https://i.ibb.co/6XT5x0q/volunteer4.jpg";

  return (
    <div>
      <Helmet>
        <title>Volunteer Request Post - Volunteer Management</title>
      </Helmet>
      <Banner
        image={img}
        title="Here is all Request post of volunteer."
        text="Request Post"
      />
      <MyVolunteerRequestPost />
    </div>
  );
};

export default MyVolunteerRequestedPost;
