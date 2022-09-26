import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";

export default function SignUp() {

  const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm();
    const submitHandler = ({ username, email, password, confirmpassword }) => {
      console.log(username, email, password, confirmpassword);
    };

  return (
    <Layout title="signup">
      <form className='mx-auto mx-w-screen-md'
      onSubmit={handleSubmit(submitHandler)}>
      <h1 className="mb-4 text-xl">Create Account</h1>
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
        <label htmlFor="email">Email</label>
        <input type="email"
        {...register('email', { required: 'Please enter your email',
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
        message: 'Please enter valid email',
      }
      })}
        className="w-full" 
        id="email" 
        autofocus
      ></input>
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
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

      <div className="mb-4">
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input 
        type="password"
        {...register("confirmpassword", {
          required: "Please enter your confirmed password",
          validate: 
            value => value === document.getElementById("password").value || 'Passwords do not match'
        })}
        className="w-full" 
        id="confirmpassword" 
        autofocus
      ></input>
      {errors.confirmpassword && (
                  <div className="text-red-500 ">{errors.confirmpassword.message}</div>
                )}
      </div>

      <div className="mb-4">
        <button className="primary-button">Create</button>
      </div>
      <div className="mb-4">
        Already have an account? &nbsp;
        <Link href="login">Login</Link>
      </div>
      </form>
      </Layout>
  );
}