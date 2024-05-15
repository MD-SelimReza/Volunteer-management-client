import { Link } from "react-router-dom";

const Slide = ({ img, text1, text2, link, btnText }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content w-full flex justify-normal text-neutral-content">
        <div className="lg:px-24 lg:w-[750px] md:w-[600px] lg:text-left text-center px-8 md:px-16 lg:space-y-8">
          <h1 className="mb-5 md:text-3xl text-2xl lg:text-5xl text-[#D60057] font-bold">
            {text1}
          </h1>
          <p className="mb-5 text-black opacity-100 lg:text-xl">{text2}</p>
          <div>
            <Link
              to={link}
              className="relative rounded px-10 py-3 overflow-hidden group bg-blue-700"
            >
              <span className="relative">{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
