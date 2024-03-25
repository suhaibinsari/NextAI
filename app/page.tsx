
'use client'

import { useState } from 'react';
import Image from "next/image";
import Head from 'next/head';
import Typewriter from 'typewriter-effect';


import React from 'react'
import SideNavbar from "./components/sideNav/page";
import AutoWrittenInput from "./components/textEffect/page";
import Button from './components/button/button';

export default function Home() {

  return (

    <>
      <div>

        <main className=" text-white min-h-screen flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Text to image with<br />
              <Typewriter
                options={{
                  strings: ['AI Art Generator'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className=' m-auto md:px-10 px-4'>
              <div className='flex items-center flex-col justify-center'>
              <p className="text-lg md:text-xl mb-8 px-5 md:px-32">Create awe-inspiring masterpieces effortlessly and explore the endless possibilities of AI generated art. Enter a prompt, choose a style, and watch Imagine - AI art generator bring your ideas to life!</p>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                  <div className='relative'><input type="text" placeholder='Enter your imagination....' className='sm:w-[40rem] p-4 sm:h-[5rem] forced-colors:bg-purple-700 h-[42px] rounded-full text-black' /></div>
                  <div className='md:absolute relative md:ml-[30rem]'><Button width="130px" height="60px">+ Generate</Button></div>
                </div>






              </div>
            </div>
          </div>














        </main>

















      </div>



    </>
  )
}
