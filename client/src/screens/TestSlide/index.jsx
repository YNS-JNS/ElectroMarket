import React from 'react';
import ProductCarousel from '../../components/Test/ProductCarousel';
// import TrendingSlider from '../../components/Trending/TrendingSlider'
// import ProductSlider from '../../components/Test/ProductSlider';
// import Carousel from '../../components/Carousel/Carousel'

const TestSlide = () => {
  return (
    <div className='h-screen flex items-center justify-center py-10'>
      {/* <TrendingSlider /> */}
      {/* <ProductSlider /> */}
      {/* <Carousel/> */}
      <ProductCarousel />
    </div>
  )
}

export default TestSlide;