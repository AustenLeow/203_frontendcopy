import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ?  title : "greenfoodforyou"}</title>
        <meta name="description" content="climate change" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative w-screen flex flex-col justify-center bg-[#F5F5F5]">
        <Navbar className="absolute"/>
        <main className="w-screen items-center justify-center">
          {children}{" "}
        </main>
        <Footer />
      </div>
    </>
  );
}
