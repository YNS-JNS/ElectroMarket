import React from 'react';
// Import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Images
import img1 from '/img_electro1.png'
import img2 from '/img_electro2.png'
import img3 from '/img_electro3.png'
import img4 from '/img_electro4.png'
import img5 from '/img_electro5.png'
import img6 from '/img_electro6.png'
import img7 from '/img_electro7.png'
// import CardCarousel from './CardCarousel';
// import ProductCard from '../Product/ProductCard';
import CardSlider from '../Trending/CardSlider';

const ProductCarousel = () => {

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
        <div className='my-10 mx-2 h-screen w-full border border-blue-500 flex items-center justify-center'>
            <div>
                <h1 className="text-2xl font-bold text-center my-10">Demo Carousel</h1>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                    className='container mx-auto my-10 px-6 py-10 border border-yellow-500 h-[550px] w-full flex items-center justify-center'
                >
                    {/* {categories.map((category, index) => ( */}
                    {products.map((product, index) => (
                        <SwiperSlide key={index} className='border border-red-600'>
                            <CardSlider product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default ProductCarousel;
