import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser, signUpWithGoogle } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();
  const base_url =
    import.meta.env.REACT_APP_BASE_URL || "http://localhost:5000/api/v1";

  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };

        updateUser(userInfo)
          .then(() => {
            navigate("/");
            saveUser(data.name, data.email, data.role);
            toast.success("User Created Successfully");
          })
          .catch((err) => console.error(err));
      })

      .catch((err) => {
        console.error(err);
        setSignUpError(err.message);
      });
  };

  const handleGoogleSignUp = () => {
    return signUpWithGoogle()
      .then((result) => {
        navigate("/");
        const user = result.user;
        console.log(user);
        toast.success("User  Successfully Created");
      })
      .catch((err) => console.error(err));
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch(`${base_url}/add-user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full mx-3 md:w-96 px-3 md:px-10 pb-5 border rounded bg-slate-100">
        <h2 className="text-2xl text-center text-gray-900 my-4 font-bold border-b pb-2">
          Please Signup
        </h2>
        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          <div className="w-full max-w-xs">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="username"
              className="border rounded px-3 p-1 w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600"> {errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="example@gmail.com"
              className="border rounded px-3 p-1 w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600"> {errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character",
                },
              })}
              type="password"
              placeholder="* * * * *"
              className="border rounded px-3 p-1 w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600"> {errors.password.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent my-4 w-full"
            value="signup"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="text-[14px] mt-4">
          Already have a account?
          <Link to="/sign-in" className="text-secondary">
            Sign-in
          </Link>
        </p>
        <p className="text-center py-3">OR</p>
        <button onClick={handleGoogleSignUp} className="btn btn-primary w-full">
          Signup With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
