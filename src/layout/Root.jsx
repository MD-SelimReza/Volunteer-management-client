import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <div>
      {/* navbar */}
      <div>
        <Navbar />
      </div>
      {/* outlet */}
      <div className="min-h-[calc(100vh-285px)]">
        <Outlet />
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
