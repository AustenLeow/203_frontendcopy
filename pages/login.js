import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/layout";
import { useEffect, useCallback } from "react";

export default function SignIn() {
  const router = useRouter();
  useEffect(() => {
    getItems2();
  }, []);

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

  async function getItems(e) {
    // e.preventDefault();
    fetch("http://localhost:8080/api/v1/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((product) => {
        setState1(product);
        // console.log(state1);
        localStorage.setItem("items", JSON.stringify(state1));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getItems2(e) {
    // e.preventDefault();
    fetch("http://localhost:8080/api/v1/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((product) => {
        setState1(product);
        // console.log(state1);
        localStorage.setItem("items", JSON.stringify(state1));
      })
      .catch((err) => {
        console.log(err);
      });
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
      getItems();
      router.push("/marketplace");
    } else {
      alert("Bad credentials");
    }
  }

  return (
    <Layout>
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
              <h1 className="mb-4 text-xl">Create Account</h1>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={state.username}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={state.password}
                  onChange={handleChange}
                />
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
