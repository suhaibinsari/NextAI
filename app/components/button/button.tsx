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
            {/* <button
                className={`bg-[#8850FF] hover:shadow-md hover:shadow-white hover:transition-all text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800`}
                style={{ width, height }}
                {...props}
            >
                {children}
            </button> */}
            <div className="relative inline-flex  group">
                <div
                    className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <button
                    className={`relative inline-flex items-center justify-center  text-white transition-all duration-200 bg-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`}
                    role="button"
                    style={{ width, height }}
                    {...props}
                >
                    {children}
                </button>
            </div>
        </>
    );
};

export default Button;
