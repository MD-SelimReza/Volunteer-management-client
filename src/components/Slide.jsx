import { Link } from "react-router-dom";

const Slide = ({ img, text1, text2, link }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content w-full flex justify-normal text-neutral-content">
        <div className="lg:px-24 px-12 md:px-16 lg:space-y-8">
          <h1 className="mb-5 text-5xl font-bold">{text1}</h1>
          <p className="mb-5">{text2}</p>
          <a
            href="#_"
            className="relative inline-flex border-2 items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <Link to={link}>
              <span className="relative text-white">Button Text</span>
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slide;
