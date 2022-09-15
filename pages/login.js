import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";

export default function login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };
  return (
    <Layout title="login">
      <form
        className="mx-auto w-3/5 py-16 md:py-32"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="w-full flex items-center justify-center">
          <div className="relative w-full h-fit m-auto grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex flex-col items-center justify-center">
              image should be here
            </div>
            <div className="relative text-left flex flex-col justify-center">
              <h1 className="mb-4 text-xl">login</h1>
              <div className="mb-4">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "please enter your email",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: "please enter a valid email",
                    },
                  })}
                  className="w-full"
                  id="email"
                  autoFocus
                ></input>
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
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
                <button className="primary-button">login</button>
              </div>
              <div className="mb-4 ">
                don&apos;t have an account? &nbsp;
                <a className="my-4 text-[#687259]" href="/signup" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    sign up here!
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
