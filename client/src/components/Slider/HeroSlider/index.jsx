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
import img2 from '../../../assets/images/img_electro6.png';
import img3 from '../../../assets/images/img_electro7.png';
// Components:
import HeroCard from './HeroCard';

const HeroSlider = () => {

    const productHeroSlider = [
        {
            image: img1, title: 'Be on', subTitle: 'Time',
            description: 'Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.',
            button: 'Shop Now'
        },
        {
            image: img2, title: 'Be ready', subTitle: 'For Gaming',
            description: 'Discover the world of gaming. Experience the power of gaming.',
            button: 'Shop Now'
        },
        {
            image: img3, title: 'Be on', subTitle: 'Time',
            description: 'Rolex is a luxury watch brand.',
            button: 'Shop Now'
        },

    ]

    return (
        <div className="h-[28rem] mb-10 border border-white">
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
