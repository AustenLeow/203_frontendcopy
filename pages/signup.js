import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import {useFormik} from "formik";
import { registerValidate } from "../lib/validate";
import {registerValidate} from "../lib/validate";

export default function signup() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ username, email, password, confirmpassword }) => {
    console.log(username, email, password, confirmpassword);
  };
  
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validate: registerValidate,
    onSubmit
  })

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <Layout title="signup">
      <form
        className="mx-auto w-4/5 py-16 md:py-32"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-full flex items-center justify-center">
          <div className="w-full h-fit m-auto grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex flex-col items-center justify-center">
              image should be here
            </div>
            <div className="text-left flex flex-col justify-center shadow-2xl p-10">
              <h1 className="mb-4 text-xl">Create Account</h1>
              <div className="mb-4 w-full input">
                <label htmlFor="username">Username</label>
                <input
                  type="username"
                  name="username"
                  placeholder="Username"
                  onChange={formik.handleChange}
                    value={formik.values.username}
                  />
              </div>

              <div className="mb-4 w-full input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={formik.handleChange}
                    value={formik.values.email}
                  />
              </div>

              <div className="mb-4 w-full input">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                    value={formik.values.password}
                />
                
              </div>

              <div className="mb-4 w-full input">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm password"
                  onChange={formik.handleChange}
                    value={formik.values.confirmpassword}
               />
              </div>

              <div className="mb-4">
                <button className="primary-button hover:bg-[#4E632E]">Create</button>
              </div>
              <div className="mb-4">
                Already have an account? &nbsp;
                <a
                  className="my-4 text-[#687259]"
                  href="/login"
                  onClick={() =>
                    setTimeout(() => {
                      setOpen(!open);
                    }, 100)
                  }
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
