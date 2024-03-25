import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  children: ReactNode;
}

const Button = ({ width, height, children, ...props }: ButtonProps) => {
  return (
<>
    <button
      className={`bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500`}
      style={{ width, height }}
      {...props}
    >
      {children}
    </button>

<button className='bg-indigo-500 w-32 h-10 absolute'>
<div className='bg-red-200 h-8 rounded-full  '>

</div>

</button>




    </>
  );
};

export default Button;
