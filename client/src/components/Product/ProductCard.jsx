import React from 'react';
import CustomButton from '../Ui/CustomButton';
// Import style:
import './style.css';

// Import Icons:
import { FaRegHeart } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

const ProductCard = ({ product }) => {

    // Web Site For SVG : https://lineicons.com/free-icons/akar-icons

    return (
        <>
            {/* ________ Card ________ */}
            <div className='product_card bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden transition hover:shadow-2xl cursor-pointer border' >
                {/* ________ Image ________  */}
                <div className="flex items-center justify-center p-2" >
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
                            <span className='bg-green-600 px-1.5 py-0.5 rounded-md text-xs text-white'>
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
                    <div className='mt-4 flex items-center justify-between gap-2'>
                        {/* Add To Cart Button */}
                        <CustomButton
                            label={product.buttonText}
                            onClick={() => console.log("Add To Cart")}
                            variant='secondary'
                            width={'80%'}
                            fontSize={'12px'}
                            padding="8px 4px"
                            margin="0px 0px"
                        />
                        {/* Add To Wishlist Button */}
                        <CustomButton
                            onClick={() => console.log("Add To Wishlist")}
                            leftIcon={FaRegHeart}
                            variant='secondary'
                            width={'20%'}
                            fontSize={'12px'}
                            padding="10px 4px"
                            margin="0px 0px"
                        />
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