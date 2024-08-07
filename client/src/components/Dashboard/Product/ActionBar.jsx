import React, { useState } from 'react';
import { HiOutlinePlusCircle, HiOutlineSearch } from 'react-icons/hi';
import CustomButton from '../../Ui/CustomButton';

const SORT_OPTIONS = [
    { value: '', label: 'Sort By' },
    { value: 'Title, DESC', label: 'Title, DESC' },
    { value: 'Title, ASC', label: 'Title, ASC' },
    { value: 'Price, DESC', label: 'Price, DESC' },
    { value: 'Price, ASC', label: 'Price, ASC' }
];

const STATUS_OPTIONS = [
    { value: '', label: 'All Status' },
    { value: 'inStock', label: 'InStock' },
    { value: 'outOfStock', label: 'OutOfStock' }
];

const BRAND_OPTIONS = [
    { value: '', label: 'All Brands' },
    { value: 'Oraimo', label: 'Oraimo' },
    { value: 'Apple', label: 'Apple' },
    { value: 'Samsung', label: 'Samsung' },
    { value: 'Nike', label: 'Nike' }
];

const CATEGORY_OPTIONS = [
    { value: '', label: 'All Categories' },
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Sports', label: 'Sports' },
    { value: 'Clothes', label: 'Clothes' },
    { value: 'Fournitures', label: 'Fournitures' }
];

const ActionBar = ({ onAddProduct, onSearchChange, onSortChange, onStatusFilterChange, onCombinedFilterChange }) => {
    const [selectedFilter, setSelectedFilter] = useState('');

    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
        onCombinedFilterChange(e);
    };

    const renderSelect = (id, options, onChange) => (
        <select id={id} className="select min-h-0 h-10 border-gray-300 rounded-lg bg-white" onChange={onChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );

    return (
        <div className="flex flex-col gap-4 p-4 mb-4 bg-white rounded-xl shadow-lg">
            {/* Section 1 */}
            <div className="flex justify-end">
                {/* Add New Product Button */}
                {/* <button
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-tl from-gray-900 to-slate-500 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85 disabled:pointer-events-none disabled:opacity-50"
                    onClick={onAddProduct}
                >
                    <HiOutlinePlusCircle className="text-xl" />
                    <span>New Product</span>
                </button> */}
                {/* <ButtonPrimary
                    label="New Product"
                    icon={HiOutlinePlusCircle}
                    onClick={() => console.log("New Product")}
                /> */}
                <CustomButton
                    label="New Product"
                    icon={HiOutlinePlusCircle}
                    onClick={() => console.log("New Product")}
                    variant='secondary'
                    // variant='ghost'
                    // disabled={true}

                />
            </div>

            {/* Section 2 */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    {renderSelect('SortBy', SORT_OPTIONS, onSortChange)}
                    {renderSelect('StatusFilter', STATUS_OPTIONS, onStatusFilterChange)}
                    <select
                        id="CombinedFilter"
                        className="select min-h-0 h-10 border-gray-300 rounded-lg bg-white"
                        value={selectedFilter}
                        onChange={handleFilterChange}
                    >
                        <option value="">All Brands & Categories</option>
                        <optgroup label="Brands">
                            {BRAND_OPTIONS.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </optgroup>
                        <optgroup label="Categories">
                            {CATEGORY_OPTIONS.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </optgroup>
                    </select>
                </div>

                <div className="relative">
                    <HiOutlineSearch fontSize={20} className="absolute text-gray-400 top-1/2 -translate-y-1/2 left-3" />
                    <input
                        type="search"
                        onChange={onSearchChange}
                        placeholder="Search..."
                        className="h-10 w-60 rounded-sm pl-10 pr-4 text-sm border border-gray-300 focus:outline-none bg-white text-gray-800"
                    />
                </div>
            </div>
        </div>
    );
};

export default ActionBar;
