import Layout from "../components/Layout";
import Typical from "react-typical";

export default function Home() {
  return (
    <Layout title="">
      <div className="w-screen flex items-center justify-center">
        <video
          className="w-screen"
          src={require("../public/homepage-b-roll.mp4")}
          type="video/mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute w-4/5 h-fit m-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="text-6xl text-white">
            <strong> re</strong>
            <strong className="px-2">
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
          <div className="text-end items-end justify-center"> taste, don't taste </div>
        </div>
      </div>
    </Layout>
  );
}
