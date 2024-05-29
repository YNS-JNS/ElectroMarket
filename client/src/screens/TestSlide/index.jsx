import React from 'react';
// import ProductSlider from '../../components/Test/ProductSlider';
// import TrendingSlider from '../../components/Trending/TrendingSlider'
import Carousel from '../../components/Carousel/Carousel'

const TestSlide = () => {
  return (
    <div className='h-screen flex items-center justify-center px-4 py-10'>
      {/* <TrendingSlider /> */}
      {/* <ProductSlider /> */}
      <Carousel/>
    </div>
  )
}

export default TestSlide;