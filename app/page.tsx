import Image from "next/image";
import Head from 'next/head';


import React from 'react'

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>Futuristic AI Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" text-white min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to the Future</h1>
          <p className="text-lg md:text-xl mb-8">Unlock the power of AI to revolutionize your world</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out">Get Started</button>
        </div>
        <div className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <p className="text-lg mb-6">At Futuristic AI, we provide cutting-edge solutions utilizing the latest advancements in artificial intelligence technology. Our services include:</p>
          <ul className="text-lg">
            <li className="mb-2">AI-powered automation</li>
            <li className="mb-2">Predictive analytics</li>
            <li className="mb-2">Natural language processing</li>
            <li className="mb-2">Computer vision</li>
            <li className="mb-2">Machine learning algorithms</li>
          </ul>
        </div>
      </main>


    </div>

    </>
  )
}
