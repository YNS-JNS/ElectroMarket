import React from 'react'
// Importing icons
import { MdOutlineDeleteOutline, MdEdit, MdOutlineVisibility } from 'react-icons/md';

const ProductRow = ({ product }) => {

    const { id, name, category, brand, price, quantity, status, image } = product;

    return (
        <>
            <tbody className="divide-y divide-gray-300">
                <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                    <td className="">
                        <div className="flex items-center py-5 px-5">
                            <input
                                type="checkbox"
                                value=""
                                className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                            />
                        </div>
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {id}
                    </td>
                    <td className="px-5 py-3">
                        <div className="w-48 flex items-center gap-3">
                            <img
                                src={image}
                                alt="Floyd image"
                                className="w-10 h-10 object-cover rounded-full"
                            />
                            <div className="data">
                                <p className="font-normal text-sm text-gray-900">{name}</p>
                                <p className="font-normal text-xs leading-5 text-gray-400">
                                    {brand}
                                </p>
                            </div>
                        </div>
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {category}
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {brand}
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        ${price}
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {quantity}
                    </td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        <div className="py-1.5 px-2.5 bg-emerald-50 rounded-full flex justify-start w-20 items-center gap-1">
                            <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="3" r="2.5" fill={status ? "#059669" : "#d61e1e"}></circle>
                            </svg>
                            <span className={`w-10 font-medium text-xs ${status === true ? "text-emerald-500" : "text-red-500"}`}>
                                {status === true ? "InStock" : "OutOfStock"}
                            </span>
                        </div>
                    </td>
                    {/* Actions Button */}
                    <td className="flex p-5 items-center gap-0.5">
                        <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-indigo-600 flex items-center">
                            <MdEdit className="text-indigo-500 group-hover:text-white" size={20} />
                        </button>
                        <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-red-600 flex items-center">
                            <MdOutlineDeleteOutline className="text-red-600 group-hover:text-white" size={20} />
                        </button>
                        <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-indigo-600 flex items-center">
                            <MdOutlineVisibility className="text-indigo-500 group-hover:text-white" size={20} />
                        </button>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default ProductRow