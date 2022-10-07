import React from "react";
import Layout from "../components/layout";

export default function error() {
  return (
    <Layout>
      <div className="m-auto  h-screen flex justify-center items-center">
        {" "}
        <h1 className="login-text m-auto text-center">
          Something went wrong!
        </h1>
      </div>
    </Layout>
  );
}
