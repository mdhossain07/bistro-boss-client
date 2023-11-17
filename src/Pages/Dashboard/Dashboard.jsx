import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
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

            {isAdmin ? (
              <>
                {/* Admin NavItems */}
                <li>
                  <Link>Admin Home</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-items">Add Items</Link>
                </li>
                <li>
                  <Link>Manage Items</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-users">All Users</Link>
                </li>
              </>
            ) : (
              <>
                {/* Users NavItems */}
                <li>
                  <Link>User Home</Link>
                </li>
                <li>
                  <Link>Payment History</Link>
                </li>
                <li>
                  <Link>Add Review</Link>
                </li>
                <div className="flex items-center gap-3 p-3">
                  <FaShoppingCart />
                  <Link to="/dashboard/cart">My Cart</Link>
                </div>
              </>
            )}

            <div className="divider"></div>

            {/* Shared Navitems */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/our-shop/:category">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
