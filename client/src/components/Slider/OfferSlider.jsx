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
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className="relative flex items-center justify-evenly w-full h-80 p-6">
                        <div className="text-white">
                            <h1 className="text-5xl font-bold">{slide.title}</h1>
                            <div className="w-full h-8">
                                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
                                        className={`fill-current text-[${slide.svgColor}]`}
                                    ></path>
                                </svg>
                            </div>
                            <p className="my-4 text-lg">{slide.description}</p>
                            <button
                                className={`mt-8 inline-flex items-center justify-center rounded-xl bg-[${slide.buttonBgColor}] py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-${slide.buttonShadowColor}/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]`}
                            >
                                {slide.buttonText}
                            </button>
                        </div>
                        <div className="flex-shrink-0">
                            <img src={slide.image} alt={slide.title} className="w-64 h-auto object-cover" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default OfferSlider;
