import React, { useState } from 'react';

// Importing Images
import img1 from '../../../assets/images/img_electro1.png';
import img2 from '../../../assets/images/img_electro2.png';
import img3 from '../../../assets/images/img_electro3.png';
import img4 from '../../../assets/images/img_electro4.png';
import img5 from '../../../assets/images/img_electro5.png';
import img6 from '../../../assets/images/img_electro6.png';
import img7 from '../../../assets/images/img_electro7.png';
import ProductRow from './ProductRow';
import ActionBar from './ActionBar';

const ProductList = () => {
    // const [filter, setFilter] = useState('');
    const products = [
        { id: 1, name: 'Smartwatch MT12', category: 'Electronics', brand: 'Oraimo', price: 199.00, quantity: 95, status: true, image: img1 },
        { id: 2, name: 'Smartwatch XYZ', category: 'Electronics', brand: 'Oraimo', price: 99.00, quantity: 1000, status: true, image: img2 },
        { id: 3, name: 'Iphone Pro 14', category: 'Electronics', brand: 'Apple', price: 800.00, quantity: 200, status: true, image: img3 },
        { id: 4, name: 'Baf JBL', category: 'Electronics', brand: 'JBL', price: 99.00, quantity: 1000, status: false, image: img4 },
        { id: 5, name: 'Samsung GHI', category: 'Electronics', brand: 'Samsung', price: 99.00, quantity: 1000, status: true, image: img5 },
        { id: 6, name: 'Casque JBL', category: 'Electronics', brand: 'JBL', price: 30.00, quantity: 1000, status: false, image: img6 },
        { id: 7, name: 'Casque R12', category: 'Electronics', brand: 'Xiaomi', price: 49.00, quantity: 50, status: false, image: img7 },
    ];

    const handleAddProduct = () => {
        // Implement add product functionality here
    };

    const handleSearchChange = () => {
        // setFilter(e.target.value);
    };


    return (
        <div className="container mx-auto">
            <div className="flex flex-col">
                <ActionBar onAddProduct={handleAddProduct} onSearchChange={handleSearchChange} />
                <div className="overflow-x-auto pb-4">
                    <div className="min-w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg border-gray-300">
                            <table className="table-auto min-w-full rounded-xl">

                                {/* Table Header */}
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="">
                                            <div className="flex items-center py-5 px-5">
                                                <input
                                                    type="checkbox"
                                                    value=""
                                                    className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                                                />
                                            </div>
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            Product ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px]"
                                        >
                                            Product Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            Brand
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            Quantity
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                {
                                    products && products.map((product) => (
                                        <ProductRow key={product.id} product={product} />
                                    ))
                                }

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
