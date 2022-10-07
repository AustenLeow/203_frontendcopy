import {React,  useState} from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import axios from "axios";
import { useRouter } from "next/router"

export default function signup() {
  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors },
  // } = useForm();

  // const submitHandler = ({ username, email, password, confirmpassword }) => {
  //   // console.log(username, email, password, confirmpassword);
  //   axios.post('http://localhost:8080/api/auth/signup', {
  //     username: document.getElementById("username").value,
  //     email: document.getElementById("email").value,
  //     password: document.getElementById("password").value

  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // };

  const router = useRouter()

  const [state, setState] = useState({
    username: "",
    email: "",
    password: ""
  })

  function handleChange(e) {
    const copy = { ...state }
    copy[e.target.name] = e.target.value
    setState(copy)
  }

  async function handleSubmit() {
    const res = await fetch('http://localhost:8080/api/auth/signup', {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (res.ok) {
      alert("user registered success")
      router.push("/signin")
    }
  }

  return (
    <Layout title="signup">
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
              <h1 className="mb-4 text-xl">Create Account</h1>
              <div className="mb-4">
                <label htmlFor="username">Username</label>
                <input
                  type="username"
                  {...register("username", {
                    required: "Please enter your username",
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
                <input
                  type="email"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: "Please enter valid email",
                    },
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
                    validate: (value) =>
                      value === document.getElementById("password").value ||
                      "Passwords do not match",
                  })}
                  className="w-full"
                  id="confirmpassword"
                  autofocus
                ></input>
                {errors.confirmpassword && (
                  <div className="text-red-500 ">
                    {errors.confirmpassword.message}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <button className="primary-button hover:bg-">
                <a
                  className="my-4 text-[#FFFFFF]"
                  href="/login"
                  onClick={() =>
                    setTimeout(() => {
                      setOpen(!open);
                    }, 100)
                  }
                >Create

                </a>
                </button>
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