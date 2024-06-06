import React from 'react'
import HeroSlider from '../../components/Slider/HeroSlider';
import CategorySlider from '../../components/Slider/CategorySlider';
import LatestProductSlider from '../../components/Slider/LatestProductSlider';
import ProductList from '../../components/Product/ProductList';

const HomeScreen = () => {

    return (
        <>
            {/* Hero Section  */}
            <HeroSlider />

            {/* Categories Section */}
            <CategorySlider />

            {/* Featured Products Section Carousel */}
            <LatestProductSlider />

            {/* All Products Section */}
            <ProductList />

        </>
    )
}

export default HomeScreen;