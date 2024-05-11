import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2022/01/24/14/26/dice-6963527_640.jpg)",
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-pink-600">Volunteer</h1>
          <div className="flex justify-center gap-3 text-[#0243B3] text-xl">
            <p className="font-bold">Home</p>
            <p className="font-bold flex items-center gap-2">
              <GoDotFill className="text-pink-600" />
              Volunteer
            </p>
          </div>
          <div className="mt-5">
            <a
              href="#_"
              className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
              </span>
              <Link to="/be-volunteer" className="relative text-white">
                Be A Volunteer
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
