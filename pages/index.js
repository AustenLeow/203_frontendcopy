import Layout from "../components/Layout";
import Typical from "react-typical";
import {AiOutlineShoppingCart } from "react-icons/ai";
import { IoEarthSharp} from "react-icons/io5";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="w-screen flex items-center justify-center">
        <video
          className="w-screen brightness-50"
          src={require("../public/homepage-b-roll.mp4")}
          type="video/mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute w-3/5 h-fit m-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="text-4xl sm:text-8xl text-white">
            <strong> re</strong>
            <strong className="px-3">
              <Typical
                steps={[
                  "price_",
                  1000,
                  "planet_",
                  1000,
                  "food_",
                  1000,
                  "use_",
                  1000,
                  "duce_",
                  1000,
                ]}
                wrapper="p"
                loop={Infinity}
              />
            </strong>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white flex flex-col items-end justify-center">
            <div className="mb-5">helping our climate one byte at a time.</div>
            <div className="flex items-center ">
              <a
                href="#_"
                class="relative inline-flex items-center justify-center py-1 px-8 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                <IoEarthSharp/>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                  login
                </span>
                <span class="relative invisible">login</span>
              </a>
              <div className="p-4"></div>
              <a
                href="#_"
                class="relative inline-flex items-center justify-center py-1 px-10 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                    <AiOutlineShoppingCart/>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                  marketplace
                </span>
                <span class="relative invisible">marketplace</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Layout title="">
        <div className="h-screen w-3/5 m-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            what we do
          </div>
          <div className="flex flex-col items-center justify-center">hello</div>
        </div>
        <div className="h-screen flex flex-col items-center justify-center">
          how does it work?
        </div>
        <div className="h-screen flex flex-col items-center justify-center">
          hi
        </div>
      </Layout>
    </div>
  );
}
