import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/Layout.js";
import { useEffect } from "react";

export default function SignIn() {
  const router = useRouter();
  // useEffect(() => {
  //   getItems();
  // }, []);

  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const [state1, setState1] = useState({});

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const copy = { ...state };
    copy[e.target.name] = e.target.value;
    setState(copy);
  }

  async function getItems() {
    // e.preventDefault();
    fetch("http://18.138.254.41:8080/api/v1/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((product) => {
        setState1(product);
        console.log(state1);
        localStorage.setItem("items", JSON.stringify(state1));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function handleSubmit() {
    const res = await fetch("http://18.138.254.41:8080/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const json = await res.json();
      localStorage.setItem("token", json.accessToken);
      getItems();
      router.push("/marketplace");
    } else {
      alert("Username or password is incorrect");
    }
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

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  return (
    <Layout>
      <div className="mx-auto w-4/5 py-16 md:py-32">
        <div className="w-full flex items-center justify-center">
          <div className="w-full h-fit m-auto grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex flex-col items-center justify-center">
              <img
                alt=" "
                src="/login.png"
                height={300}
                width={300}
                className="ml-3"
              />
            </div>
            <div className="text-left flex flex-col justify-center shadow-2xl p-10">
              <h1 className="header-text">Log In</h1>
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
              </div>
              <div className="px-3">
                <button className="button" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
              <div className="mb-4 p-3">
                Don&apos;t have an account? &nbsp;
                <a className="my-4 text-[#687259]" href="/signup">
                  Sign up here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
