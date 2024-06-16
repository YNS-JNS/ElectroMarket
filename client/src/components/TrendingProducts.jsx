import React from "react"
import { RECOMMENDED_PRODUCTS } from "../lib/consts/products"

function TrendingProducts() {
    return (
        <div
            // className="container mx-auto my-6 border border-gray-300 bg-white rounded-lg flex overflow-hidden"
            className="container mx-auto my-6 border border-gray-300 bg-white rounded-lg overflow-hidden flex flex-col lg:flex-row"
        >
            {/* Section gauche avec l'image et le bouton */}
            <div
                // className="p-3 pr-12 w-[18rem] bg-cover bg-center bg-no-repeat"
                className="p-3 lg:pr-12 w-full lg:w-[18rem] bg-cover bg-center bg-no-repeat flex flex-col items-center lg:items-start"
                style={{ backgroundImage: "url('/images/offer-bg-2.png')" }}
            >
                <h3
                    className="text-xl text-gray-800 font-medium mb-4"
                >Casual, Formal & Trending Clothes</h3>
                <button className="btn btn-sm btn-secondary capitalize">Shop Now</button>
            </div>

             {/* Section droite avec les produits */}
            <div
                className="flex-1"
            >
                <div
                    // className="grid grid-cols-4"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
                >
                    {RECOMMENDED_PRODUCTS.slice(0, 4).map((product) => (
                        <div key={product.id} 
                        // className="relative min-h-[8rem] p-4 border-l border-l-gray-300"
                        className="relative min-h-[8rem] p-4 border-l lg:border-t-0 border-t border-gray-300"
                        >
                            <h2 
                            className="text-gray-900 text-sm sm:text-lg md:text-md lg:text-sm xl:text-sm pb-1"
                            // className="text-gray-900 text-sm sm:text-base md:text-md lg:text-sm xl:text-sm pb-1"
                            >{product.name}</h2>
                            <span 
                            className="text-sm sm:text-lg md:text-md lg:text-sm xl:text-sm text-gray-400 font-normal"
                            // className="text-sm sm:text-base md:text-md lg:text-sm xl:text-sm text-gray-400 font-normal"
                            >
                                From <br /> {product.price}
                            </span>
                            <img src={product.image} className="absolute w-[5rem] right-1 bottom-1" />
                        </div>
                    ))}
                </div>
                <div
                    // className="grid grid-cols-4"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
                >
                    {RECOMMENDED_PRODUCTS.slice(4, 8).map((product) => (
                        <div key={product.id} className="relative min-h-[8rem] p-4 border-l border-t border-gray-300">
                            <h2 
                            className="text-gray-900 text-sm sm:text-lg md:text-md lg:text-sm xl:text-sm pb-1"
                            // className="text-gray-900 text-sm sm:text-base md:text-md lg:text-sm xl:text-sm pb-1"
                            >{product.name}</h2>
                            <span 
                            className="text-sm sm:text-lg md:text-md lg:text-sm xl:text-sm text-gray-400 font-normal"
                            // className="text-sm sm:text-base md:text-md lg:text-sm xl:text-sm text-gray-400 font-normal"
                            >
                                From <br /> {product.price}
                            </span>
                            <img src={product.image} className="absolute w-[5rem] right-1 bottom-1" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrendingProducts
