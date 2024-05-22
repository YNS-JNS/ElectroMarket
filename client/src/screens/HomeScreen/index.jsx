import React from 'react'
// import OfferSlider from '../../components/OfferSlider';
import Categories from '../../components/Categories';
import HeroSlider from '../../components/Slider/HeroSlider';
// import ProductsLatest from '../../components/Product/ProductsLatest';
import Products from '../../components/Product/Products';
import FeaturedSlider from '../../components/Featured/FeaturedSlider';
import { Link } from 'react-router-dom';
// import Slider from '../../components/Slider';

const HomeScreen = () => {

    // const SliderData = [
    //     {
    //         "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
    //         "title": "Avatar: The Way of Water",
    //         "subTitle": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    //         "interval": 1500
    //     },
    //     {
    //         "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    //         "title": "Black Adam",
    //         "subTitle": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    //         "interval": 500
    //     },
    //     {
    //         "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
    //         "title": "Black Panther: Wakanda Forever",
    //         "subTitle": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    //         "interval": 2500
    //     }
    // ]

    return (
        <>
            {/* Hero Section  */}
            <HeroSlider />

            {/* Categories Section */}
            <Categories />

            {/* Latest Products Section */}
            {/* <ProductsLatest /> */}

            {/* Featured Products Section */}
            <div className='container mx-auto'>
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
                    <h2 className="text-2xl font-medium tracking-tight text-white">Trending Products</h2>
                    <Link to="/products" className="hidden text-sm font-semibold text-blue-600 hover:text-cyan-500 sm:block">
                        See more
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>
            </div>
            <FeaturedSlider />

            {/* All Products Section */}
            <Products />

            {/* Offer Section */}
            {/* <OfferSlider /> */}

            {/* <Slider slides={SliderData} /> */}

        </>
    )
}

export default HomeScreen;