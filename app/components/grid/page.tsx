import React from 'react';
import Image from 'next/image';

interface GridItemProps {
    gridData: {
        id: number;
        imageUrl: string;
        text1: string;
        text2: string;
    }[];
}

// const GridItem: React.FC<GridItemProps> = ({ gridData }) => {
    export default function GridItem({gridData}:GridItemProps){
    return (
        <div className="grid grid-cols-3 gap-4">
            {gridData.map(({ id, imageUrl, text1, text2 }) => (
                <div key={id} className='rounded-xl bg-opacity-50 bg-gray-800 backdrop-filter backdrop-blur-md shadow-lg h-auto w-auto hover:bg-gray-800 transition-all duration-300'>
                    <div className='p-2'>
                        <p className=' rounded-xl bg-slate-100 h-[15rem] w-auto py-10'>          <Image src={imageUrl} alt="Image" width={500} height={500} className="w-full h-full object-cover" /></p>
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



// import React from 'react'

// export default function page() {
//   return (
//     <div>

//     </div>
//   )
// }
