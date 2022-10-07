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
import { useRouter } from "next/router"
import { useState } from "react"
import Layout from "../components/layout"

export default function SignUp() {
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
      router.push("/login")
    }
  }

  return (
    <Layout title="signup">
      <div className="mx-auto w-4/5 py-16 md:py-32">
        <div className="w-full flex items-center justify-center">
        <h1 >Sign Up</h1>
        <div>
          <input  type="text" name="username" placeholder="username" value={state.username} onChange={handleChange} autoComplete="off" />
          <input  type="text" name="email" placeholder="email" value={state.email} onChange={handleChange} autoComplete="off" />
          <input  type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} />
          <button className="primary-button" onClick={handleSubmit}>Submit</button>
        </div>
        </div>
      </div>
    </Layout>
  )
}