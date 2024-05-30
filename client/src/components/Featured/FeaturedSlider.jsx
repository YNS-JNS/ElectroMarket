import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, A11y, Autoplay } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./FeaturedSlider.css";
import { Link } from "react-router-dom";
import img1 from '/img_electro1.png'
import img2 from '/img_electro2.png'
import img3 from '/img_electro3.png'
import img4 from '/img_electro4.png'
import img5 from '/img_electro5.png'
import img6 from '/img_electro6.png'
import img7 from '/img_electro7.png'

const FeaturedSlider = () => {

  const products = [
    {
      id: 1, name: 'Headphones R12', image: img1, newPrice: 100, oldPrice: 80,
    },
    {
      id: 2, name: 'Headphones R12', image: img2, newPrice: 100, oldPrice: 80,
    },
    {
      id: 3, name: 'Headphones R12', image: img3, newPrice: 100, oldPrice: 80,
    },
    {
      id: 4, name: 'Headphones R12', image: img4, newPrice: 100, oldPrice: 80,
    },
    {
      id: 5, name: 'Headphones R12', image: img5, newPrice: 100, oldPrice: 80,
    },
    {
      id: 6, name: 'Headphones R12', image: img6, newPrice: 100, oldPrice: 80,
    },
    {
      id: 7, name: 'Headphones R12', image: img7, newPrice: 100, oldPrice: 80,
    },

  ];

  return (
    <div className="border border-red-500 my-10">
      <div className='container mx-auto'>
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-xl font-medium tracking-tight text-white">Trending Products</h2>
          <Link to="/products" className="hidden text-xl font-semibold text-blue-600 hover:text-cyan-500 sm:block">
            See more
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
      <Swiper
        modules={[EffectCoverflow, Pagination, A11y, Autoplay]}
        loop={true}
        speed={500}
        spaceBetween={150}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        effect={"coverflow"}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 50,
          modifier: 3,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 200,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 250,
          },
        }}
        className="featured_swiper"
      >
        {
          products.map((product, index) => {
            // const { _id, images, name ,price  } = product;
            // let newPrice = generateDiscountedPrice(price);
            // newPrice = dispalyMoney(newPrice);
            // const oldPrice = dispalyMoney(price);

            return (
              <SwiperSlide key={index} className="featured_slides">
                <Link
                  // to={`/product/${id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="featured_title">{product.name}</div>
                  <figure className="featured_img">
                    <img src={product.image} alt={product.name} />
                  </figure>
                  <h2 className="products_price">
                    <span className="final_price">{product.newPrice}</span> &nbsp;
                    <small>
                      <del className="old_price">{product.oldPrice}</del>
                    </small>
                  </h2>
                </Link>
              </SwiperSlide>

              // <SwiperSlide key={index} className="featured_slides">
              //   <ProductCard product={product} />
              // </SwiperSlide>
            );
          })
        }
      </Swiper>
    </div>

  );
};

export default FeaturedSlider;