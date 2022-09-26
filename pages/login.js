import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";

export default function login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ username, password }) => {
    console.log(username, password);
  };
  return (
    <Layout title="login">
      <form
        className="mx-auto w-4/5 py-16 md:py-32"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="w-full flex items-center justify-center">
          <div className="w-full h-fit m-auto grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex flex-col items-center justify-center">
              image should be here
            </div>
            <div className="text-left flex flex-col justify-center shadow-2xl p-10">
              <h1 className="mb-4 text-xl">Login</h1>
              <div className="mb-4">
                <label htmlFor="username">Username</label>
                <input
                  type="username"
                  {...register("username", {
                    required: "Please enter your username",
                    minLength: {
                      value: 3,
                      message:
                        "Your username should have a minimum of 3 characters ",
                    },
                  })}
                  className="w-full"
                  id="username"
                  autoFocus
                ></input>
                {errors.username && (
                  <div className="text-red-500">{errors.username.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Please enter your password",
                    minLength: {
                      value: 6,
                      message:
                        "Your password should have a minimum of 6 characters ",
                    },
                  })}
                  className="w-full"
                  id="password"
                  autoFocus
                ></input>
                {errors.password && (
                  <div className="text-red-500 ">{errors.password.message}</div>
                )}
              </div>
              <div className="mb-4 ">
                <button className="primary-button hover:bg-[#4E632E]">Login</button>
              </div>
              <div className="mb-4 ">
                Don&apos;t have an account? &nbsp;
                <a className="my-4 text-[#687259]" href="/signup" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Sign up here
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}