// import { React, useState } from "react";
// import { useForm } from "react-hook-form";
// import Layout from "../components/Layout";
// import axios from "axios";
// import { useRouter } from "next/router";

// export default function signup() {

//   const router = useRouter()

//   const [state, setState] = useState({
//     username: "",
//     email: "",
//     password: ""
//   })

//   function handleChange(e) {
//     const copy = { ...state }
//     copy[e.target.name] = e.target.value
//     setState(copy)
//   }

//   async function handleSubmit() {
//     const res = await fetch('http://localhost:8080/api/auth/signup', {
//       method: "POST",
//       body: JSON.stringify(state),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//     if (res.ok) {
//       alert("user registered success")
//       router.push("/login")
//     }
//   }

//   return (
//     <Layout title="signup">
//       <form className="mx-auto w-4/5 py-16 md:py-32">
//         <div className="w-full flex items-center justify-center">
//           <div className="w-full h-fit m-auto grid grid-cols-1 lg:grid-cols-2 ">
//             <div className="flex flex-col items-center justify-center">
//               image should be here
//             </div>
//             <div className="text-left flex flex-col justify-center shadow-2xl p-10">
//               <h1 className="mb-4 text-xl">Create Account</h1>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   name="username"
//                   placeholder="username"
//                   value={state.username}
//                   onChange={handleChange}
//                   autoComplete="off"
//                   className="w-full"
//                 ></input>
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   name="email"
//                   placeholder="email"
//                   value={state.email}
//                   onChange={handleChange}
//                   autoComplete="off"
//                   className="w-full"
//                 ></input>
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="password"
//                   value={state.password}
//                   onChange={handleChange}
//                   className="w-full"
//                 ></input>
//               </div>

//               <div className="mb-4">
//                 <button className="primary-button" onClick={handleSubmit}>
//                   Create
//                 </button>
//               </div>
//               <div className="mb-4">
//                 Already have an account? &nbsp;
//                 <a
//                   className="my-4 text-[#687259]"
//                   href="/login"
//                   onClick={() =>
//                     setTimeout(() => {
//                       setOpen(!open);
//                     }, 100)
//                   }
//                 >
//                   Login
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </Layout>
//   );
// }
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const router = useRouter();

  // const {
  //   register,
  //   formState: { errors },
  // } = useForm();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState("");

  const checkValidation=(e)=>{
    if(document.getElementById(username).value < 3){
      setIsError("Username should have a minimum of 3 characters");
    }
  }

  function handleChange(e) {
    const copy = { ...state };
    copy[e.target.name] = e.target.value;
    setState(copy);
  }

  async function handleSubmit() {
    try{

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
        } catch (error){
          console.log(error);
          // alert("Something went wrong!");
          router.push("/error");
        }

  }

  return (
    <Layout title="signup">
      <div className="mx-auto w-4/5 py-16 md:py-32">
        <div style={{ position: "absolute", top: 100, marginLeft: 250}}>{isError}</div>
        <div className="w-full flex items-center justify-center">
          <h1>Sign Up</h1>
          <div>
            <input
              type="text"
              // {...register("username", {
              //   required: "please enter your username",
              //   minLength: {
              //     value: 3,
              //     message:
              //       "your username should have a minimum of 3 characters ",
              //   },
              // })}
              name="username"
              id="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              onChange = {(e) => checkValidation(e)}
              autoComplete="off"
            />
            {/* {errors.username && (
            <div className="text-red-500">{errors.username.message}</div>)} */}

            <input
              type="text"
              // {...register("text", {
              //   required: "Please enter your email",
              //   pattern: {
              //     value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
              //     message: "Please enter valid email",
              //   },
              // })}
              name="email"
              id="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              autoComplete="off"
            />
            {/* {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>)} */}

            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              // {...register("password", {
              //   required: "Please enter your password",
              //   minLength: {
              //     value: 6,
              //     message:
              //       "Your password should have a minimum of 6 characters ",
              //   },
              // })}
              value={state.password}
              onChange={handleChange}
            />
            {/* {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>)} */}

            <button className="primary-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
