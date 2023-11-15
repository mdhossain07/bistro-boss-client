import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
