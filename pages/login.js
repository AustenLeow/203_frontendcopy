import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';


export default function login() {
  return (
    <Layout title="login">
      <form
        className="mx-auto max-w-screen-md"
      >
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="w-mb-4">
          <label htmlFor="email">Email</label> 
          <input type="email" className="w-full" id="email" autoFocus>
          </input>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input type="password" className="w-full" id="password" autoFocus></input>
          </div>
          <div className="mb-4">
            <button className="bg-blue-500 text-white w-full rounded py-2">Login</button>
          </div>
          <div className="mb-4">
            Don&apos;t have an account? &nbsp; 
            <Link href="/signup">Sign up </Link>
          </div>
        </div>
      </form>
    </Layout>
  )
}
