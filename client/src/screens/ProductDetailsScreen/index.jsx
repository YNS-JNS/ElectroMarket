import React from 'react'
import ProductDetailsOverview from "../../components/ProductDetailsOverview"
import { useEffect, useState } from "react"

export default function ProductDetailsScreen() {

    const [product, setProduct] = useState(null);

    async function fetchProduct() {
        const data = await fetch("https://dummyjson.com/products/5").then((res) => res.json())
        // console.log(data)
        setProduct(data)
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div className='container mx-auto my-10'>
                {product ? (
                    <>
                        <ProductDetailsOverview product={product} />
                        {/* <RecommendedProducts /> */}
                    </>
                ) : (
                    <div className="p-12 flex min-h-[22rem]">
                        <span className="m-auto loading loading-ring loading-lg"></span>
                    </div>
                )}
        </div>
    )
}
