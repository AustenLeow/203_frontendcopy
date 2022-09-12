import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout title="">
      <div className="flex items-center justify-center">
        <div className="text-center flex items-center justify-center">
          <h1 className="py-5 text-4xl lg:text-6xl">
              re_
          </h1>
        </div>
      </div> 
    </Layout>
  )
}