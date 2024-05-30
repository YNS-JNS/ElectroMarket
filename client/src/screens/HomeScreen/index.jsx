import React from 'react'
import Categories from '../../components/Categories';
import HeroSlider from '../../components/Slider/HeroSlider';
import Products from '../../components/Product/Products';
import FeaturedSlider from '../../components/Featured/FeaturedSlider';
import { Link } from 'react-router-dom';
import OfferSlider from '../../components/Slider/OfferSlider';

const HomeScreen = () => {

    return (
        <>
            {/* Hero Section  */}
            <HeroSlider />

            {/* Categories Section */}
            <Categories />

            {/* Featured Products Section */}
            <FeaturedSlider />

            {/* All Products Section */}
            <Products />

            <OfferSlider/>

        </>
    )
}

export default HomeScreen;