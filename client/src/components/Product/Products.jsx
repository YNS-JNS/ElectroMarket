import React from 'react';
import ProductCard from './ProductCard';
import image1 from '/smart-watch1.png';
import image2 from '/smart-watch2.png';
import { Link } from 'react-router-dom';

const Products = () => {

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
        {
            id: 6,
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
            id: 7,
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
            id: 8,
            name: 'Best Headphones Ever',
            defaultPrice: 100,
            price: 80,
            save: 20,
            image: image2,
            isNew: true,
            isTrending: true,
            buttonText: 'Add To Cart',
        },
    ]

    return (
        <div className='container mx-auto my-4'>
            {/* <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">🔷 All Products</h1>
            </div> */}
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
                <h2 className="text-xl font-medium tracking-tight text-white">All Products</h2>
                <Link to="/products" className="hidden text-xl font-semibold text-blue-600 hover:text-cyan-500 sm:block">
                    See more
                    <span aria-hidden="true"> &rarr;</span>
                </Link>
            </div>

            {/* Grid Section */}
            <section
                // className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-8 mt-10 mb-5"
                className="mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-8 mt-10 mb-5"
            >
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default Products;
