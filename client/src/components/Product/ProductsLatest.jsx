import React from 'react';
import ProductCard from './ProductCard';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import image1 from '/smart-watch1.png';
import image2 from '/smart-watch2.png';



const ProductsLatest = () => {

  const products = [
    {
      id: 1,
      name: 'Best Headphones Ever',
      defaultPrice: 100,
      price: 49,
      save: 50,
      image: image1,
      isNew: true,
      isTrending: true,
      buttonText: 'Add To Cart',
    },
    {
      id: 2,
      name: 'Best Headphones Ever',
      defaultPrice: 100,
      price: 80,
      save: 20,
      image: image2,
      isNew: true,
      isTrending: true,
      buttonText: 'Add To Cart',
    },
    {
      id: 3,
      name: 'Best Headphones Ever',
      defaultPrice: 100,
      price: 80,
      save: 20,
      image: image1,
      isNew: true,
      isTrending: true,
      buttonText: 'Add To Cart',
    },
    {
      id: 4,
      name: 'Best Headphones Ever',
      defaultPrice: 100,
      price: 80,
      save: 20,
      image: image2,
      isNew: true,
      isTrending: true,
      buttonText: 'Add To Cart',
    },
    {
      id: 5,
      name: 'Best Headphones Ever',
      defaultPrice: 100,
      price: 49,
      save: 50,
      image: image1,
      isNew: true,
      isTrending: true,
      buttonText: 'Add To Cart',
    },
  ]

  return (
    <>
      <h1 className="font-bold text-4xl mb-4">🔥 Latest Products</h1>
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
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductsLatest;
