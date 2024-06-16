// LatestProductSlider.jsx:
import React from 'react';
// Import Swiper core and required modules:
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper React components:
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles:
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Images:
import img1 from '/img_electro1.png';
import img2 from '/img_electro2.png';
import img3 from '/img_electro3.png';
import img4 from '/img_electro4.png';
import img5 from '/img_electro5.png';
import img6 from '/img_electro6.png';
import img7 from '/img_electro7.png';
// Components:
import LatestProductCard from './LatestProductCard';
// Style:
import './style.css'
// Package
import { Link } from 'react-router-dom';

const LatestProductSlider = () => {

    const products = [
        {
            id: 1,
            name: 'Best Headphones Ever',
            oldPrice: 100,
            newPrice: 49,
            save: 50,
            image: img1,
            isNew: true,
            isTrending: true,
            buttonText: 'Add To Cart',
        },
        {
            id: 2,
            name: 'Best Headphones Ever',
            oldPrice: 100,
            newPrice: 80,
            save: 20,
            image: img2,
            isNew: true,
            isTrending: true,
            buttonText: 'Add To Cart',
        },
        {
            id: 3,
            name: 'Best Headphones Ever',
            oldPrice: 100,
            newPrice: 80,
            save: 20,
            image: img3,
            isNew: true,
            isTrending: true,
            buttonText: 'Add To Cart',
        },
        {
            id: 4,
            name: 'Best Headphones Ever',
            oldPrice: 100,
            newPrice: 80,
            save: 20,
            image: img4,
            isNew: true,
            isTrending: true,
            buttonText: 'Add To Cart',
        },
        {
            id: 5,
            name: 'Best Headphones Ever',
            oldPrice: 100,
            newPrice: 49,
            save: 50,
            image: img5,
            isNew: true,
            isTrending: true,
            buttonText: 'Add To Cart',
        },
        {
            id: 6,
            name: 'Best Headphones Ever',
            oldPrice: 100,
            newPrice: 80,
            save: 20,
            image: img6,
            isNew: true,
            isTrending: true,
            buttonText: 'Add To Cart',
        },
        {
            id: 7,
            name: 'Best Headphones Ever',
            oldPrice: 100,
            newPrice: 80,
            save: 20,
            image: img7,
            isNew: true,
            isTrending: true,
            buttonText: 'Add To Cart',
        },
    ]

    return (
        <div className='container mx-auto my-10 flex flex-col items-center justify-center'>

            {/* Title and Link */}
            <div className='w-full flex flex-row items-center justify-between px-2'>
                <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-medium tracking-tight text-neutral-700" >
                    Latest Products
                </h2>

                <Link to="/products" className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-medium text-blue-600 hover:text-cyan-500 sm:block" >
                    See more
                    <span aria-hidden="true"> &rarr;</span>
                </Link>
            </div>

            {/* Slider */}
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                loop={true}
                spaceBetween={20}
                slidesPerView={5}
                navigation
                centeredSlides={true}
                pagination={{ clickable: true }}
                breakpoints={
                    {
                        // When window width is >= 300px
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            // centeredSlides:{true}
                        },
                        // When window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        // When window width is >= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        // When window width is >= 1024px
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        // when window width is >= 1280px
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                    }
                }
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                className='latest-product-slider my-1 px-6 py-10 h-[30rem] w-full flex items-center justify-center'
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}
                        // to center the 'LatestProductCard' horizontally and vertically
                        className='w-full flex items-center justify-center'
                    >
                        <LatestProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}

export default LatestProductSlider;
