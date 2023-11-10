import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Layout = () => {
  return (
    <>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <Navbar />
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
