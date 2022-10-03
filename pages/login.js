import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import Link from "next/link";

export default function login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ username, password }) => {
    console.log(username, password);

    axios
      .post("http://localhost:8080/api/auth/signin", {
        username: "username",
        password: "password",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  async function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  }

  async function handleGitHubSignIn() {
    signIn("github", { callbackUrl: "http://localhost:3000/" });
  }

  return (
    <Layout title="login">
      <div
        className="mx-auto w-4/5 py-16 md:py-32"
      >
        <div className="w-full flex items-center justify-center">
          <div className="w-full h-fit m-auto grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex flex-col items-center justify-center">
              image should be here
            </div>
            <div className="text-left flex flex-col justify-center shadow-2xl p-10">
              {/* <h1 className="mb-4 login-text">Login</h1>
              <div className="mb-4">
                <label htmlFor="username">Username</label>
                <input
                  type="username" placeholder="Email" onChange={formik.handleChange} value={formik.values.username}
                  {...register("username", {
                    required: "Please enter your username",
                    minLength: {
                      value: 3,
                      message:
                      
                        "Your username is incorrect ",
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
                  type="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password}
                  {...register("password", {
                    required: "Please enter your password",
                    minLength: {
                      value: 6,
                      message:
                        "Your password is incorrect",
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
              <div>
              <button className="primary-button hover:bg-[#4E632E]">
                  Login
                </button>
              </div>
              <div className="mb-4 ">
                Don&apos;t have an account? &nbsp;
                <a
                  className="my-4 text-[#687259]"
                  href="/signup"
                  onClick={() =>
                    setTimeout(() => {
                      setOpen(!open);
                    }, 100)
                  }
                >
                  Sign up here
                </a>
              </div>
              <div className="mb-4 ">
                <button onClick={handleGoogleSignIn} className="primary-button hover:bg-[#4E632E]">
                  Google 
                </button>
              </div>
              <div className="mb-4 ">
                <button onClick={handleGitHubSignIn} className="primary-button hover:bg-[#4E632E]">
                  GitHub 
                </button>
              </div> */}
              <div className="text-2xl py-4 font-bold">Login</div>
              <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                <div className="w-full input">
                  <input
                    type="username"
                    name="username"
                    placeholder="Username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                </div>
                <div className="w-full input">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full primary-button hover:bg-[#4E632E]"
                  >
                    Login
                  </button>
                </div>
                <div>
                  <button className="w-full p-2 rounded border-2" onClick={handleGoogleSignIn} type="submit">
                    {" "}
                    Sign in with Google{" "}
                  </button>
                </div>
                <div>
                  <button className="w-full p-2 rounded border-2" onClick={handleGitHubSignIn} type="submit">
                    {" "}
                    Sign in with GitHub{" "}
                  </button>
                </div>
              </form>
              <p className="text-center text-grey-400">
                {" "}
                Don't have an account?
                <Link href={"/signup"}>
                  <a className="text-green>"></a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
