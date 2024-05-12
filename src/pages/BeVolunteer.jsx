import Banner from "../components/Banner";
import BecomeVolunteer from "../components/BecomeVolunteer";
import { Helmet } from "react-helmet-async";

const BeVolunteer = () => {
  return (
    <div>
      <Helmet>
        <title>Be A Volunteer - Volunteer Management</title>
      </Helmet>
      <Banner />
      <BecomeVolunteer />
    </div>
  );
};

export default BeVolunteer;
