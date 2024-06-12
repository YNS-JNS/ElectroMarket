// HeroCard.jsx
import React from 'react';

const HeroCard = ({ slider }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden h-full border border-red-600"
    // className="bg-white dark:bg-gray-800 flex flex-col lg:flex-row items-center overflow-hidden h-full border border-red-600"
    >
      <div
        // className="container mx-auto flex justify-between gap-4 relative h-full py-8 "
        className="container mx-auto flex flex-col lg:flex-row justify-between gap-4 relative h-full py-8 px-4 sm:px-6 md:px-8"
      >
        {/* Title Section */}
        <div
          // className="w-1/2 flex flex-col relative z-20"
          className="w-full lg:w-1/2 flex flex-col items-start relative z-20 mb-6 lg:mb-0"
        >
          <span
            // className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"
            className="w-20 h-2 bg-gray-800 dark:bg-white mb-4 lg:mb-12"
          ></span>
          <h1
            className="font-bebas-neue uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black flex flex-col leading-none dark:text-white text-gray-800"
          >
            {slider.title}
            <span
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2"
            >
              {slider.subTitle}
            </span>
          </h1>
          <p
            className="text-sm sm:text-base text-gray-700 dark:text-white mt-4 lg:mt-6"
          >
            {slider.description}
          </p>
          <div className="flex mt-4 lg:mt-6">
            <a href="#"
              className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400 transition"
            >
              {slider.button}
            </a>
            <a href="#"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md transition"
            >
              Read more
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 flex items-center justify-center h-auto"
        >
          <img
            src={slider.image}
            // className="w-full h-full object-contain max-w-[300px] max-h-[300px] sm:max-w-[400px] sm:max-h-[400px] md:max-w-[400px] md:max-h-[400px] lg:max-w-[500px] lg:max-h-[500px] xl:max-w-[400px] xl:max-h-[400px]"
            className="w-full h-full object-contain max-w-[400px] max-h-[400px]"
            alt="Product Image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
