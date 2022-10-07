import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/layout";

export default function SignIn() {
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
    try {
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
        router.push("/marketplace");
      } else {
        alert("Wrong username or password");
      }
    } catch (error) {
      console.log(error);
      // alert("Not connected to database!");
      router.push("/error");
    }
  }

  return (
    <Layout title="login">
      <div className="mx-auto w-4/5 py-16 md:py-32">
        <div className="w-full flex items-center justify-center">
          <h1>Sign In</h1>
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
    </Layout>
  );
}
