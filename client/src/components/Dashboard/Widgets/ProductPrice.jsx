import React from 'react'

const ProductPrice = () => {
    return (
        <div>
            <div className='my-4'>
                <h5
                    // className='text-xl font-bold text-[#344767]'
                    className='text-xl font-medium text-[#090909]'
                >Pricing</h5>
            </div>
            <div className="flex flex-row justify-start items-start gap-8">
                {/* Price */}
                <div>
                    <label className="text-sm text-gray-700 font-bold" htmlFor="price">Price</label>
                    <input
                        id="price"
                        type="number"
                        placeholder='99.99'
                        className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                    />
                </div>

                {/* Currency */}
                <div>
                    <label className="text-sm text-gray-700 font-bold" htmlFor="currency">Currency</label>
                    <select
                        id="currency"
                        className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                    >
                        <option>Dirham (MA)</option>
                        <option>Dollar (US)</option>
                        <option>Euro (EU)</option>
                        <option>Pound (UK)</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ProductPrice