import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

// import { RxArrowTopRight } from "react-icons/rx";
// import { ServiceData } from "../constants";
import CardSlider from './CardSlider'

const TrendingSlider = () => {

    const products = [
        { id: 1, name: "Smart Watch Oraimo", image: "/img_electro1.png", newPrice: "199.99", oldPrice: "499.99" },
        { id: 2, name: "Smart Watch Oraimo", image: "/img_electro2.png", newPrice: "199.99", oldPrice: "499.99" },
        { id: 3, name: "Smart Watch Oraimo", image: "/img_electro3.png", newPrice: "199.99", oldPrice: "499.99" },
        { id: 4, name: "Smart Watch Oraimo", image: "/img_electro4.png", newPrice: "199.99", oldPrice: "499.99" },
        { id: 5, name: "Smart Watch Oraimo", image: "/img_electro5.png", newPrice: "199.99", oldPrice: "499.99" },
        { id: 6, name: "Smart Watch Oraimo", image: "/img_electro6.png", newPrice: "199.99", oldPrice: "499.99" },
        { id: 7, name: "Smart Watch Oraimo", image: "/img_electro7.png", newPrice: "199.99", oldPrice: "499.99" },
    ];

    return (
        <div className="flex items-center justify-center flex-col h-[900px] bg-[#6c34af]">
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="h-[600px] w6[300px]"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }} />
                            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                            <div className="relative flex flex-col gap-3">
                                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                                <h1 className="text-xl lg:text-2xl">{product.name} </h1>
                                <p className="lg:text-[18px]">{product.name} </p>
                            </div>
                            {/* <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" /> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TrendingSlider;