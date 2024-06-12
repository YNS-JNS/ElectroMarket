// CategorySlider.jsx
import React from 'react';
// Import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Images
import slide1 from '/smart-watch1.png';
import slide2 from '/smart-watch2.png';
import slide3 from '/smart-watch3.png';
import laptop from '/laptop.png';
import electro from '/electro.png';
import gaming from '/gaming.png';
// Components
import CategoryCard from './CategoryCard';
// Custom CSS for navigation buttons
import './style.css';

const CategorySlider = () => {
    const categories = [
        { image: slide1, title: 'Smart Watches' },
        { image: laptop, title: 'Laptops' },
        { image: electro, title: 'Electronics' },
        { image: gaming, title: 'Gaming Consoles' },
        { image: slide2, title: 'Chargers' },
        { image: slide3, title: 'Cables' },
    ];

    return (
        <div className='container mx-auto my-10 flex flex-col items-center justify-center h-[25rem] border border-blue-500'>

            {/* Title and Link */}
            <div className='w-full flex items-center justify-start px-2 border border-blue-500'>
                <h2 className="text-xl sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-medium tracking-tight text-white" >
                    All categories
                </h2>
            </div>

            {/* Slider */}
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                breakpoints={
                    {
                        // When window width is >= 300px
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        // When window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        // When window width is >= 768px
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        // When window width is >= 1024px
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        // when window width is >= 1280px
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 25,
                        },
                    }
                }
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="category-swiper my-10 px-6 py-10 border border-yellow-500 h-[280px] w-full flex items-center justify-center"
            >
                {
                    categories.map((category, index) => (
                        <SwiperSlide key={index} className='border border-blue-600'>
                            <CategoryCard category={category} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default CategorySlider;
