import Layout from "../components/Layout";
import Typical from "react-typical";
import { IoEarthSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Home() {
  const [auth, setAuth] = useState({ loggedIn: false });
  const [userCount, setUserCount] = useState(0);
  const [carbonCount, setCarbonCount] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
    console.log("Logged in");
    fetchUserCount();
    fetchCarbonCount();
  });

  function fetchCarbonCount() {
    fetch("http://localhost:8080/api/v1/ordertotalcarbon", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((carbon) => {
        setCarbonCount(carbon);
        console.log(carbon);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function fetchUserCount() {
    const res = await fetch("http://localhost:8080/api/v1/totalusers", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (res.ok) {
      const text = await res.text();
      setUserCount(text);
    }
  }

  return (
    <div>
      <div className="w-screen flex items-center justify-center">
        <video
          className="w-screen brightness-50"
          src={require("../public/homepage-b-roll.mp4")}
          type="video/mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute w-3/5 m-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="text-4xl sm:text-8xl text-white">
            <strong> green:</strong>
            <strong className="px-5 text-[#BFDB9C]">
              <Typical
                steps={[
                  "price",
                  1000,
                  "food",
                  1000,
                  "produce",
                  1000,
                  "purpose",
                  1000,
                  "planet",
                  1000,
                  "people",
                ]}
                wrapper="p"
                loop={Infinity}
              />
            </strong>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white flex flex-col items-end justify-center">
            <div className="mb-2 items-end text-end">
              helping our climate one byte at a time.
            </div>
            {auth ? (
              ""
            ) : (
              <div className="flex items-center ">
                <a
                  href="/login"
                  className="relative inline-flex items-center justify-center py-1 px-8 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                    <IoEarthSharp />
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                    login
                  </span>
                  <span className="relative invisible">login</span>
                </a>
                <div className="p-4"></div>
                <a
                  href="/signup"
                  className="relative inline-flex items-center justify-center py-1 px-10 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                    <IoEarthSharp />
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                    sign up
                  </span>
                  <span className="relative invisible">sign up</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Layout title="">
        <div className="h-screen w-3/5 m-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center text-6xl font-bold text-[#4E632E]">
            what we do
          </div>
          <div className="flex flex-col items-center justify-center">
            features in list
          </div>
        </div>
        <div className="h-screen w-3/5 m-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center text-6xl font-bold text-[#4E632E]">
            why we do it
          </div>
          <div className="flex flex-col items-center justify-center">
            Our mission? To make sure good food gets eaten, not wasted. Every
            day, delicious, fresh food goes to waste at cafés, restaurants,
            hotels, shops and manufacturers - just because it hasn’t sold in
            time. greenfoodforyou lets customers buy and collect Surprise Bags
            of food - at a great price - directly from businesses
          </div>
        </div>
        <div className="h-screen w-4/5 m-auto">
          <div class="grid grid-cols-3 gap-8 place-items-center p-5">
            <div className="statistics">
              <span className="static justify-center">{userCount}</span>
              <img
                alt=" "
                src="/totalusers.png"
                height={300}
                width={300}
                className="ml-3 p-4"
              />
            </div>
            <div className="statistics">
              <span className="static justify-center">{carbonCount}</span>
              <img
                alt=" "
                src="/totalcarbon.png"
                height={300}
                width={300}
                className="ml-3 p-4"
              />
            </div>
            <div className="statistics">
              <span className="static justify-center">{userCount}</span>
              <img
                alt=" "
                src="/totalusers.png"
                height={300}
                width={300}
                className="ml-3 p-4"
              />
            </div>
          </div>
        </div>
        <div className="h-screen w-3/5 m-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center text-6xl font-bold text-[#4E632E]">
            how does it work
          </div>
          <div className="flex flex-col items-center justify-center">cycle</div>
        </div>
      </Layout>
    </div>
  );
}
