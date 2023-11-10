import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <div className="flex flex-col md:flex-row gap-5 font-medium">
      <btn>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 bg-yellow-400 rounded-lg"
              : "px-3 py-2 bg-slate-300 rounded-lg"
          }
          to="/"
        >
          Home
        </NavLink>
      </btn>
      <btn>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 bg-yellow-400 rounded-lg"
              : "px-3 py-2 bg-slate-300 rounded-lg"
          }
          to="/my-food"
        >
          My Food
        </NavLink>
      </btn>
      <btn>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 bg-yellow-400 rounded-lg"
              : "px-3 py-2 bg-slate-300 rounded-lg"
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
      </btn>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div
              tabIndex={0}
              className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <a className="btn btn-ghost normal-case text-xl mb-10">daisyUI</a>
              {navItems}
            </div>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
