import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export const axiosSecure = axios.create({
  baseURL: "http://localhost:5001",
});

const useAxios = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      // console.log("request stopped by interceptors", token);
      config.headers.authorization = `bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const status = error.response.status;
      // console.log("Status error in the interceptor", status);
      if (status === 401 || status === 403) {
        logOut().then(() => {
          navigate("/login");
        });
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxios;
