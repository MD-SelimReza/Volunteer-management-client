import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import BecomeVolunteer from "../components/BecomeVolunteer";
import { Helmet } from "react-helmet-async";

const BeVolunteer = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Be A Volunteer - Volunteer Management</title>
      </Helmet>
      <Banner />
      <BecomeVolunteer post={data} />
    </div>
  );
};

export default BeVolunteer;
