import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCoverflow, Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';


const Carousel = () => {

    const slides = [
        {
            img: 'https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450',
            title: 'Lorem ipsum dolor',
            role: 'Web Designer',
            description: 'Lorem ipsum dolor',
        },
        {
            img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450',
            title: 'Lorem ipsum dolor',
            role: 'Web Designer',
        },
        {
            img: 'https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450',
            title: 'Lorem ipsum dolor',
            role: 'Web Designer',
        },
        {
            img: 'https://images.pexels.com/photos/8422523/pexels-photo-8422523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450',
            title: 'Lorem ipsum dolor',
            role: 'Web Designer',
        },
        {
            img: 'https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450',
            title: 'Lorem ipsum dolor',
            role: 'Web Designer',
        },
        {
            img: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450',
            title: 'Lorem ipsum dolor',
            role: 'Web Designer',
        },
    ];

    return (
        <section className="my-10">
            <h2 className="text-center text-3xl text-orange-500 mb-10">Demo Carousel</h2>
            <section className="flex justify-center items-center max-w-7xl mx-auto overflow-hidden min-h-500">
                <Swiper
                    modules={[EffectCoverflow, Pagination, A11y, Autoplay]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 0,
                        // stretch: 0,
                        stretch: -200,
                        depth: 350,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ el: '.swiper-pagination' }}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                >
                    {
                        slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative">
                                    <div className="overflow-hidden max-h-56">
                                        <img className="object-cover w-full h-full rounded-md" src={slide.img} alt="image slider" />
                                    </div>
                                    <div className="p-6 text-center bg-white font-semibold">
                                        <h3 className="text-xl font-bold">{slide.title}</h3>
                                        <span className="block text-lg text-red-500">{slide.role}</span>
                                        {slide.description && <p className="mt-2 opacity-65 text-sm font-medium">{slide.description}</p>}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination" style={{ bottom: '-50px' }}></div>
            </section>
        </section>
    );
};

export default Carousel;
