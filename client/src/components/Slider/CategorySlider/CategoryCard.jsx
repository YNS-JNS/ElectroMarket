import React from 'react'

const CategoryCard = ({ category }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 border border-neutral-600 rounded-lg shadow-lg cursor-pointer h-[12rem]">
            <img src={category.image} alt={category.title} className="h-full w-full  max-w-32 max-h-32 object-contain mb-4 rounded-md" />
            <h2 className="text-xl font-bold text-center">{category.title}</h2>
        </div>


    )
}

export default CategoryCard;