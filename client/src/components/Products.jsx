import React from 'react';
import CardProduct from './CardProduct';

const products = [
    {
        id: 1,
        imgSrc: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand",
        name: "Product Name",
        price: 149,
        originalPrice: 199,
    },
    {
        id: 2,
        imgSrc: "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand",
        name: "Product Name",
        price: 149,
        originalPrice: 199,
    },
    {
        id: 3,
        imgSrc: "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand",
        name: "Product Name",
        price: 149,
        originalPrice: 199,
    },
    {
        id: 4,
        imgSrc: "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand",
        name: "Product Name",
        price: 149,
        originalPrice: 199,
    },
    {
        id: 5,
        imgSrc: "https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand",
        name: "Product Name",
        price: 149,
        originalPrice: 199,
    },
    {
        id: 4,
        imgSrc: "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        brand: "Brand",
        name: "Product Name",
        price: 149,
        originalPrice: 199,
    },
];

const Products = () => {
    return (
        <>
            <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">All Products</h1>
            </div>

            {/* Grid Section */}
            <section
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-8 mt-10 mb-5"
            >
                {products.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </section>
        </>
    );
};

export default Products;
