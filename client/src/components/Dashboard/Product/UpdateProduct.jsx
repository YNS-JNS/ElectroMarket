import React, { useState } from 'react';
import { HiOutlineSave } from 'react-icons/hi';
// Images
import img1 from '../../../assets/images/img_electro1.png';
import img2 from '../../../assets/images/img_electro2.png';
import img3 from '../../../assets/images/img_electro3.png';
import img4 from '../../../assets/images/img_electro4.png';

const UpdateProduct = () => {

  const productImg = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
  ];

  const [selectedImage, setSelectedImage] = useState(productImg[0].image);

  return (
    <div className="flex flex-col">

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>

      {/* Section 1: Heading Bar */}
      <div className="flex items-center justify-between bg-white rounded-xl p-4 mb-4 shadow-lg">
        <h2 className="text-xl font-normal">
          Make the changes below
        </h2>
        <button
          className="flex items-center gap-2 rounded-lg bg-gradient-to-tl from-gray-900 to-slate-500 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85 disabled:pointer-events-none disabled:opacity-50"
        // onClick={handleSave}
        >
          <HiOutlineSave className="text-xl" />
          <span>Save</span>
        </button>
      </div>

      {/* Section 2: Product Images and Details */}
      <div className="my-4 flex gap-6">

        {/* Product images */}
        <div className="w-1/3 h-auto bg-white rounded-xl shadow-lg p-4">
          <h3 className="text-lg font-medium mb-2">Product Images</h3>
          <div>
            <div className="w-72 aspect-[4/3] overflow-hidden rounded-lg border border-gray-300 flex items-center justify-center">
              <div className="max-w-full">
                <img src={selectedImage} alt="" className="w-56 h-56 object-contain" />
                {/* NB: Use object-contain when: You want to ensure the entire image is visible. */}
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {/* images  */}
              {productImg.map((img, idx) => (
                <div
                  key={idx}
                  className={`w-20 h-16 rounded border border-gray-300 overflow-hidden hover:cursor-pointer ${selectedImage === img.image ? "border-2 border-blue-700" : ""}`}
                  onClick={() => setSelectedImage(img.image)}
                >
                  <img src={img.image} alt={`Product ${idx + 1}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className='flex justify-between'>
            <button className="btn btn-primary mt-4">Edit</button>
            <button className="btn btn-white border border-slate-500 mt-4">Remove</button>
          </div>
        </div>

        {/* Product details */}
        <div className="w-2/3 h-auto bg-white rounded-xl shadow-lg p-4">
          <div>
            <div className='my-4'>
              <h5 className='text-xl font-medium text-[#090909]'>Product Information</h5>
            </div>
            <div className='flex flex-row justify-center items-start gap-8'>
              <div className="flex flex-col w-1/2">
                {/* Name */}
                <div>
                  <label className="text-sm text-gray-700 font-bold" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder='Product Name'
                    className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                  />
                </div>

                {/* Description */}
                <div className='mt-4'>
                  <div>
                    <label className="text-sm text-gray-700 font-bold" htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      rows="4"
                      className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                      placeholder="Bio"
                    />
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="text-sm text-gray-700 font-bold" htmlFor="quantity">Quantity</label>
                  <input
                    id="quantity"
                    type="number"
                    placeholder='100'
                    className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                  />
                </div>

              </div>

              <div className='flex flex-col w-1/2'>
                {/* Weight */}
                <div>
                  <label className="text-sm text-gray-700 font-bold" htmlFor="weight">Weight</label>
                  <input
                    id="weight"
                    type="number"
                    placeholder='Weight in Gram'
                    className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                  />
                </div>

                {/* Size */}
                <div>
                  <label className="text-sm text-gray-700 font-bold" htmlFor="size">Size</label>
                  <input
                    id="size"
                    type="number"
                    placeholder='Size in inch'
                    className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm text-gray-700 font-bold" htmlFor="category">Category</label>
                  <select
                    id="category"
                    className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                  >
                    <option>Electronic</option>
                    <option>Mobile</option>
                    <option>Tangerang</option>
                    <option>Bandung</option>
                  </select>
                </div>

                {/* Brand */}
                <div>
                  <label className="text-sm text-gray-700 font-bold" htmlFor="brand">Brand</label>
                  <select
                    id="brand"
                    className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                  >
                    <option>Nike</option>
                    <option>Apple</option>
                    <option>Samsung</option>
                    <option>Google</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Section 3 */}
      <div className="my-4 flex gap-6">
        {/* Social links */}
        <div className="w-1/3 h-auto bg-white rounded-xl shadow-lg p-4">
          <h3 className="text-lg font-medium mb-2">Social Links</h3>
          <div className='flex flex-col'>

            {/* Instagram */}
            <div>
              <label className="text-xs text-gray-700 font-bold" htmlFor="shopify">Shopify Handle</label>
              <input
                id="shopify"
                type="text"
                placeholder='@soft'
                className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            {/* Facebook */}
            <div>
              <label className="text-xs text-gray-700 font-bold" htmlFor="facebook">Facebook Account</label>
              <input
                id="facebook"
                type="text"
                placeholder='https://facebook.com/'
                className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            {/* Instagram */}
            <div>
              <label className="text-xs text-gray-700 font-bold" htmlFor="instagram">Instagram Account</label>
              <input
                id="instagram"
                type="text"
                placeholder='https://instagram.com/'
                className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>

        </div>

        {/* Pricing */}
        <div className="w-2/3 h-auto bg-white rounded-xl shadow-lg p-4">
          <div className='my-4'>
            <h5 className='text-xl font-medium text-[#090909]'>Pricing</h5>
          </div>
          <div className="flex flex-row justify-start items-start gap-8">
            {/* Price */}
            <div>
              <label className="text-xs text-gray-700 font-bold" htmlFor="price">Price</label>
              <input
                id="price"
                type="number"
                placeholder='99.99'
                className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            {/* Currency */}
            <div>
              <label className="text-xs text-gray-700 font-bold" htmlFor="select">Currency</label>
              <select
                id="select"
                className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Dirham (MA)</option>
                <option>Dollar (US)</option>
                <option>Euro (EU)</option>
                <option>Pound (UK)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UpdateProduct;
