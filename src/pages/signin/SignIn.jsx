import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, loginWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    setLoading(true);
    setLoginError("");
    signIn(data?.email, data?.password)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setLoginError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    return loginWithGoogle()
      .then((result) => {
        // const user = result.user;
        navigate("/");
        toast.success("User Loggedin  Successfully!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-3 md:px-0">
      <div className="w-full md:w-96 my-3 md:my-10 border rounded bg-slate-50 px-3 md:px-10 p-5">
        <h2 className="text-2xl text-center text-gray-900 my-4 font-bold border-b pb-2">
          Please Login
        </h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          {/* email */}
          <div className="form-control my-2 w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              {...register("email", { required: "Email Address is required" })}
              className="border rounded px-3 p-1 w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          {/* password */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              placeholder="* * * * *"
              className="border rounded px-3 p-1 w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn w-full"
            value={loading ? "Loading..." : "Login"}
            type="submit"
          />
          <div className="text-red-600 mb-6 font-bold">
            {loginError && <p>{loginError}</p>}
          </div>
        </form>
        <p className="text-[14px]">
          You don't have account.
          <Link to="/sign-up" className="text-secondary ml-2">
            Sign-up
          </Link>
        </p>
        <p className="text-center py-4">OR</p>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
