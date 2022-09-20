import Link from "next/link";
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
    <Layout title="Sign Up">
      <form
        className="mx-auto w-3/5"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex items-center justify-center w-full">
          <div className="flex w-full min-h-full">

            {/* insert img section */}
            <div className="w-1/2 p-5 text-center">
              (insert image)
            </div>

            {/* create acc section */}
            <div className="w-1/2 p-5">
              {/* create acc text */}
              <h2 className='text-2xl font-bold mb-2'>
                Create Account
              </h2>

              {/* border */}
              <div className='border-2 w-10 border-gray-400 inline-block mb-10'>
              </div>

              {/* credential field section */}
              <div className='flex flex-col'>
                {/* username field */}
                <div>Username</div>
                <div className='bg-gray-200 w-80 flex items-center mb-2'>
                  <input type="text" {...register("username", {
                    required: "please enter your username",
                    minLength: {
                    value: 3,
                    message:
                      "your username should have a minimum of 3 characters ",
                    },
                    })} className='w-full' id='username' autoFocus>
                  </input>
                  {errors.username && (
                  <div className="text-red-500">{errors.username.message}</div>
                  )}
                </div>

                {/* email field */}
                <div>Email</div>
                <div className='bg-gray-200 w-80 flex items-center mb-2'>
                  <input type="email" name="email" className='bg-gray-200 outline-none text-sm w-80' />
                </div>

                {/* password field */}
                <div>Password</div>
                <div className='bg-gray-200 w-80 flex items-center mb-2'>
                  <input type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className='bg-gray-200 outline-none text-sm w-80' />
                </div>

                {/* confirm password field */}
                <div>Confirm Password</div>
                <div className='bg-gray-200 w-80 flex items-center mb-5'>
                  <input type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className='bg-gray-200 outline-none text-sm w-80' />
                </div>
              </div>

              {/* 'create' button */}
              <a href='/marketplace' className='bg-[#A4B07E] rounded-xl px-5 py-2 inline-block font-semibold text-white mb-10'>
                  Create
              </a>

              {/* path to login if have existing account */}
              <div>
                Already have an account?
                <a href='/login' className='text-[#A4B07E] p-3'>
                  Log in
                </a>
              </div>
            </div>

          </div>
        </div>
      </form>
    </Layout>
  );
}
