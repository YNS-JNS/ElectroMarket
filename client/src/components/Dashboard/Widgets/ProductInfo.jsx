import React from 'react'
// import RichTextEditor from '../RichTextEditor'
import { Input, Textarea, Typography } from "@material-tailwind/react";

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
                    <div className="w-full flex flex-col gap-4">
                        {/* <label className="text-sm text-gray-900 font-medium" htmlFor="name">Name</label> */}
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Name
                        </Typography>
                        <Input
                            type="text"
                            placeholder="Product Name"
                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-1 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md"
                            labelProps={{
                                className: "hidden",
                            }}
                            containerProps={{ className: "min-w-[100px]" }}
                        />
                    </div>

                    {/* Description */}
                    {/* <div className='mt-4'>
                    <RichTextEditor />
                    </div> */}
                    <div className="mt-4 flex w-full flex-col gap-4">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Description
                        </Typography>
                        <Textarea variant="outlined" placeholder="Product Description" size="lg"
                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-1 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md"
                        />
                    </div>
                </div>

                <div className='flex flex-col w-1/2'>

                    {/* Weight */}
                    {/* <div>
                        <label className="text-xs text-gray-700 font-bold" htmlFor="weight">Weight</label>
                        <input
                            id="weight"
                            type="number"
                            placeholder='Weight in Gram'
                            className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div> */}
                    <div className="w-full flex flex-col gap-4">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Weight
                        </Typography>
                        <Input
                            type="number"
                            placeholder="Product Weight"
                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-1 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-md"
                            labelProps={{
                                className: "hidden",
                            }}
                            containerProps={{ className: "min-w-[100px]" }}
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