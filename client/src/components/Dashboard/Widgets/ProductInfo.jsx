import React from 'react';

const ProductInfo = () => {
    return (
        <div>
            <div className='my-4'>
                <h5 className='text-xl font-medium text-[#090909]'>Product Information</h5>
            </div>
            <div className='flex flex-row justify-center items-start gap-8'>
                <div className="flex flex-col w-1/2">
                    {/* Name */}
                    <div>
                        <label className="text-sm text-gray-700 font-bold" htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder='Product Name'
                            className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Description */}
                    <div className='mt-4'>
                        <div>
                            <label className="text-sm text-gray-700 font-bold" htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                rows="4"
                                className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                                placeholder="Bio"
                            />
                        </div>
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="text-sm text-gray-700 font-bold" htmlFor="quantity">Quantity</label>
                        <input
                            id="quantity"
                            type="number"
                            placeholder='100'
                            className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                        />
                    </div>

                </div>

                <div className='flex flex-col w-1/2'>
                    {/* Weight */}
                    <div>
                        <label className="text-sm text-gray-700 font-bold" htmlFor="weight">Weight</label>
                        <input
                            id="weight"
                            type="number"
                            placeholder='Weight in Gram'
                            className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Size */}
                    <div>
                        <label className="text-sm text-gray-700 font-bold" htmlFor="size">Size</label>
                        <input
                            id="size"
                            type="number"
                            placeholder='Size in inch'
                            className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="text-sm text-gray-700 font-bold" htmlFor="category">Category</label>
                        <select
                            id="category"
                            className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                        >
                            <option>Electronic</option>
                            <option>Mobile</option>
                            <option>Tangerang</option>
                            <option>Bandung</option>
                        </select>
                    </div>

                    {/* Brand */}
                    <div>
                        <label className="text-sm text-gray-700 font-bold" htmlFor="brand">Brand</label>
                        <select
                            id="brand"
                            className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                        >
                            <option>Nike</option>
                            <option>Apple</option>
                            <option>Samsung</option>
                            <option>Google</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
