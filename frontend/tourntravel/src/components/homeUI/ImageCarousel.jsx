import React, { useState } from 'react';

const ImageCarousel = () => {
  const images = [
    {
      description: 'Explore new destinations, cultures, and experiences',
      urls: "https://images.pexels.com/photos/14632257/pexels-photo-14632257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      description: 'Explore natural wonders on Earth',
      urls: "https://images.pexels.com/photos/5014995/pexels-photo-5014995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      description: 'Explore where Bhuda starts their journey',
      urls: "https://images.pexels.com/photos/7331531/pexels-photo-7331531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-[500px] px-7 mx-auto mt-[100px]">

      <div className="relative overflow-hidden w-full h-full">
        <img
          src={images[currentIndex].urls}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
        <p className='description absolute text-center top-0 w-full h-full text-[25px] md:text-[50px] 2xl:text-[60px] text-white flex items-center justify-center px-7'>{images[currentIndex].description}</p>
        
        <div className='absolute bottom-[-80px] w-full h-full text-white font-semibold flex flex-col items-center justify-center'>
          <p className='text-sm md:text-xl'>Scroll down</p>
          <i className="fa-solid fa-arrow-down-long text-xl"></i>
        </div>
      </div>


      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 ">
        <button
          onClick={goToPrevious}
          className="p-1 md:p-2 border-2 border-teal-500 bg-black text-white rounded-full hover:bg-gray-600 focus:outline-none"
        >
          &#10094;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={goToNext}
          className="p-1 md:p-2 border-2 border-teal-500 bg-black text-white rounded-full hover:bg-gray-600 focus:outline-none "
        >
          &#10095;
        </button>
      </div>


      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-[20px] h-[20px] rounded-full bg-black border-2 border-teal-700 cursor-pointer ${currentIndex === index ? 'bg-white' : 'bg-black'
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
