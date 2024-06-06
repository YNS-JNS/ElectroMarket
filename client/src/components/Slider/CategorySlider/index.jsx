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
        <div className='my-10 mx-2 h-[25rem] border border-blue-500'>
            <h1 className="text-2xl font-bold text-center my-10">Discover Our Top Categories 🔥</h1>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="category-swiper"
            >
                {
                    categories.map((category, index) => (
                        <SwiperSlide key={index}>
                            <CategoryCard category={category} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default CategorySlider;
