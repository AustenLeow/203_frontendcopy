import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

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
        className="h-screen w-screen py-16 md:py-32"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex items-center justify-center">
          <div className="relative h-fit w-4/5 m-auto grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex flex-col items-center justify-center">
              image should be here
            </div>
            <div className="relative text-left flex flex-col justify-center">
              <h1 className="mb-4 text-xl">Login</h1>
              <div className="mb-4">
                <label htmlFor="username">Username</label>
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
                <label htmlFor="password">Password</label>
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
                <button className="primary-button">Login</button>
              </div>
              <div className="mb-4 ">
                don&apos;t have an account? &nbsp;
                <a className="my-4 text-[#687259]" href="/signup" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    sign up here 
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
