import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? " re:" + title : "re:"}</title>
        <meta name="description" content="climate change" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen flex flex-col justify-center bg-[#F5F5F5]">
        <Navbar />
        <main className="w-screen items-center justify-center">
          {children}{" "}
        </main>
        <Footer />
      </div>
    </>
  );
}
