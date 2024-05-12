import PostBox from "../components/PostBox";
import { Helmet } from "react-helmet-async";

const NeedVolunteer = () => {
  return (
    <div>
      <Helmet>
        <title>All Post - Volunteer Management</title>
      </Helmet>
      <PostBox />
    </div>
  );
};

export default NeedVolunteer;
