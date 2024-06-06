import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Images
import slide1 from '/smart-watch1.png';
import slide2 from '/smart-watch2.png';
import slide3 from '/smart-watch3.png';
import OfferCard from './OfferCard';

const slides = [
    {
        id: 1,
        title: 'Smart Watch',
        description: 'Explore the world of smart watches.',
        buttonText: 'Read More',
        buttonBgColor: '#41B06E',
        buttonShadowColor: 'green-400',
        svgColor: '#41B06E',
        image: slide1
    },
    {
        id: 2,
        title: 'Smart Watch',
        description: 'Explore the world of smart watches.',
        buttonText: 'Read More',
        buttonBgColor: '#FFAA80',
        buttonShadowColor: 'red-400',
        svgColor: '#FFAA80',
        image: slide2
    },
    {
        id: 3,
        title: 'Smart Watch',
        description: 'Explore the world of smart watches.',
        buttonText: 'Read More',
        buttonBgColor: '#bfd0c6',
        buttonShadowColor: 'gray-400',
        svgColor: '#d8ece0',
        image: slide3
    }
];

const OfferSlider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <OfferCard slide={slide} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default OfferSlider;