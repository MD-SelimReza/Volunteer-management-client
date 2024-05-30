import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="grid gap-5 lg:gap-8 lg:grid-cols-3 grid-cols-2 justify-center p-5 lg:p-10 bg-[#3A415A] text-white">
        <aside className="lg:col-span-1 col-span-2 lg:text-left text-center">
          <img
            src="/logo.png"
            alt=""
            className="lg:size-24 size-20 lg:mx-0 mx-auto"
          />
          <p className="text-xl">
            <span className="text-[#D60057]">Volunteer</span>
            <span className="text-[#65CFEA]">Vision</span> Ltd.
            <br />
            Providing reliable services since 2020
          </p>
          <div className="flex lg:justify-normal justify-center mt-5 gap-4 items-center text-white">
            <span className="border p-2 hover:bg-[#DE294C] hover:border-[#DE294C] duration-300">
              <FaFacebookF />
            </span>
            <span className="border p-2 hover:bg-[#DE294C] hover:border-[#DE294C] duration-300">
              <FaInstagram />
            </span>
            <span className="border p-2 hover:bg-[#DE294C] hover:border-[#DE294C] duration-300">
              <FaTwitter />
            </span>
            <span className="border p-2 hover:bg-[#DE294C] hover:border-[#DE294C] duration-300">
              <TfiGoogle className="size-4 font-bold" />
            </span>
          </div>
        </aside>
        <div className="flex justify-center">
          <nav className="flex flex-col space-y-3">
            <h6 className="footer-title lg:text-2xl opacity-100">
              Quick Links
            </h6>
            <Link to="/" className="link link-hover hover:text-emerald-400">
              Home
            </Link>
            <a className="link link-hover hover:text-emerald-400">About Us</a>
            <Link
              to="/all-post"
              className="link link-hover hover:text-emerald-400"
            >
              Need Volunteer
            </Link>
            <a className="link link-hover hover:text-emerald-400">Contact Us</a>
          </nav>
        </div>
        <div className="flex justify-center">
          <nav className="flex flex-col space-y-3">
            <h6 className="footer-title lg:text-2xl opacity-100">Contact Us</h6>
            <p className="flex items-center gap-1 lg:gap-3">
              <span>
                <IoLocationOutline className="size-8" />
              </span>
              <span>
                68D, Belsion Town 2365 <br /> Fna city, LH 3656, USA
              </span>
            </p>
            <p className="flex items-center gap-1 lg:gap-3">
              <span>
                <PiPhoneCallLight className="size-8" />
              </span>
              <span>
                + 8 (123) 123 456 789 <br /> + 8 (123) 123 456 789
              </span>
            </p>
            <p className="flex items-center gap-1 lg:gap-3">
              <span>
                <HiOutlineMail className="size-8" />
              </span>
              <span className="link link-hover">volunteer@management.com</span>
            </p>
          </nav>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-300">
        <aside>
          <p>
            Copyright © 2024 - All right reserved by{" "}
            <span className="text-[#DE294C]">VolunteerVision</span> Ltd
          </p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
