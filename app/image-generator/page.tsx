'use client'
import React, { useState } from 'react';

export default function ImageGenerator() {
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
      const input = { inputs:  text  };
      const result = await query(input);
      console.log('Image URL:', result);
      setUrl(result);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div>
      <input className='text-black' onChange={(e) => setText(e.target.value)} type="text" placeholder='Enter something to generate' />
      <button onClick={onClickHandler}>Generate Image</button>
      {url && <img src={url} alt="" width={200} height={200} />}
    </div>
  );
}
