import AboutUs from "../components/AboutUs";
import Divider1 from "../components/Divider1";
import Divider2 from "../components/Divider2";
import OurSolution from "../components/OurSolution";
import Slider from "../components/Slider";
import Volunteer from "../components/Volunteer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="relative">
      <Helmet>
        <title>Home - VolunteerVision</title>
      </Helmet>
      <Slider />
      <AboutUs />
      <Divider1 />
      <Volunteer />
      <Divider2 />
      <OurSolution />
    </div>
  );
};

export default Home;
