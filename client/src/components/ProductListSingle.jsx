import React from "react"
import {Link} from "react-router-dom"

function ProductListSingle({ product }) {
    return (
        <Link
            href="/product"
            key={product.id}
            className="group bg-white rounded-lg border border-gray-300 p-3 flex gap-6 hover:no-underline hover:shadow-lg"
        >
            <div className="aspect-square h-[10.5rem] min-w-[10.5rem] bg-gray-100 rounded-lg overflow-hidden">
                <img
                    src={product.thumbnail}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
            </div>
            <div>
                <h2 className="text-xl font-medium">{product.title}</h2>
                <div className="pt-1 flex items-center gap-3">
                    <strong className="text-base font-medium text-gray-800">${product.price.toFixed(2)}</strong>
                    <span className="text-base font-medium text-gray-500 line-through">${(product.price + 59).toFixed(2)}</span>
                    <span className="text-green-600 text-sm font-semibold">{product.discountPercentage}%</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="rating rating-sm disabled">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <input
                                key={rating}
                                type="radio"
                                className={`mask mask-star-2 ${
                                    Math.round(product.rating) >= rating ? "bg-orange-400" : "bg-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                    <span className="text-base text-green-600">Free Shipping</span>
                </div>
                <p className="py-2 text-gray-500 text-base">{product.description}</p>
                <span className="text-lg link link-primary no-underline">View details</span>
            </div>
        </Link>
    )
}

export default ProductListSingle
