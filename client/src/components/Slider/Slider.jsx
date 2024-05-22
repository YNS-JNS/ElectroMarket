import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar,A11y, Autoplay, EffectCube } from 'swiper/modules';

// Import Swiper styles*import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';

const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.title}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )

}

export default  Slider