import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const Banner = ({ image, title, text }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-pink-600">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-3 text-[#A34DF4] text-xl">
            <Link
              to="/"
              className="font-bold hover:border-b-4 hover:border-[#A34DF4]"
            >
              Home
            </Link>
            <p>
              <GoDotFill className="text-pink-600" />
            </p>
            <p className="font-bold flex items-center border-b-4 border-[#A34DF4] gap-2">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
