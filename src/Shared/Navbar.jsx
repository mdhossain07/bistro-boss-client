import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logged Out!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const navItems = (
    <div className="flex flex-col md:flex-row font-medium uppercase">
      <button>
        <NavLink
          className={({ isActive }) =>
            isActive ? "px-3 py-2 text-yellow-400" : "px-3 py-2 text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </button>

      <button>
        <NavLink
          className={({ isActive }) =>
            isActive ? "px-3 py-2 text-yellow-400" : "px-3 py-2 text-white"
          }
          to="/menu"
        >
          Our Menu
        </NavLink>
      </button>

      <button>
        <NavLink
          className={({ isActive }) =>
            isActive ? "px-3 py-2 text-yellow-400" : "px-3 py-2 text-white"
          }
          to="/our-shop/salads"
        >
          Our Shop
        </NavLink>
      </button>
      {user?.email && (
        <button>
          <NavLink
            className={({ isActive }) =>
              isActive ? "px-3 py-2 text-yellow-400" : "px-3 py-2 text-white"
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </button>
      )}
    </div>
  );
  return (
    <div>
      <div className="navbar fixed z-10 lg:max-w-screen-xl  bg-black bg-opacity-30 text-white">
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
              className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-black "
            >
              <Link
                to="/"
                className="cursor-pointer uppercase text-xl mb-20 font-medium"
              >
                Bistro Boss Resturant
              </Link>

              {navItems}
            </div>
          </div>
          <Link to="/" className="cursor-pointer uppercase text-xl font-medium">
            Bistro Boss Resturant
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end flex justify-around">
          <button className="flex gap-2">
            <FaShoppingCart />
            <div className="badge">+{cart.length}</div>
          </button>

          <div>{user && <h2>{user.displayName}</h2>}</div>
          <div>
            {user ? (
              <Link to="/login" className="btn">
                <button onClick={handleLogOut} className="text-md">
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/login" className="text-md">
                <button>Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
