import React from 'react'

const HeroCard = ({ slider }) => {
  return (
    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden h-full">
    <div className="container mx-auto flex justify-between gap-4 relative h-full py-8 ">
        {/* Title Section */}
        <div className="w-1/2 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-6xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                {slider.title}
                <span className="text-6xl">
                    {slider.subTitle}
                </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                {slider.description}
            </p>
            <div className="flex mt-8">
                <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                    {slider.button}
                </a>
                <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                    Read more
                </a>
            </div>
        </div>
        {/* Image Section */}
        <div className="hidden sm:block w-1/3 relative h-full">
            <img
                src={slider.image}
                className="max-w-xs md:max-w-sm m-auto h-full object-cover"
                alt="Product Image"
            />
        </div>
    </div>
</div>
  )
}

export default HeroCard