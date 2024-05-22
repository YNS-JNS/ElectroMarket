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
import img from '/smart-watch1.png'
// import image1 from '../../../public/smart-watch1.png';
// import image2 from '../../../public/smart-watch2.png';
// import ProductCard from "../ProductCard";

const FeaturedSlider = () => {

  const products = [
    {
      id: 1, name: 'Headphones R12', image: img, newPrice: 100, oldPrice: 80,
    },
    {
      id: 2, name: 'Headphones R12', image: img, newPrice: 100, oldPrice: 80,
    },
    {
      id: 3, name: 'Headphones R12', image: img, newPrice: 100, oldPrice: 80,
    },
    {
      id: 4, name: 'Headphones R12', image: img, newPrice: 100, oldPrice: 80,
    },
    {
      id: 5, name: 'Headphones R12', image: img, newPrice: 100, oldPrice: 80,
    },
    {
      id: 6, name: 'Headphones R12', image: img, newPrice: 100, oldPrice: 80,
    },
   
    ];


  // const products = [
  //   {
  //     id: 1,
  //     name: 'Best Headphones Ever',
  //     defaultPrice: 100,
  //     price: 49,
  //     save: 50,
  //     image: image1,
  //     isNew: true,
  //     isTrending: true,
  //     buttonText: 'Add To Cart',
  //   },
  //   {
  //     id: 2,
  //     name: 'Best Headphones Ever',
  //     defaultPrice: 100,
  //     price: 80,
  //     save: 20,
  //     image: image2,
  //     isNew: true,
  //     isTrending: true,
  //     buttonText: 'Add To Cart',
  //   },
  //   {
  //     id: 3,
  //     name: 'Best Headphones Ever',
  //     defaultPrice: 100,
  //     price: 80,
  //     save: 20,
  //     image: image1,
  //     isNew: true,
  //     isTrending: true,
  //     buttonText: 'Add To Cart',
  //   },
  //   {
  //     id: 4,
  //     name: 'Best Headphones Ever',
  //     defaultPrice: 100,
  //     price: 80,
  //     save: 20,
  //     image: image2,
  //     isNew: true,
  //     isTrending: true,
  //     buttonText: 'Add To Cart',
  //   },
  //   {
  //     id: 5,
  //     name: 'Best Headphones Ever',
  //     defaultPrice: 100,
  //     price: 49,
  //     save: 50,
  //     image: image1,
  //     isNew: true,
  //     isTrending: true,
  //     buttonText: 'Add To Cart',
  //   },
  //   {
  //     id: 6,
  //     name: 'Best Headphones Ever',
  //     defaultPrice: 100,
  //     price: 80,
  //     save: 20,
  //     image: image2,
  //     isNew: true,
  //     isTrending: true,
  //     buttonText: 'Add To Cart',
  //   },
  // ]

  return (
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
      {products.map((product, index) => {
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
      })}
    </Swiper>
  );
};

export default FeaturedSlider;