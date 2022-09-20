import Layout from "../components/Layout";

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
        
      </div>
    </Layout>
  );
}
