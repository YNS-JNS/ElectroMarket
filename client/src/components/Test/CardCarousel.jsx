import React from 'react'

const CardCarousel = ({ category }) => {
    return (
            <div className="h-[300px] w-[200px] flex flex-col items-center justify-center p-4 dark:bg-gray-800 rounded-lg shadow-lg">
                <img src={category.image} alt={category.title} className="w-32 h-32 object-cover mb-4 rounded-md" />
                <h2 className="text-xl font-bold text-center">{category.title}</h2>
            </div>
    )
}

export default CardCarousel