import React from 'react'
import ProductCard from '../../components/Product/ProductCard'
import image1 from '../../../public/smart-watch1.png';
import image2 from '../../../public/smart-watch2.png';

const ProductScreen = () => {

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
        <>
            <section>
                {/* container for products */}
                {/* <div className='container min-h-full px-6 py-6 mx-auto bg-slate-800'> */}
                <div className='container min-h-full px-6 py-6 mx-auto'>
                    <div className='lg:flex lg:mx-2'>
                        {/* <div className='space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 bg-slate-500'> */}
                        <div className='space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 border-r border-gray-600 mr-2'>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jackets & Coats</a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Hoodies</a>
                            <a href="#" className="block font-medium text-blue-600 dark:text-blue-500 hover:underline">T-shirts & Vests</a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Shirts</a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Blazers & Suits</a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jeans</a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Trousers</a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Shorts</a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Underwear</a>
                        </div>
                        <div className='mt-6 lg:mt-0 lg:px-2 lg:w-4/5'>
                            <div className='flex items-center justify-between text-sm tracking-widest uppercase border-b border-gray-600 pb-4'>
                                <p className="text-gray-500 dark:text-gray-300">6 Items</p>
                                <div className="flex items-center">
                                    <p className="text-gray-500 dark:text-gray-300">Sort</p>
                                    <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                        <option value="#">Recommended</option>
                                        <option value="#">Size</option>
                                        <option value="#">Price</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3'>
                                {products.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                            <div className='flex items-center justify-center mt-6'>
                                 {/* Pagination  */}
                            <div className="join">
                                <button className="join-item btn">1</button>
                                <button className="join-item btn">2</button>
                                <button className="join-item btn btn-disabled">...</button>
                                <button className="join-item btn">99</button>
                                <button className="join-item btn">100</button>
                            </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductScreen