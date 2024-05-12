import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="h-16">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-335px)]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
