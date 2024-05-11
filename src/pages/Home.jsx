import AboutUs from "../components/AboutUs";
import OurSolution from "../components/OurSolution";
import Slider from "../components/Slider";
import Volunteer from "../components/Volunteer";

const Home = () => {
  return (
    <div>
      <Slider />
      <AboutUs />
      <Volunteer />
      <OurSolution />
    </div>
  );
};

export default Home;
