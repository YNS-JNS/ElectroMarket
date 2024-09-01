import React from 'react'
import ProductDetailsOverview from '../../ProductDetailsOverview'
import { useEffect, useState } from "react"
import Loading from '../../Ui/Loading';

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
                <Loading />
            )}
        </div>
    )
}
