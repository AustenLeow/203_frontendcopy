import Layout from "../components/Layout";
// import Typical from "react-typical";
import { IoEarthSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import Image from "next/image";
import totalusers from ".././public/totalusers.png";
import totalcarbon from ".././public/totalcarbon.png";
import moneysaved from ".././public/moneysaved.png";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [auth, setAuth] = useState({ loggedIn: false });
  const [userCount, setUserCount] = useState(0);
  const [carbonCount, setCarbonCount] = useState(0);
  const [totalAmountSaved, setTotalAmountSaved] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
    fetchUserCount();
    fetchCarbonCount();
    getTotalAmountSaved();
  }, []);

  function fetchCarbonCount() {
    fetch("https://greenfoodforyou.com:8080/api/v1/ordertotalcarbon", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((carbon) => {
        setCarbonCount(carbon);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTotalAmountSaved() {
    fetch("https://greenfoodforyou.com:8080/api/v1/ordertotalsaved", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => response.json())
    .then((amount) => {
      setTotalAmountSaved(amount);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  async function fetchUserCount() {
    const res = await fetch("https://greenfoodforyou.com:8080/api/v1/totalusers", {
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
        <div className="absolute w-3/5 m-auto grid grid-cols-1 lg:grid-cols-2 p-3">
          <div className="text-4xl sm:text-6xl text-white">
            <strong> green food for</strong>
            <strong className="px-5 text-[#BFDB9C]">
              <Typewriter
                options={{
                  strings: [" you 🤩", "our planet 🌏", "our future ✨"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </strong>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white flex flex-col items-end justify-start p-3">
            <div className="mb-2 items-end text-end">
              helping our climate one byte at a time.
            </div>
            {auth ? (
              ""
            ) : (
              <div className="flex items-center ">
                <Link
                  href="/login"
                  className="relative inline-flex items-center justify-center py-1 px-8 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group"
                >
                  <button className="home-button">login</button>
                </Link>
                <div className="p-4"></div>
                <Link
                  href="/signup"
                  className="relative inline-flex items-center justify-center py-1 px-10 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group"
                >
                  <button className="home-button">signup</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Layout title="">
        <div className="h-max p-32 m-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center text-6xl font-bold text-[#4E632E]">
            what we do
          </div>
          <div className="flex flex-col items-start justify-center">
            <h1 class="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-600 md:text-xl lg:text-2xl">
              Reduce food wastage. Help our planet.
            </h1>
            <p class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 text-left">
              Here at GoodFoodForYou, we believe that{" "}
              <strong className="text-[#4E622E]">food wastage </strong> is a
              <strong className="text-[#4E622E]">
                {" "}
                major contributor to our climate{" "}
              </strong>
              . We aim to reduce food wastage by{" "}
              <strong className="text-[#4E622E]">
                selling near-expired foods at a significantly lower price{" "}
              </strong>
              . We also aim to help our users navigate their{" "}
              <strong className="text-[#4E622E]">
                {" "}
                carbon and monetary savings
              </strong>
              .
            </p>
            <a href="/about" class="button whitespace-nowrap">
              Learn more about us{" "}
              <span>
                <svg
                  class="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="h-max p-20 w-4/5 m-auto">
          <div class="grid grid-cols-3 gap-8 place-items-center p-5">
            <div className="">
              <span className="statistics static justify-center">
                {userCount}
              </span>
              <p className="text-center font-light text-gray-500 pb-1">
                {" "}
                users reducing food wastage{" "}
              </p>
              <img
                alt="/"
                className="rounded-[15px]"
                src="/totalusers.png"
                width="240px"
                height="300px"
              />
            </div>
            <div className="">
              <div className="statistics static justify-center whitespace-nowrap">
                <div>
                  {carbonCount}
                  cm<span id="super">3</span>
                </div>
              </div>
              <p className="text-center font-light text-gray-500">
                {" "}
                carbon saved{" "}
              </p>
              <img
                alt="/"
                className="rounded-[15px]"
                src="/totalcarbon.png"
                width="240px"
                height="300px"
              />
            </div>
            <div>
              <div className="statistics static justify-center whitespace-nowrap">
                <div>
                  <var>$</var>
                  {totalAmountSaved}
                </div>
              </div>
              <p className="text-center font-light text-gray-500"> saved </p>
              <img
                alt=""
                className="rounded-[15px]"
                src="/moneysaved.png"
                width="240px"
                height="300px"
              />
            </div>
          </div>
        </div>

        <div className="h-max p-32 m-auto grid grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col items-start justify-center text-6xl font-bold text-[#4E632E]">
            how it works
          </div>
          <div class="grid grid-cols-3 gap-20 place-items-center col-span-2 content-start">
            <div className="content-start">
              <img
                alt="/"
                className="rounded-[15px] pt-2 px-2"
                src="/explore.png"
                width="240px"
                height="300px"
              />
              <h2 className="text-center font-bold text-xl text-[#4E632E] pt-5">EXPLORE</h2>
              <p className="text-center font-light text-gray-500 pb-1">
                {" "}
                foods at a cheaper price and know their carbon savings{" "}
              </p>
            </div>
          
            <div className="">
              <img
                alt="/"
                className="rounded-[15px]"
                src="/pickup.png"
                width="240px"
                height="300px"
              />
              <h2 className="text-center font-bold text-xl text-[#4E632E] pt-5">PICK-UP</h2>
              <p className="text-center font-light text-gray-500 pb-1">
                {" "}
                delicious food from our shops  {" "}
              </p>
            </div>

            <div className="">
              <img
                alt="/"
                className="rounded-[15px] pt-5"
                src="/enjoy.png"
                width="240px"
                height="300px"
              />
              <h2 className="text-center font-bold text-xl text-[#4E632E] pt-5">FEEL GOOD</h2>
              <p className="text-center font-light text-gray-500 pb-1">
                {" "}
                about your tasty meal that helps the planet, your carbon savings and money saved!{" "}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
