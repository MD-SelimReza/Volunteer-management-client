import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import BecomeVolunteer from "../components/BecomeVolunteer";
import { Helmet } from "react-helmet-async";

const BeVolunteer = () => {
  const { data } = useLoaderData();
  const img = "https://i.ibb.co/mCgZLWg/be-volunteer.jpg";

  return (
    <div>
      <Helmet>
        <title>Be A Volunteer - Volunteer Management</title>
      </Helmet>
      <Banner image={img} title="Be a Volunteer" text="Be a Volunteer" />
      <BecomeVolunteer post={data} />
    </div>
  );
};

export default BeVolunteer;
