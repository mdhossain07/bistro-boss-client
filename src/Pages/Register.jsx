import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser } = useAuth();
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((res) => {
        axiosPublic.post("/api/v1/create/user", data).then((res) => {
          Swal.fire({
            title: "Good job!",
            text: "User created successfully!",
            icon: "success",
          });
          console.log(res.data);
          reset();
          navigate("/");
        });
        console.log(res.user);
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
            <h1 className="text-5xl font-bold">Register Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true, maxLength: 20 })}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
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
                  name="password"
                />
              </div>

              <SocialLogin />

              <div>
                <p className="text-sm">
                  Already have an account? Please
                  <Link className="text-red-500 font-semibold ml-1" to="/login">
                    Login
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
