// HeroSlider.jsx
import React from 'react';
// import Swiper core and required modules
import {
    // Navigation,
    // Pagination,
    Scrollbar,
    A11y,
    Autoplay
} from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Images:
import img1 from '../../../assets/images/img_electro1.png';
import img2 from '../../../assets/images/img_electro3.png';
import img3 from '../../../assets/images/img_electro7.png';
// Components:
import HeroCard from './HeroCard';

const HeroSlider = () => {

    const productHeroSlider = [
        {
            image: img1,
            title: 'Stay Ahead',
            subTitle: 'With Precision',
            description: 'Our Smart Watch redefines timekeeping by integrating cutting-edge technology with timeless design. Monitor your health, track your fitness, and stay connected on the go. Experience the next level of precision and functionality in a sleek and elegant form factor that fits seamlessly into your lifestyle.',
            button: 'Explore Now'
        },
        {
            image: img2,
            title: 'Unleash Power',
            subTitle: 'In Your Hands',
            description: 'Introducing the latest iPhone, the epitome of innovation and elegance. With its advanced camera systems, super-fast performance, and the most durable design ever, it’s crafted to provide an unparalleled experience. Embrace the future of mobile technology with unmatched features and a sleek design that redefines what a smartphone can be.',
            button: 'Discover More'
        },
        {
            image: img3,
            title: 'Immerse Yourself',
            subTitle: 'In Sound',
            description: 'Experience the freedom of wireless with our premium headphones. Designed for comfort and superior sound quality, they offer immersive audio, noise-cancellation, and a sleek, modern design. Perfect for music lovers and professionals alike, these headphones will elevate your listening experience to new heights.',
            button: 'Buy Now'
        },
    ];
    

    return (
        <div 
        // className="container mx-auto min-h-[25rem] mb-10 border border-white"
        className="container mx-auto min-h-[25rem] mb-10"
        >
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
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                loop={true}
                // className="dark:bg-gray-800"
            >
                {
                    productHeroSlider.map((slider, index) => (
                        <SwiperSlide key={index}>
                            <HeroCard slider={slider} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default HeroSlider;
