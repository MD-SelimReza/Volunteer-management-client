import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import VolunteerPostDetails from "../components/VolunteerPostDetails";

const PostDetails = () => {
  const { data } = useLoaderData();
  const img =
    "https://cdn.pixabay.com/photo/2022/01/24/14/26/dice-6963527_640.jpg";

  return (
    <div>
      <Banner image={img} title="Post Details" text="Be Volunteer" />
      <VolunteerPostDetails post={data} />
    </div>
  );
};

export default PostDetails;
