import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogle = () => {
    googleLogin().then((res) => {
      const userInfo = {
        email: res.user?.email,
        name: res.user.displayName,
      };
      axiosPublic.post("api/v1/create/user", userInfo).then((res) => {
        if (res.data.insertedId) {
          alert("user created successfully!");
          console.log(res.data);
        }
      });
      console.log(res.user);
      navigate("/");
    });
  };
  return (
    <div>
      <button onClick={handleGoogle} className="btn">
        Google
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
