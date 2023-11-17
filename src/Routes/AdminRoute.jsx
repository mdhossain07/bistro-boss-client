/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <span className="loading loading-spinner text-info"></span>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default AdminRoute;
