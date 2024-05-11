import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <div>
      {/* navbar */}
      <div className="h-16">
        <Navbar />
      </div>
      {/* outlet */}
      <div className="min-h-[calc(100vh-335px)]">
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
