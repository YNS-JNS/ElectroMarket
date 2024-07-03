import React from 'react'
import RichTextEditor from '../RichTextEditor'

const ProductInfo = () => {
    return (
        <div>
            <div className='my-4'>
                <h5
                // className='text-xl font-bold text-[#344767]'
                className='text-xl font-medium text-[#090909]'
                >Product Information</h5>
            </div>
            <div className='flex flex-row justify-center items-start gap-8'>
                <div className="flex flex-col w-1/2 ">
                    {/* Name */}
                    <div>
                        <label className="text-xs text-gray-700 font-bold" htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder='Product Name'
                            className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    {/* Description */}
                    <div className='mt-4'>
                        <RichTextEditor />
                    </div>
                </div>

                <div className='flex flex-col w-1/2'>
                    {/* Weight */}
                    <div>
                        <label className="text-xs text-gray-700 font-bold" htmlFor="weight">Weight</label>
                        <input
                            id="weight"
                            type="number"
                            placeholder='Weight in Gram'
                            className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    {/* Size */}
                    <div>
                        <label className="text-xs text-gray-700 font-bold" htmlFor="size">Size</label>
                        <input
                            id="size"
                            type="number"
                            placeholder='Size in inch'
                            className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="text-xs text-gray-700 font-bold" htmlFor="select">Category</label>
                        <select
                            id="select"
                            className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                        >
                            <option>Electronic</option>
                            <option>Mobile</option>
                            <option>Tangerang</option>
                            <option>Bandung</option>
                        </select>
                    </div>

                    {/* Brand */}
                    <div>
                        <label className="text-xs text-gray-700 font-bold" htmlFor="select">Brand</label>
                        <select
                            id="select"
                            className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
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
    )
}

export default ProductInfo