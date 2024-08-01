import React from 'react'
import ProductDetailsOverview from '../../ProductDetailsOverview'
import { useEffect, useState } from "react"

export default function ProductPreview() {

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
        <div className='container mx-auto my-4'>
                {product ? (
                    <>
                        <ProductDetailsOverview product={product} />
                    </>
                ) : (
                    <div className="p-12 flex min-h-[22rem]">
                        <span className="m-auto loading loading-ring loading-lg"></span>
                    </div>
                )}
        </div>
    )
}
