import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import videoBg from "../public/homepage-b-roll.mp4";

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
