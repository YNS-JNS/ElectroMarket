// LatestProductCard.jsx
import React from 'react';

const LatestProductCard = ({ product }) => {

    const { name, image, newPrice, oldPrice } = product;

    return (
        <>
            {/* ________ Card ________ */}
            <div
                // 'bg-[#0f172a]'
                className='bg-[#fff] text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden transition hover:scale-105 ease-in-out delay-150 duration-500 hover:shadow-2xl border'
            >
                {/* ________ Badge ________ */}
                <div
                    className='p-5 flex flex-col gap-3'
                >
                    <div
                        className='flex items-center justify-between gap-2'
                    >
                        <span
                            className='px-3 py-1 rounded-full text-xs bg-blue-600 text-white drop-shadow-md'
                        >
                            New
                        </span>
                        <span
                            className='px-3 py-1 rounded-full text-xs bg-gray-100 border drop-shadow-md'
                        >
                            Trending
                        </span>
                    </div>
                </div>
                {/* ________ End Badge ________ */}

                {/* ________ Image ________  */}
                <div
                    className="flex justify-center items-center h-48"
                >
                    <img
                        src={image}
                        alt='product'
                        className='h-48 object-cover hover:cursor-pointer'
                    />
                </div>
                {/* ________ End Image ________  */}

                {/* ________ Content ________ */}
                <div
                    className='p-5 flex flex-col gap-3'
                >

                    {/* ________ Product title ________ */}
                    <h2
                        className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap text-neutral-800'
                        title="Smart Watch Oraimo">
                        {name}
                    </h2>
                    {/* ________ End Product title ________ */}

                    {/* ________ Product Price ________ */}
                    <div
                        className='flex items-center justify-between'
                    >
                        <div
                            className='flex items-center gap-2 mt-1'
                        >
                            <span
                                className='text-xl font-bold text-neutral-700'
                            >
                                ${newPrice}
                            </span>
                            <span
                                className='text-slate-600 text-sm line-through opacity-50'
                            >
                                ${oldPrice}
                            </span>
                        </div>
                        <span
                            className='bg-green-600 px-1.5 py-0.5 rounded-md text-xs text-white'
                        >
                            save {newPrice - oldPrice}%
                        </span>
                    </div>
                    {/* ________ End Product Price ________ */}

                    {/* ________ End Product action button ________ */}
                </div>
                {/* ________ End Content ________ */}
            </div>
            {/* ________ End Card ________ */}
        </>
    )
}

export default LatestProductCard;