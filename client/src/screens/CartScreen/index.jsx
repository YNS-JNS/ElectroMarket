import React from 'react';
import { AiOutlineClose, AiOutlineHeart, AiOutlineSave } from 'react-icons/ai';

const Cart = () => {
    return (
        <div className="container mx-auto min-h-1/2 pt-10">
            <div className='flex justify-start items-start'>
                <h1 className="mb-10 text-center text2xl font-medium">Cart Items</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-5">
                <div className="rounded-lg md:w-2/3">
                    {/* Product Item */}
                    <div className="relative justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        {/* Delete Icon */}
                        <AiOutlineClose title="Delete this item" className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-red-500" />
                        <div className='my-4 mt-8 flex justify-between w-full'>
                            <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" className="w-full rounded-lg sm:w-40" />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                {/* Sec 1 */}
                                <div className='flex flex-col justify-between'>
                                    {/* Product Information */}
                                    <div className="mt-5 sm:mt-0">
                                        <h2 className="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                                        <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                                    </div>
                                    {/* Events button */}
                                    <div className="flex flex-row space-x-2 mt-2">
                                        <AiOutlineSave className="text-blue-500 hover:underline cursor-pointer" title="Save for later" />
                                        <AiOutlineHeart className="text-blue-500 hover:underline cursor-pointer" title="Move to Wishlist" />
                                    </div>
                                </div>
                                {/* Sec 2 */}
                                <div className="flex flex-col justify-between h-full w-1/5">
                                    {/* Product Price */}
                                    <div className="h-1/3">
                                        <p className="text-md">259.00 $</p>
                                    </div>
                                    {/* Product Quantity */}
                                    <div className="h-1/3">
                                        <div className='flex items-center border-gray-100'>
                                            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                            <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" defaultValue="2" min="1" />
                                            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat for other product items */}
                    <div className="relative justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        {/* Delete Icon */}
                        <AiOutlineClose title="Delete this item" className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-red-500" />
                        <div className='my-4 mt-8 flex justify-between w-full'>
                        <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="product-image" className="w-full rounded-lg sm:w-40" />

                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                {/* Sec 1 */}
                                <div className='flex flex-col justify-between'>
                                    {/* Product Information */}
                                    <div className="mt-5 sm:mt-0">
                                        <h2 className="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                                        <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                                    </div>
                                    {/* Events button */}
                                    <div className="flex flex-row space-x-2 mt-2">
                                        <AiOutlineSave className="text-blue-500 hover:underline cursor-pointer" title="Save for later" />
                                        <AiOutlineHeart className="text-blue-500 hover:underline cursor-pointer" title="Move to Wishlist" />
                                    </div>
                                </div>
                                {/* Sec 2 */}
                                <div className="flex flex-col justify-between h-full w-1/5">
                                    {/* Product Price */}
                                    <div className="h-1/3">
                                        <p className="text-md">259.00 $</p>
                                    </div>
                                    {/* Product Quantity */}
                                    <div className="h-1/3">
                                        <div className='flex items-center border-gray-100'>
                                            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                            <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" defaultValue="2" min="1" />
                                            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                {/* Subtotal */}
                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 sm:w-full">
                    <div className="mb-2 flex justify-between">
                        <p className="text-sm text-gray-700">Subtotal</p>
                        <p className="text-sm text-gray-700">$129.99</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-700">Shipping</p>
                        <p className="text-sm text-gray-700">$4.99</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div>
                            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                            <p className="text-sm text-gray-700">including VAT</p>
                        </div>
                    </div>
                    <button
                        // className="flex justify-between middle none center rounded-lg bg-blue-500 bg-gradient-to-tl from-blue-900 to-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        className="flex justify-between middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <span className='ml-2'>Check out</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
