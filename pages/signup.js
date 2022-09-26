import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";

export default function signup() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ username, password }) => {
    console.log(username, password);
  };
  return (
    <Layout title="sign up">
      <form
        className="h-screen w-screen py-16 md:py-32"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex items-center justify-center">
          <div className="relative h-fit w-4/5 m-auto grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex flex-col items-center justify-center">
              image should be here
            </div>
            <div className="relative text-left flex flex-col justify-center shadow-2xl p-10">
              <h1 className="mb-4 text-xl">sign up</h1>
              <div className="mb-4">
                <label htmlFor="username">username</label>
                <input
                  type="username"
                  {...register("username", {
                    required: "please enter your username",
                    minLength: {
                      value: 3,
                      message:
                        "your username should have a minimum of 3 characters ",
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
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "please enter your password",
                    minLength: {
                      value: 6,
                      message:
                        "your password should have a minimum of 6 characters ",
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
                {/* <button className="primary-button">Login</button> */}
                <a
                  href="/marketplace"
                  className="relative inline-flex items-center justify-center py-1 px-8 overflow-hidden font-medium text-[#4E632E] transition duration-300 ease-out border-2 border-[#4E632E] rounded-full shadow-md group"
                >
                  {" "}
                  sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
