import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useAuth } from "../../../hooks/useAuth";

const Login = () => {
  const { signInUser, user } = useAuth();
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setAuthError("");
    const { email, password } = data;
    signInUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => setAuthError(error?.message || "Login failed"));
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-center text-3xl">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" ? (
              <span className="text-red-500">This field is required</span>
            ) : errors.password?.type === "minLength" ? (
              <span className="text-red-500">
                Password must be at least 6 characters
              </span>
            ) : null}
            {authError && (
              <span className="text-red-500 text-sm">{authError}</span>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <SocialLogin />
        <p className="text-center text-sm text-base-content/70 mt-3">
          New user?{" "}
          <Link to="/register" className="link link-primary font-semibold">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
