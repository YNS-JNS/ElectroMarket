import React, { useState } from "react"
import { Link } from "react-router-dom"
import { RiAddFill, RiCheckboxCircleFill, RiShieldCheckFill, RiSubtractFill } from "react-icons/ri"

import img1 from '../../public/images/recommended/1.png'
import img2 from '../../public/images/recommended/2.png'
import img3 from '../../public/images/recommended/3.png'
import img4 from '../../public/images/recommended/4.png'

function ProductDetailsOverview({ product }) {

    const { brand, images, description, price, rating, discountPercentage, thumbnail, title, stock } = product;

    const productImg = [
        { id: 1, image: img1 },
        { id: 2, image: img2 },
        { id: 3, image: img3 },
        { id: 4, image: img4 },
    ];

    const [selectedImage, setSelectedImage] = useState(productImg[0].image);


    console.log(productImg[0].image);


    return (
        <div>
            <div className="bg-white p-6 rounded-lg border border-gray-300 flex gap-6">
                <div>
                    <div className="w-[32rem] aspect-[4/3] overflow-hidden rounded-lg border border-gray-300 flex items-center justify-center">
                        <div className="max-w-full">
                            <img src={selectedImage} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                        {/* images  */}
                        {productImg.map((img, idx) => (
                            <div
                                key={idx}
                                className={`w-20 h-16 rounded border border-gray-300 overflow-hidden hover:cursor-pointer ${selectedImage === img.image ? "border-2 border-blue-700" : ""}`}
                                onClick={() => setSelectedImage(img.image)}
                            >
                                <img src={img.image} alt={`Product ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="font-medium text-xl text-neutral-700">{title}</h2>
                    <p className="text-sm">
                        Brand:{" "}
                        <Link href="#" className="link link-primary no-underline">
                            {brand}
                        </Link>
                    </p>
                    <div className="pb-3 pt-1 text-sm text-gray-400">{stock} In Stock</div>
                    <div className="pt-1 flex items-center gap-3">
                        <strong className="text-xl font-medium text-gray-800">${price.toFixed(2)}</strong>
                        <span className="text-xl font-medium text-gray-500 line-through">${(price + 59).toFixed(2)}</span>
                        <span className="text-green-500 text-sm font-semibold">{discountPercentage}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="rating rating-sm disabled">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <input
                                    key={rating}
                                    type="radio"
                                    className={`mask mask-star-2 ${Math.floor(rating) >= rating ? "bg-orange-400" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-base text-orange-400">{rating}</span>
                        <span className="text-lg text-green-500 ml-2">Free Shipping</span>
                        <span className="badge badge-lg bg-emerald-600 text-white ml-2 gap-2 pl-1.5">
                            <RiCheckboxCircleFill fontSize={18} /> Assured
                        </span>
                    </div>
                    <div className="py-4 max-w-lg text-base">
                        <p>{description}</p>
                    </div>
                    <div className="join py-4">
                        <button className="join-item btn btn-sm px-2 border border-gray-300">
                            <RiAddFill fontSize={20} />
                        </button>
                        <button className="btn btn-sm px-4 join-item pointer-events-none bg-white border border-gray-300">
                            0
                        </button>
                        <button className="join-item btn btn-sm px-2 border border-gray-300">
                            <RiSubtractFill fontSize={20} />
                        </button>
                    </div>
                    <div className="flex gap-3">
                        <Link href="/cart" className="btn btn-secondary capitalize hover:no-underline">
                            Buy Now
                        </Link>
                        <Link href="/cart" className="btn btn-accent capitalize hover:no-underline">
                            Add To Cart
                        </Link>
                    </div>
                    <div className="pt-4 flex items-center gap-3 text-sm text-gray-500">
                        <RiShieldCheckFill fontSize={22} />
                        Safe and Secure Payments. Easy returns.
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 pt-4 rounded-lg border border-gray-300 gap-6 mt-6">
                <h2 className="mb-8 text-lg">Specifications</h2>
                <div className="flow-root">
                    <dl className="-my-3 divide-y divide-gray-100">
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-base font-medium text-gray-900">Primary Camera Available</dt>
                            <dd className="text-base text-gray-700 sm:col-span-2">Yes</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-base font-medium text-gray-900">Primary Camera</dt>
                            <dd className="text-base text-gray-700 sm:col-span-2">12MP + 12MP</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-base font-medium text-gray-900">Secondary Camera Available</dt>
                            <dd className="text-base text-gray-700 sm:col-span-2">Yes</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-base font-medium text-gray-900">Secondary Camera</dt>
                            <dd className="text-base text-gray-700 sm:col-span-2">8MP Front Camera</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-base font-medium text-gray-900">Secondary Camera Features</dt>
                            <dd className="text-base text-gray-700 sm:col-span-2">
                                F2.4, Fixed Focus, Photo Maximum: 3264 x 2448, Video: 1080p, 30 fps
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="text-base font-medium text-gray-900">Primary Camera Features</dt>
                            <dd className="text-base text-gray-700 sm:col-span-2">
                                Co-Engineered with Leica, Light Painting (Tail Light Trails, Light Graffiti, Silky
                                Water, Star Track), Super Night, Pro Camera, Beauty, Beauty Video, Panorama, HDR,
                                Watermark, Audio Note, Ultra Snapshot, Capture Smiles, Audio Control, Timer, Touch to
                                Capture, Monochrome, Document Recognition, Virtual Aperture Photo, Film Mode, F2.2, Auto
                                Focus, HD Video Recording At 120FPS, Slow Motion Recording, BSI CMOS, Photo Maximum:
                                3968 x 2976, Video: 1080p, 60 fps
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsOverview
