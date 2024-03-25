// components/AutoWrittenInput.js
'use client'
import { useEffect, useState } from 'react';

interface AutoWrittenInputProps {
  text: string;
  interval: number;
}

const TypewriterInput: React.FC<AutoWrittenInputProps> = ({ text, interval }) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    let index = 0;
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (index <= text.length) {
          setInputValue(text.substring(0, index));
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, interval);

      return () => clearInterval(intervalId);
    }, interval);

    return () => clearTimeout(timeoutId);
  }, [text, interval]);

  return <input type="text" className='text-black' value={inputValue} readOnly />;
};

export default TypewriterInput;
