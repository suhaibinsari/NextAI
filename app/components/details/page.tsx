import React from 'react'

export default function page() {
    const mapData = [
        { title: 'User Base', value: '25M' },
        { title: 'Discord Community', value: '600k' },
        { title: 'Imaged Processed', value: '200M' },

    ]
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-20 gap-2'>
            {mapData.map((item, index) => {
                return (
                    <div key={index} className='flex flex-col space-y-8 items-center justify-center bg-opacity-50 bg-gray-800 backdrop-filter backdrop-blur-md shadow-lg h-[10rem] w-[15rem]'>
                        <p>{item.title}</p>
                        <h1 className='font-bold text-6xl'>{item.value}</h1>
                    </div>
                )
            })}
        </div>
    )
}
