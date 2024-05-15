import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const Root = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Attach scroll event listener to window
  window.addEventListener("scroll", toggleVisibility);

  return (
    <div className="max-w-6xl mx-auto">
      <div onClick={scrollToTop}>
        <div
          className={`scroll-to-top-button ${
            isVisible
              ? "visible fixed z-50 right-10 border-4 rounded-full border-red-600 bottom-20 cursor-pointer text-3xl font-bold"
              : "hidden"
          }`}
        >
          <FaArrowUp className="text-4xl p-1 bg-white rounded-full text-red-600" />
        </div>
      </div>
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
