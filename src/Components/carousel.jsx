// Carousel.js
import { useState, useEffect } from 'react';
import '../App.css';
import {logs,caro3,caro2,caro1} from '../constants/constant'
import React from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images for the carousel
  const images = [
    {
      src: caro1,
      alt: 'Slide 1',
      caption: '“The creative agency’s attention to detail and their ability to bring our vision to life were truly impressive.”',
      author: 'Mrs Adesanya Blessing',
      position: 'CEO @ Blessed Drip'
    },
    {
      src: caro2,
      alt: 'Slide 2',
      caption: '“The creative agency’s attention to detail and their ability to bring our vision to life were truly impressive.”',
      author: 'Mr. John Doe',
      position: 'Founder @ Innovation Hub'
    },
    {
      src: caro3,
      alt: 'Slide 2',
      caption: '“The creative agency’s attention to detail and their ability to bring our vision to life were truly impressive.”',
      author: 'Mr. John Doe',
      position: 'Founder @ Innovation Hub'
    },
    // Add more images as needed
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3000 milliseconds (3 seconds)
    
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="carousel-container">
      <img className=' absolute z-10 p-3' src={logs}/>
      <div className="carousel-slide">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        
        <div className="carousel-caption">
          <h5 className=' text-sm border-[1px] w-[150px] py-[4px] text-center rounded-full'>Vendors on swiphr</h5>
          <p>{images[currentIndex].caption}</p>
          <h5 className=' text-sm'>{images[currentIndex].author}</h5>
          <h5 className=' text-sm'>{images[currentIndex].position}</h5>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide} className="carousel-button">Previous</button>
        <button onClick={nextSlide} className="carousel-button">Next</button>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;