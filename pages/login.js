import { React, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function login() {
  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors },
  // } = useForm();

  // const submitHandler = ({ username, password }) => {
  //   console.log(username, password);
  // axios.post('http://localhost:8080/api/auth/signin', {
  //   username: 'aus4',
  //   password: 'password'

  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  const router = useRouter();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const copy = { ...state };
    copy[e.target.name] = e.target.value;
    setState(copy);
  }

  async function handleSubmit() {
    const res = await fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const json = await res.json();
      localStorage.setItem("token", json.accessToken);
      router.push("/markeyplace");
    } else {
      alert("Bad credentials");
    }
  }

  return (
    <Layout title="login">
      <form className="mx-auto w-4/5 py-16 md:py-32">
        <div className="w-full flex items-center justify-center">
          <div className="w-full h-fit m-auto grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex flex-col items-center justify-center">
              image should be here
            </div>
            <div className="text-left flex flex-col justify-center shadow-2xl p-10">
              <h1 className="mb-4 login-text text-bold">Login</h1>
              <div className="mb-4">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={state.username}
                  onChange={handleChange}
                  autoComplete="off"
                  // {...register("username", {
                  //   required: "Please enter your username",
                  //   minLength: {
                  //     value: 3,
                  //     message:
                  //       "Your username should have a minimum of 3 characters ",
                  //   },
                  // })}
                  className="w-full"
                ></input>
                {/* {errors.username && (
                  <div className="text-red-500">{errors.username.message}</div>
                )} */}
              </div>
              <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={state.password}
                  onChange={handleChange}
                  // {...register("password", {
                  //   required: "Please enter your password",
                  //   minLength: {
                  //     value: 6,
                  //     message:
                  //       "Your password should have a minimum of 6 characters ",
                  //   },
                  // })}
                  className="w-full"
                ></input>
                {/* {errors.password && (
                  <div className="text-red-500 ">{errors.password.message}</div>
                )} */}
              </div>
              <div className="mb-4 ">
                <button
                  className="primary-button hover:bg-[#4E632E]"
                  onClick={handleSubmit}
                >
                  <a
                    className="my-4 text-[#FFFFFF]"
                    href="/marketplace"
                    onClick={() =>
                      setTimeout(() => {
                        setOpen(!open);
                      }, 100)
                    }
                  >
                    Login
                  </a>
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
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
