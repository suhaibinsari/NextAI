import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

const imagesRow1 = [
  '/11.png',
  '/12.png',
  '/13.png',
  '/14.png',
  '/15.png',
  '/16.png',
  '/17.png',
  '/18.png',
  '/19.png',
  '/111.png',
  '/112.png',
  '/113.png',
  '/114.png',
  '/19.png',
  '/111.png',
  '/112.png',
  '/113.png',
  '/114.png',
  '/115.png',
  '/19.png',
  '/111.png',
  '/112.png',
  '/113.png',
  '/114.png',
  '/115.png',
];
const imagesRow2 = [
  '/112.png',
  '/113.png',
  '/114.png',
  '/115.png',
  '/13.png',
  '/11.png',
  '/12.png',
  '/18.png',
  '/19.png',
  '/111.png',
  '/115.png',
  '/13.png',
  '/11.png',
  '/12.png',
  '/18.png',
  '/19.png',
  '/111.png',
  '/14.png',
  '/15.png',
  '/16.png',
  '/17.png',
  '/19.png',
  '/111.png',
  '/14.png',
  '/15.png',
  '/16.png',
  '/17.png',
];

const ImageSlide: React.FC<{ src: string }> = ({ src }) => (
  <div className='h-[15rem] w-[15rem] rounded-xl overflow-hidden'>
    <Image src={src} alt="" className="rounded-xl" width={400} height={400} />
  </div>
);

const SlideOnScroll: React.FC = () => {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container1 = containerRef1.current;
      const container2 = containerRef2.current;
      if (container1 && container2) {
        const scrollPosition = window.scrollY;
        const startSlidingAt = 1000; // Adjust this to the specific scroll position where you want to start sliding
        const endSlidingAt = 6000; // Adjust this to the specific scroll position where you want to stop sliding
        if (scrollPosition >= startSlidingAt && scrollPosition <= endSlidingAt) {
          const offset = scrollPosition - startSlidingAt;
          container1.style.transform = `translateX(-${offset}px)`;
          container2.style.transform = `translateX(${offset}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='overflow-x-hidden'>
    <div className='space-y-4'>
      <div className='flex gap-4' ref={containerRef1} style={{ overflowX: 'hidden' }}>
        {imagesRow1.map((image, index) => (
          <ImageSlide key={index} src={image} />
        ))}
      </div>
      <div className='flex gap-4' ref={containerRef2} style={{ overflowX: 'hidden' }}>
        {imagesRow2.map((image, index) => (
          <ImageSlide key={index} src={image} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default SlideOnScroll;
