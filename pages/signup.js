import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/layout";
import Image from "next/image";

export default function SignUp() {
  const router = useRouter();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    const copy = { ...state };
    copy[e.target.name] = e.target.value;
    setState(copy);
    validateInput(e);
  }

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter a username.";
          }
          break;

        case "email":
          if (!value) {
            stateObj[name] = "Please enter an email.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter a password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password do not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  async function handleSubmit() {
    const res = await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      alert("user registered success");
      router.push("/login");
    }
  }

  return (
    <Layout title="signup">
      <div className="mx-auto w-4/5 py-16 md:py-32">
        <div className="w-full flex items-center justify-center">
          <div className="w-full h-fit m-auto grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex flex-col items-center justify-center">
              <img
                alt=" "
                src="/signup.png"
                height={250}
                width={300}
                className="ml-3"
              />
            </div>
            <div className="text-left flex flex-col justify-center shadow-2xl p-10">
              <h1 className="header-text">Sign Up</h1>

              <div className="p-4">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={state.username}
                  onChange={handleChange}
                  autoComplete="off"
                  onBlur={validateInput}
                  className="input"
                />
                {error.username && (
                  <span className="err">{error.username}</span>
                )}
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  value={state.email}
                  onChange={handleChange}
                  autoComplete="off"
                  onBlur={validateInput}
                  className="input"
                />
                {error.email && <span className="err">{error.email}</span>}
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={state.password}
                  onChange={handleChange}
                  onBlur={validateInput}
                  className="input"
                />
                {error.password && (
                  <span className="err">{error.password}</span>
                )}
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter Confirmed Password"
                  value={state.confirmPassword}
                  onChange={handleChange}
                  onBlur={validateInput}
                  className="input"
                />
                {error.confirmPassword && (
                  <span className="err">{error.confirmPassword}</span>
                )}
              </div>
              <div className="px-3">
                <button className="primary-button" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
