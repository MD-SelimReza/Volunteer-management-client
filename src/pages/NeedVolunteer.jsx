import Banner from "../components/Banner";
import VolunteerPostDetails from "../components/VolunteerPostDetails";
import { Helmet } from "react-helmet-async";

const NeedVolunteer = () => {
  return (
    <div>
      <Helmet>
        <title>Need Volunteer - Volunteer Management</title>
      </Helmet>
      <Banner />
      <VolunteerPostDetails />
    </div>
  );
};

export default NeedVolunteer;
