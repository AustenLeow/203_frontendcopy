import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ title, children}) {
    return (
        <>
          <Head>
            <title>{title ? title + ' |  re_' : 're_'}</title>
            <meta name="description" content="climate change" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

        <div className="flex min-h-screen flex-col justify-center bg-[#EFEDEE]">
            <main className="w-screen h-screen m-auto mt-4 p-4 bg-[#EFEDEE] flex justify-center">{children} </main>
            <footer className="flex h-[320px] justify-center items-center shadow-inner bg-[#EFEDE7]">footer</footer>
        </div>
          
          
        </>
      )
}
