import Layout from "../components/Layout";
import Typical from "react-typical";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoEarthSharp } from "react-icons/io5";
import Navbar from "../components/Navbar";

export default function Home() {
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
            <strong> re:</strong>
            <strong className="px-5 text-[#BFDB9C]">
              <Typical
                steps={[
                  "price",
                  1000,
                  "planet",
                  1000,
                  "food",
                  1000,
                  "invent",
                  1000,
                  "imagine",
                  1000,
                  "purpose",
                  1000,
                ]}
                wrapper="p"
                loop={Infinity}
              />
            </strong>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white flex flex-col items-end justify-center">
            <div className="mb-2 items-end text-end">helping our climate one byte at a time.</div>
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
                  <AiOutlineShoppingCart />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                  sign up
                </span>
                <span className="relative invisible">sign up</span>
              </a>
            </div>
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
            how does it work
          </div>
          <div className="flex flex-col items-center justify-center">cycle</div>
        </div>
        <div className="h-screen w-3/5 m-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center text-6xl font-bold text-[#4E632E]">
            hot picks
          </div>
          <div className="flex flex-col items-center justify-center">
            carousel of products
          </div>
        </div>
      </Layout>
    </div>
  );
}
