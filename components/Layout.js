
import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "./Navbar";
import NavbarLoggedIn from "./NavbarLoggedIn";
import { useState, useEffect } from "react";

export default function Layout({ title, children }) {
  const [auth, setAuth] = useState({ loggedIn: false });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
    console.log("Logged in");
  });

  return (
    <>
      <Head>
        <title>{title ? title : "greenfoodforyou"}</title>
        <meta name="description" content="climate change" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative w-screen flex flex-col justify-center bg-[#F5F5F5]">
        {/* <Navbar className="absolute" /> */}
        {auth ? <NavbarLoggedIn /> : <Navbar/>}
        <main className="w-screen items-center justify-center">
          {children}{" "}
        </main>
        <Footer />
      </div>
    </>
  );
}
