import Layout from "../components/Layout";
import Typical from "react-typical";
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
        <div className="absolute w-3/5 h-fit m-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="text-8xl text-white">
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
          <div className="text-2xl font-bold text-white flex flex-col items-end justify-center">
            <div>
              helping our climate one byte at a time. 
            </div>
          </div>
        </div>
      </div>

      <Layout title="">
        <div className="h-screen">hello</div>
      </Layout>
    </div>
  );
}
