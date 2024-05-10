import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-emerald-300 border-b-4 border-emerald-300" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-emerald-300 border-b-4 border-emerald-300" : ""
        }
        to="/need-volunteer"
      >
        Need Volunteer
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-emerald-300 border-b-4 border-emerald-300" : ""
        }
        to="/login"
      >
        Login
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-[#3A415A] text-white shadow-sm">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-auto h-7" src="" alt="" />
          <span className="font-bold text-2xl text-emerald-400">
            <span>Volunteer</span> Management
          </span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-lg font-medium uppercase gap-5">
          {navLinks}
        </ul>

        <div className="dropdown dropdown-end z-50 ml-5">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full" title="">
              <img referrerPolicy="no-referrer" alt="Profile" src="" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#080A14] rounded-box w-60"
          >
            <li>
              <Link to="/add-volunteer-post" className="justify-between">
                Add Volunteer Post
              </Link>
            </li>
            <li>
              <Link to="/manage-my-post">Manage My Post</Link>
            </li>
            <li>
              <Link to="/my-volunteer-requested-post">
                My Volunteer Requested Post
              </Link>
            </li>
            <li className="mt-2">
              <button className="bg-gray-700 block text-center">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
