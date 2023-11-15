import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer  lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-green-400 text-lg font-medium">
            {/* Sidebar content here */}
            <div className="flex items-center gap-3 p-3">
              <FaShoppingCart />
              <Link to="/dashboard/cart">My Cart</Link>
            </div>
            <li>
              <a>Payment History</a>
            </li>
            <li>
              <a>Add Review</a>
            </li>
            <li>
              <a>My Bookings</a>
            </li>
            <div className="mt-10 p-3">
              <Link to="/" className="btn btn-neutral">
                Go to Home
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
