
'use client'

import { useState } from 'react';
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Button from './components/button/button';
import GridItem from './components/grid/page';

export default function Home() {

  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [loader, setLoader] = useState(false);

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
      setLoader(true)
      const input = { inputs: text };
      const result = await query(input);
      console.log('Image URL:', result);
      setUrl(result);
      setImages([...images, result])

    } catch (error) {
      console.error('Error generating image:', error);
    }
    finally {
      setLoader(false)
    }
  };
  const gridData = [
    { id: 1, imageUrl: '/BackgroundReplace.webp', text1: 'Backgroud Replace', text2: 'Transform your photo with our AI Background Replace feature!' },
    { id: 2, imageUrl: '/ExpandImage.webp', text1: 'Expand Image', text2: 'Expand your horizons with our AI Expand Image Feature' },
    { id: 2, imageUrl: '/ImageRemix.webp', text1: 'Image Remix', text2: 'Add cretivity to your photos and turn them into beautiful artwork' },
    { id: 2, imageUrl: '/Inpainting.webp', text1: 'Inpainting', text2: 'Say goodbye to unwanted objects with our AI Inpainting feature!' },
    { id: 2, imageUrl: '/TexttoImage.webp', text1: 'Text to Image', text2: 'Transform your words into stunning words into stunning AI visuals with our text-to-image feature!' },
  ];
  return (

    <>
      <div className='container py-48 m-auto md:px-10 px-4 font-Poppins'>
        <div className='flex items-center flex-col justify-center'>
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
                <div className='grid sm:grid-cols-3 grid-cols-1 gap-4'>
                  {images.map((image, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-md shadow-md p-4">
                      <div className="">
                        <Image src={image} alt="" className="rounded-md" width={400} height={400} />
                      </div>
                    </div>
                  ))}
                </div>
                {loader && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-md shadow-md">
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>


          <div className=' py-20'>
            <video
              className='rounded-xl h-auto w-[45rem]'
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/ImagineWeb_New.mp4" type="video/mp4" />
            </video>
          </div>

          <div className='text-center sm:text-left w-full'>
            <p className='text-gray-500'>DISCOVER THE POTENTIAL OF</p>
            <h1 className='font-bold text-4xl'>AI Image Generator Tools</h1>
            <p className='text-gray-500'>Explore Our AI Image Generator Tools for Creating Captivating AI Generated Art. Explore a world of infinite inspiration and take your artworks to new heights with our AI image generator tools.</p>
          </div>


          <div className='py-20'>
            <GridItem gridData={gridData} />
          </div>

          <div className='text-center sm:text-left w-full'>
            <p className='text-gray-500'>DIVE INTO THE WORLD OF</p>
            <h1 className='font-bold text-4xl'>AI-Generated Art</h1>
            <p className='text-gray-500'>See Imagines potential unfold and create captivating art on our Text-to-Art Generator</p>
          </div>

          <p className="text-6xl text-center md:text-left lg:text-[10rem]  md:text-8xl w-full text-gray-500 font-bold py-20">Endless <br /> Possibilities, <br />just <span className='text-white'>imagine.</span></p>




        </div>
      </div>












    </>
  )
}
