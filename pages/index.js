import Layout from "../components/Layout";
// import Typical from "react-typical";
import { IoEarthSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import Image from "next/image";
import totalusers from ".././public/totalusers.png";
import totalcarbon from ".././public/totalcarbon.png";
import moneysaved from ".././public/moneysaved.png";
import Link from "next/link";

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
    fetchUserCount();
    fetchCarbonCount();
  }, []);

  function fetchCarbonCount() {
    fetch("http://52.221.210.169:8080/api/v1/ordertotalcarbon", {
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
    const res = await fetch("http://52.221.210.169:8080/api/v1/totalusers", {
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
              {/* <Typical
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
              /> */}
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
          <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
            When you look
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
              <span class="relative text-white">food wastage</span>
            </span>
            all the time, people think that you're busy.
          </blockquote>
        </div>
        <div className="h-screen w-4/5 m-auto">
          <div class="grid grid-cols-3 gap-8 place-items-center p-5">
            <div className="">
              <span className="statistics static justify-center">
                {userCount}
              </span>
              <p className="text-center font-light text-gray-500">
                {" "}
                users reducing food wastage{" "}
              </p>
              <Image
                alt="/"
                className="rounded-[15px]"
                src={totalusers}
                width="240px"
                height="300px"
              />
            </div>
            <div className="">
              <div className="statistics static justify-center whitespace-nowrap">
                <div>
                  {carbonCount}
                  <var>
                    cm<sup>3</sup>
                  </var>
                </div>
              </div>
              <p className="text-center font-light text-gray-500">
                {" "}
                carbon saved{" "}
              </p>
              <Image
                alt="/"
                className="rounded-[15px]"
                src={totalcarbon}
                width="240px"
                height="300px"
              />
            </div>
            <div>
              <div className="statistics static justify-center whitespace-nowrap">
                <div>
                  <var>$</var>
                  {userCount}
                </div>
              </div>
              <p className="text-center font-light text-gray-500"> saved </p>
              <Image
                alt="/"
                className="rounded-[15px]"
                src={moneysaved}
                width="240px"
                height="300px"
              />
            </div>
          </div>
        </div>
        <div className="h-screen w-4/5 m-auto">
          <div className="flex flex-col items-start justify-center text-6xl font-bold text-[#4E632E]">
            why we do it
          </div>
          <div class="grid grid-cols-3 gap-8 place-items-center p-5">
            <div className="">
              <span className="statistics static justify-center">
                {userCount}
              </span>
              <p className="text-center font-light text-gray-500">
                {" "}
                users reducing food wastage{" "}
              </p>
              <Image
                alt="/"
                className="rounded-[15px]"
                src={totalusers}
                width="240px"
                height="300px"
              />
            </div>
            <div className="">
              <div className="statistics static justify-center whitespace-nowrap">
                <div>
                  {carbonCount}
                  <var>
                    cm<sup>3</sup>
                  </var>
                </div>
              </div>
              <p className="text-center font-light text-gray-500">
                {" "}
                carbon saved{" "}
              </p>
              <Image
                alt="/"
                className="rounded-[15px]"
                src={totalcarbon}
                width="240px"
                height="300px"
              />
            </div>
            <div>
              <div className="statistics static justify-center whitespace-nowrap">
                <div>
                  <var>$</var>
                  {userCount}
                </div>
              </div>
              <p className="text-center font-light text-gray-500"> saved </p>
              <Image
                alt="/"
                className="rounded-[15px]"
                src={moneysaved}
                width="240px"
                height="300px"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
