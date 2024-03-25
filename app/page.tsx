
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
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const query = async (data: any) => {
    console.log(data)
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
        {
          headers: { Authorization: "Bearer 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" },
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }

      const result = await response.blob();
      const output = URL.createObjectURL(result);
      return output;
    } catch (error) {
      console.error('Error fetching image:', error);
      throw error;
    }
  };

  const onClickHandler = async () => {
    try {
      const input = { inputs: text };
      const result = await query(input);
      console.log('Image URL:', result);
      setUrl(result);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };
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
                <div className='flex flex-col md:flex-row items-center justify-center gap-4 mb-4'>
                  <div className='relative'><input onChange={(e) => setText(e.target.value)} type="text" placeholder='Enter your imagination....' className='sm:w-[40rem] p-4 sm:h-[5rem] forced-colors:bg-purple-700 h-[42px] rounded-full text-black' /></div>
                  <div className='md:absolute relative md:ml-[30rem]'><Button onClick={onClickHandler} width="130px" height="60px">+ Generate</Button></div>
                </div>
                <div className="bg-white border border-gray-200 rounded-md shadow-md p-4">
                  {url && (
                    <div className="relative">
                      <img src={url} alt="" className="rounded-md" width={400} height={400} />
                    </div>
                  )}
                </div>



              </div>
            </div>
          </div>














        </main>

















      </div>



    </>
  )
}
