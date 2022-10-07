import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/layout";

export default function SignUp() {
  const router = useRouter();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const copy = { ...state };
    copy[e.target.name] = e.target.value;
    setState(copy);
  }

  async function handleSubmit() {
    try {
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
    } catch (error) {
      console.log(error);
      // alert("Something went wrong!");
      router.push("/error");
    }
  }

  return (
    <Layout title="signup">
      <div className="mx-auto w-4/5 py-16 md:py-32">
        <div className="w-full flex items-center justify-center">
          <h1>Sign Up</h1>
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
              type="text"
              name="email"
              placeholder="email"
              value={state.email}
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
