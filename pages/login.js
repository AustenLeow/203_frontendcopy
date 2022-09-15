import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { useForm } from "react-hook-form";

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
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="p-10 bg-[#F5F5F5]">
          <h1 className="mb-7 text-xl">Login</h1>
          <div className="w-mb-9">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              {...register("username", {
                required: "Please enter username",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message:
                    "Please enter valid username with 1 capital letter, 1 lower letter",
                },
              })}
              id="username"
              name="username"
              className="w-full mb-5"
              autoFocus
            ></input>
            {errors.username && (
              <div className="text-red-500">{errors.username.message}</div>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="w-full"
              id="password"
              autoFocus
            ></input>
          </div>
          <div className="mb-4">
            <button className="bg-blue-500 text-white w-full rounded py-2">
              Login
            </button>
          </div>
          <div className="mb-4">
            Don&apos;t have an account? &nbsp;
            <Link href="/signup">Sign up </Link>
          </div>
        </div>
      </form>
    </Layout>
  );
}
