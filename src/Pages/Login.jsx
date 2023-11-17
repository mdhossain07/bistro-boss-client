import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import SocialLogin from "../Components/SocialLogin";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate("/");

  const onSubmit = (data) => {
    // console.log(data);

    login(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        alert("user logged In !");
        reset();
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>

              <SocialLogin />
              <div>
                <p className="text-sm">
                  New to this website? Please
                  <Link
                    className="text-red-500 font-semibold ml-1"
                    to="/register"
                  >
                    Register
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
