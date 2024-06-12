import React from 'react';
// Import style:
import './style.css';
const ProductCard = ({ product }) => {

    // Web Site For SVG : https://lineicons.com/free-icons/akar-icons

    return (
        <>
            {/* ________ Card ________ */}
            <div
                className='product_card bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden transition hover:shadow-2xl cursor-pointer'
            >
                {/* ________ Image ________  */}
                <div
                    className="flex items-center justify-center p-2"
                >
                    <img
                        src={product.image}
                        alt='product' className='product_image w-full h-full object-contain max-w-48 max-h-48'
                    />
                </div>

                {/* ________ Content ________ */}
                <div className='p-4 sm:p-5 md:p-6 flex flex-col gap-3'>

                    {/* ________ Badge ________ */}
                    <div className='flex items-center justify-between gap-2'>
                        <span
                            className='px-3 py-1 rounded-full text-xs bg-blue-600 text-white drop-shadow-md'
                        // className='px-2 py-1 rounded-full text-xs sm:text-sm md:text-base bg-blue-600 text-white' 
                        >
                            {product.isNew ? 'New' : ''}
                        </span>
                        <span
                            className='px-3 py-1 rounded-full text-xs bg-gray-100 border drop-shadow-md'
                        // className='px-2 py-1 rounded-full text-xs sm:text-sm md:text-base bg-gray-100 border'
                        >
                            {product.isTrending ? 'Trending' : ''}
                        </span>
                    </div>

                    {/* ________ Product title ________ */}
                    <h2
                        className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'
                        title={product.name}
                    >
                        {product.name}
                    </h2>

                    {/* ________ Product Price ________ */}
                    <div className='flex items-center justify-between'>
                        <span className='text-xl font-bold'>
                            ${product.price}
                        </span>
                        <div className='flex items-center gap-2 mt-1'>
                            <span className='text-sm line-through opacity-50'>
                                ${product.defaultPrice}
                            </span>
                            <span className='bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white'>
                                save {product.save}%
                            </span>
                        </div>
                    </div>

                    {/* ________ Product Rating ________ */}
                    <span className='flex items-center mt-1'>
                        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <span className='text-xs ml-2 text-gray-500'>
                            20k reviews
                        </span>
                    </span>

                    {/* ________ Product action button ________ */}
                    <div className='mt-4 flex gap-2'>
                        {/* ___ Add To Cart Button ___ */}
                        <button
                            // className='text-sm bg-gray-300/60 hover:bg-white border hover:border-black px-6 py-2 rounded-md font-medium tracking-wider transition'
                            className='text-xs sm:text-sm md:text-base bg-gray-300/60 hover:bg-white border hover:border-black px-4 sm:px-6 py-2 rounded-md font-medium transition'
                        >
                            {product.buttonText}
                        </button>
                        {/* ___ Wishlist Button ___ */}
                        <button
                            className='flex-grow flex justify-center items-center bg-gray-300/60 transition rounded-md hover:bg-white border hover:border-black'
                        >
                            <svg width="32" height="32" viewBox="0 0 512 512" style={{ color: 'currentColor' }} xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                                <rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" strokeWidth="0" strokeOpacity="100%" paintOrder="stroke"></rect>
                                <svg width="256px" height="256px" viewBox="0 0 24 24" fill="currentColor" x="128" y="128" role="img" style={{ display: 'inline-block', verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg">
                                    <g fill="currentColor">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z" />
                                    </g>
                                </svg>
                            </svg>
                        </button>
                        {/* ___ Preview Button ___ */}
                        <button className='flex-grow flex justify-center items-center bg-gray-300/60 transition rounded-md hover:bg-white border hover:border-black'>
                            <svg width="32" height="32" viewBox="0 0 512 512" style={{ color: 'currentColor' }} xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                                <rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" strokeWidth="0" strokeOpacity="100%" paintOrder="stroke"></rect>
                                <svg width="256px" height="256px" viewBox="0 0 24 24" fill="currentColor" x="128" y="128" role="img" style={{ display: 'inline-block', verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg">
                                    <g fill="currentColor">
                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </g>
                                    </g>
                                </svg>
                            </svg>
                        </button>
                    </div>
                    {/* ________ End Product action button ________ */}
                </div>
                {/* ________ End Content ________ */}
            </div>
            {/* ________ End Card ________ */}
        </>
    )
}

export default ProductCard;