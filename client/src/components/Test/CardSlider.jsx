// CardSlider.jsx
import React from 'react';
// import PropTypes from 'prop-types';

const CardSlider = ({ image, name, newPrice, oldPrice }) => {
    return (
        <div className='bg-white flex flex-col justify-center items-center border rounded-2xl w-full h-auto overflow-hidden py-8 px-1 shadow-md'>
            <a href="#" className="block text-inherit no-underline">
                <div className="text-center text-1xl font-semibold text-black">
                    {name}
                </div>
                <figure className="flex justify-center items-center w-full h-full my-4 bg-transparent">
                    <img src={image} alt={name} className="w-50 h-56 object-cover" />
                </figure>
                <div className="flex items-center justify-between text-center text-black text-lg mt-2">
                    <div>
                        <span className="font-semibold text-1xl">{newPrice}</span> &nbsp;
                        <small>
                            <del className="text-gray-400">{oldPrice}</del>
                        </small>
                    </div>
                    <div className="text-1xl">
                        <span className="badge badge-lg bg-red-600 text-white py-2 px-4 rounded-md">
                            NEW 🔥
                        </span>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-4 w-full'>
                    <button className='text-md bg-indigo-600 hover:bg-indigo-500 px-4 py-4 rounded-md text-white font-medium tracking-wider transition w-full'>
                        Buy Now
                    </button>
                </div>
            </a>
        </div>

    );
};

// CardSlider.propTypes = {
//     image: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     newPrice: PropTypes.string.isRequired,
//     oldPrice: PropTypes.string.isRequired,
// };

export default CardSlider;