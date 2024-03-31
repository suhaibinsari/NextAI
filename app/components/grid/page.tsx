import React from 'react';
import Image from 'next/image';



export default function GridItem ({ gridData }) {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
            {gridData.map(({ id, imageUrl, text1, text2 }) => (
                <div key={id} className='rounded-xl bg-opacity-50 bg-gray-800 backdrop-filter backdrop-blur-md shadow-lg h-auto w-auto hover:bg-gray-800 transition-all duration-300'>
                    <div className='p-2'>
                        <Image src={imageUrl} alt="Image" width={500} height={500} className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className='p-2'>
                        <h2 className='text-center font-bold text-xl'>{text1}</h2>
                        <p className='text-center text-sm font-light text-gray-500'>{text2}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

