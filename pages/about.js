import React from "react";
import Layout from "../components/Layout";

export default function about() {
  return (
    <div>
    <Layout title="about">
      
        <div className="h-screen w-4/6 m-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center text-4xl font-bold">
            
            <div className="pb-10 text-[#707C4F]">helping our planet one byte at a time.</div>
            <div className="pb-10 text-[#A4B07E]">connecting customers to restaurants and stores that have surplus unsold food.</div>
            <div className="pb-6 text-[#4E632E]">reshaping our food and carbon landscape.</div>
          </div>
          <div className="font-light flex flex-col items-start justify-center ">
            <div className="pb-4">
              food wastage has been a major contributor to our climate.
            </div>

            <div className="pb-4">
              re: targets to help the climate by reducing food wastage.{" "}
            </div>
            <div className="pb-4">
              to achieve this goal, re: was invented to be the bridge between
              consumers and businesses.{" "}
            </div>
            <div className="pb-4">
              re: does this through its marketplace where customers can buy
              near-expired, good condition foods.{" "}
            </div>
          </div>
        </div>
        <div className="h-screen w-4/6 m-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="font-light flex flex-col items-start justify-center ">
        <div className="pb-10 flex flex-col items-end justify-center text-4xl font-bold text-[#4E632E]">
            our story
            </div>
            <div className="pb-4">
              food wastage has been a major contributor to our climate.
            </div>

            <div className="pb-4">
              re: targets to help the climate by reducing food wastage.{" "}
            </div>
            <div className="pb-4">
              to achieve this goal, re: was invented to be the bridge between
              consumers and businesses.{" "}
            </div>
            <div className="pb-4">
              re: does this through its marketplace where customers can buy
              near-expired, good condition foods.{" "}
            </div>
          </div>
          
            <div className="flex items-center justify-center">
              *add image 
            </div>
         
        </div>
  
    </Layout>
    </div>
  );
}
