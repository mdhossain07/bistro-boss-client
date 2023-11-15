/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (user) {
    return children;
  }

  if (loading) {
    return <span className="loading loading-spinner text-info"></span>;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
