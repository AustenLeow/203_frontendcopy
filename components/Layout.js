import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " |  re_" : "re_"}</title>
        <meta name="description" content="climate change" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className="w-screen flex flex-col justify-center bg-[#EFEDEE]">
        <main className="w-screen bg-[#EFEDEE] items-center justify-center">
          {children}{" "}
        </main>
        <footer className="flex h-[320px] justify-center items-center shadow-inner bg-[#EFEDE7]">
          footer
        </footer>
      </div>
    </>
  );
}
