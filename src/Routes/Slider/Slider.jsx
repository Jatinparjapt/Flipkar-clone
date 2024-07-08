import React, { useState, useEffect } from 'react';
import slide1 from "../../Images/slide1.webp"
import slide2 from "../../Images/slide2.webp"
import slide3 from "../../Images/slide3.webp"
import { Link } from 'react-router-dom';

const images = [
  slide1, slide2,slide3
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=' z-0 m-2 bg-slate-200  ' >
    <div className="relative w-full h-20  md:h-[12rem]  overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute h-auto inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ transition: 'opacity 1s' }}
        >
          <Link to={"https://www.flipkart.com/"} target='_blank' >
          <img src={image} alt={`Slide ${index + 1}`}  className="w-full object-contain" /></Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Slider;
