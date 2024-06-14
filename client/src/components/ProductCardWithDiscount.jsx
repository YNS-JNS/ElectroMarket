import React from "react";
import {Link} from "react-router-dom";

function ProductCardWithDiscount({ product }) {

    const { name, discount, image } = product;

    return (
        <Link href="/product" className="group w-full flex flex-col gap-2 py-3 px-3 items-center">
            <div className="group-hover:scale-105 transition-transform">
                <img src={image} width={140} height={140} alt="" />
            </div>
            <strong className="block font-normal text-gray-900 text-sm sm:text-lg md:text-md lg:text-sm xl:text-sm text-center">{name}</strong>
            <span className="badge badge-success text-green-600 bg-opacity-30">{discount}</span>
        </Link>
    )
}

export default ProductCardWithDiscount;