import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Grid() {

    const gridData = [
        { id: 1, imageUrl: '/BackgroundReplace.webp', text1: 'Backgroud Replace', text2: 'Transform your photo with our AI Background Replace feature!' },
        { id: 2, imageUrl: '/ExpandImage.webp', text1: 'Expand Image', text2: 'Expand your horizons with our AI Expand Image Feature' },
        { id: 2, imageUrl: '/ImageRemix.webp', text1: 'Image Remix', text2: 'Add cretivity to your photos and turn them into beautiful artwork' },
        { id: 2, imageUrl: '/Inpainting.webp', text1: 'Inpainting', text2: 'Say goodbye to unwanted objects with our AI Inpainting feature!' },
        { id: 2, imageUrl: '/TexttoImage.webp', text1: 'Text to Image', text2: 'Transform your words into stunning words into stunning AI visuals with our text-to-image feature!' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gridData.map(({ id, imageUrl, text1, text2 }) => (
                <Link href='#' key={id} className='rounded-xl bg-opacity-50 bg-gray-800 backdrop-filter backdrop-blur-md shadow-lg h-auto w-auto hover:bg-gray-800 transition-all duration-300'>
                    <div className='p-2'>
                        <Image src={imageUrl} alt="Image" width={500} height={500} className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className='p-2'>
                        <h2 className='text-center font-bold text-xl'>{text1}</h2>
                        <p className='text-center text-sm font-light text-gray-500'>{text2}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

