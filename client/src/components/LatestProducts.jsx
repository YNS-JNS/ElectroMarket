import React from 'react';
import CardLatestProduct from './CardLatestProduct';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const slides = [
  {
    id: 1,
    imgSrc: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    brand: "Brand",
    name: "Product Name",
    price: 149,
    originalPrice: 199,
  },
  {
    id: 2,
    imgSrc: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    brand: "Brand",
    name: "Product Name",
    price: 149,
    originalPrice: 199,
  },
  {
    id: 3,
    imgSrc: "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    brand: "Brand",
    name: "Product Name",
    price: 149,
    originalPrice: 199,
  },
  {
    id: 4,
    imgSrc: "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    brand: "Brand",
    name: "Product Name",
    price: 149,
    originalPrice: 199,
  },
  {
    id: 5,
    imgSrc: "https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    brand: "Brand",
    name: "Product Name",
    price: 149,
    originalPrice: 199,
  },
  {
    id: 4,
    imgSrc: "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    brand: "Brand",
    name: "Product Name",
    price: 149,
    originalPrice: 199,
  },
];

const LatestProducts = () => {
  return (
    <>
      <h1 className="font-bold text-4xl mb-4">Latest Products</h1>
      <div className='my-10 mx-7'>
        <Swiper
          modules={[
            Navigation,
            // Pagination,
            // Scrollbar,
            A11y,
            Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <CardLatestProduct product={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default LatestProducts;
