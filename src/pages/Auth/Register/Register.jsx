import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    console.log(createUser);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-center text-3xl">Register</h1>
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
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p className="text-center text-sm text-base-content/70 mt-3">
          Already a user?{" "}
          <Link to="/login" className="link link-primary font-semibold">
            Login
          </Link>
        </p>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
