import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import Image from "next/image";
import arrow from '@/public/arrow.svg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    width?: string;
    height?: string;
    children: ReactNode;
}

const Button = ({ width, height, children, ...props }: ButtonProps) => {
    return (
        <>
            <button
                className={`bg-[#8850FF] hover:shadow-md hover:shadow-white hover:transition-all text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800`}
                style={{ width, height }}
                {...props}
            >
                {children}
            </button>



            {/* <button
                className={`relative bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500`}
                style={{ width, height }}
                {...props}
            >
                {children}
                <span className='bg-white flex items-center justify-center w-12 h-12 rounded-full absolute left-[7rem] top-1/2 transform -translate-y-1/2 border-double border-4 border-sky-500'>
                    <span className='-rotate-45'>
                        <Image src={arrow} alt="Arrow" />
                    </span>
                </span>
            </button> */}






        </>
    );
};

export default Button;
