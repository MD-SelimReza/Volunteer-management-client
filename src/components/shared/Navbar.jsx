import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [value, setValue] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setValue((prevValue) => !prevValue);
  };

  const hideShow = () => {
    setValue(false);
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  const handleLogOut = async () => {
    await logOut();
    toast.success("Logout Successful");
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <>
      <NavLink
        className="text-gray-300 border-y lg:border-y-0 md:border-y-0 hover:text-emerald-300 hover:underline block px-3 py-4 text-base font-medium"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="text-gray-300 lg:border-b-0 md:border-b-0 border-b hover:text-emerald-300 hover:underline block px-3 py-4 text-base font-medium"
        to="/all-post"
      >
        Gallery
      </NavLink>
      <NavLink
        className="text-gray-300 lg:border-b-0 md:border-b-0 border-b hover:text-emerald-300 hover:underline block px-3 py-4 text-base font-medium"
        to="/blogs"
      >
        Blogs
      </NavLink>
      <NavLink
        className="text-gray-300 lg:border-b-0 md:border-b-0 border-b hover:text-emerald-300 hover:underline block px-3 py-4 text-base font-medium"
        to="/events"
      >
        Events
      </NavLink>
    </>
  );
  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex gap-2 items-center">
                <img className="w-auto h-8" src="/logo.png" alt="" />
                <p className="font-bold md:text-xl lg:text-2xl text-emerald-400">
                  <span className="text-[#D60057]">Volunteer</span>
                  <span className="text-[#65CFEA]">Vision</span>
                </p>
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="text-center hidden md:flex lg:flex">{navLinks}</div>
            <button
              onClick={toggleNavbar}
              className="inline-flex lg:hidden md:hidden items-center size-10 m-auto justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-expanded="false"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http: www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http: www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center">
              <label onChange={toggleTheme} className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />

                <svg
                  className="swap-off fill-current text-white lg:size-10 size-6"
                  xmlns="http: www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <svg
                  className="swap-on fill-current text-white lg:size-10 size-6"
                  xmlns="http: www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>

            <div>
              {user ? (
                <div className="dropdown dropdown-end z-50 ml-0 lg:ml-2">
                  <input
                    type="checkbox"
                    id="navbarToggle"
                    checked={value}
                    onChange={handleClick}
                    className="hidden"
                  />
                  <label htmlFor="navbarToggle" className="">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div
                        title={user?.displayName}
                        className="lg:w-10 w-6 rounded-full"
                      >
                        <img
                          referrerPolicy="no-referrer"
                          alt="Profile"
                          src={user?.photoURL}
                        />
                      </div>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className={
                      value
                        ? "flex menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#080A14] text-white rounded-box w-60"
                        : "hidden"
                    }
                  >
                    <li onClick={hideShow}>
                      <Link
                        to="/add-volunteer-post"
                        className="justify-between"
                      >
                        Add Volunteer Post
                      </Link>
                    </li>
                    <li onClick={hideShow}>
                      <Link to="/manage-my-post">Manage My Post</Link>
                    </li>
                    <li onClick={hideShow}>
                      <Link to="/my-volunteer-requested-post">
                        My Volunteer Requested Post
                      </Link>
                    </li>
                    <li className="mt-2">
                      <button
                        onClick={handleLogOut}
                        className="bg-gray-700 block text-center"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <NavLink
                  className="text-gray-300 hover:text-emerald-300 hover:underline block px-3 py-2 rounded-md text-base font-medium"
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"}`}>
        <div className="text-center">{navLinks}</div>
      </div>
    </nav>
  );
};

export default Navbar;
