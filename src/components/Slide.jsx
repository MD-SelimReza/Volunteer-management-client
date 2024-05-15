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
          <h1 className="mb-5 text-5xl text-black font-bold">{text1}</h1>
          <p className="mb-5 text-black text-xl">{text2}</p>
          <div>
            <Link
              to={link}
              className="relative rounded px-10 py-3 overflow-hidden group bg-blue-700"
            >
              <span className="relative">See all</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
