import React from 'react';
import ProductCard from './ProductCard';

// Images:
import img1 from '../../assets/images/img_electro1.png';
import img2 from '../../assets/images/img_electro2.png';
import img3 from '../../assets/images/img_electro3.png';
import img4 from '../../assets/images/img_electro4.png';
import img5 from '../../assets/images/img_electro5.png';
import img6 from '../../assets/images/img_electro6.png';
import img7 from '../../assets/images/img_electro7.png';

import { Link } from 'react-router-dom';

const ProductList = () => {

    const products = [
        {
            id: 1,
            name: 'Best Headphones Ever',
            defaultPrice: 100,
            price: 49,
            save: 50,
            image: img1,
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
            image: img2,
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
            image: img3,
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
            image: img4,
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
            image: img5,
            isNew: true,
            isTrending: true,
            buttonText: 'Add To Cart',
        },
        {
            id: 6,
            name: 'Best Headphones Ever',
            defaultPrice: 100,
            price: 80,
            save: 20,
            image: img6,
            isNew: true,
            isTrending: true,
            buttonText: 'Add To Cart',
        },
        {
            id: 7,
            name: 'Best Headphones Ever',
            defaultPrice: 100,
            price: 80,
            save: 20,
            image: img7,
            isNew: true,
            isTrending: true,
            buttonText: 'Add To Cart',
        },
        {
            id: 8,
            name: 'Best Headphones Ever',
            defaultPrice: 100,
            price: 80,
            save: 20,
            image: img1,
            isNew: true,
            isTrending: true,
            buttonText: 'Add To Cart',
        },
    ]

    return (
        <div className='container mx-auto my-10 border border-yellow-500'>
            {/* Title and Link */}
            <div className='w-full flex flex-row items-center justify-between px-2 border border-blue-500'>
                <h2 className="text-xl sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-medium tracking-tight text-white" >
                    Recommended Products
                </h2>

                <Link to="/products" className="text-xl sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-medium text-blue-600 hover:text-cyan-500 sm:block" >
                    See more
                    <span aria-hidden="true"> &rarr;</span>
                </Link>
            </div>

            {/* Grid Section */}
            <section
                className="mx-auto my-10 grid grid-cols-1 gap-y-10 gap-x-5 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default ProductList;
