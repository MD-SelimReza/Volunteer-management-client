import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import VolunteerPostDetails from "../components/VolunteerPostDetails";

const PostDetails = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <Banner />
      <VolunteerPostDetails post={data} />
    </div>
  );
};

export default PostDetails;
