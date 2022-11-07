import React from "react";
import Layout from "../components/Layout";

export default function about() {
  return (
    <div>
      <Layout title="about">
        <div className="h-screen w-4/6 m-auto grid grid-cols-1 lg:grid-cols-2 place-items-center">
          <div className="flex flex-col items-center justify-center text-4xl font-bold">
            <div className="pb-10 text-[#707C4F]">
              helping our planet one byte at a time.
            </div>
            <div className="pb-10 text-[#A4B07E]">
              providing users with carbon and monetary statistics.
            </div>
            <div className="pb-6 text-[#4E632E]">
              reshaping our food and carbon landscape.
            </div>
          </div>
          <img alt="/" src="/about.png" width="340px" height="400px" />
        </div>

        <div className="flex flex-col items-center justify-center text-center ">
          <div className="pb-4">
            <strong className="text-[#4E622E] underline">food wastage</strong>{" "}
            has been a major contributor to our{" "}
            <strong className="text-[#4E622E] underline">climate.</strong>
          </div>

          <div className="pb-4">
            GreenFoodForYou targets to help the climate by reducing food
            wastage.{" "}
          </div>
          <div className="pb-4">
            to achieve this goal, GreenFoodForYou was invented to be the
            bridge between consumers and businesses.{" "}
          </div>
          <div className="pb-4">
            GreenFoodForYou does this through its marketplace where
            customers can buy near-expired, good condition foods at a
            significantly cheaper price.{" "}
          </div>
          <div className="pb-4">
            GreenFoodForYou also provides statistics such as{" "}
            <strong className="text-[#4E622E] underline">
              carbon savings{" "}
            </strong>
            and{" "}
            <strong className="text-[#4E622E] underline">
              monetary savings{" "}
            </strong>
            for{" "}
            <strong className="text-[#4E622E] underline">
              each user, each product and each order.{" "}
            </strong>
          </div>
        </div>
      </Layout>
    </div>
  );
}
