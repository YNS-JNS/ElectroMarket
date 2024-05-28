import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Images:
import smartWatch from '/smart-watch.png';
// import setUp from '/setUp-gaming.png';
// import rolex from '/rolex.png';

const HeroSlider = () => {

    const productHeroSlider = [
        {
            image: smartWatch, title: 'Be on', subTitle: 'Time',
            description: 'Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.',
            button: 'Shop Now'
        },
        {
            image: smartWatch, title: 'Be ready', subTitle: 'For Gaming',
            description: 'Discover the world of gaming. Experience the power of gaming.',
            button: 'Shop Now'
        },
        {
            image: smartWatch, title: 'Be on', subTitle: 'Time',
            description: 'Rolex is a luxury watch brand.',
            button: 'Shop Now'
        },

    ]

    return (
        <>
            <Swiper
                modules={[
                    // Navigation, 
                    // Pagination, 
                    Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                // pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    productHeroSlider.map((slider, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                                <div className="container mx-auto px-6 flex justify-between relative py-16">
                                    {/* Title Section  */}
                                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
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
                                    <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                                        <img
                                            // src="https://www.tailwind-kit.com/images/object/10.png" 
                                            src={slider.image}
                                            // loading="lazy"
                                            className="max-w-xs md:max-w-sm m-auto"
                                            // className="max-w-xs md:max-w-md lg:max-w-lg m-auto object-cover h-auto w-72"
                                            alt="Product Image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

export default HeroSlider;
