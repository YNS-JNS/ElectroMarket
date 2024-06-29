import React from 'react';

function AddProduct() {
  return (
    <div>
      {/* First Form Section */}
      <section className="max-w-full  p-6 mx-auto bg-white rounded-md shadow-md mt-4 mb-10">
        <h1 className="text-2xl font-medium text-black mb-4">Add New Product</h1>
        <h6 className="text-base mb-4">Fill out the form to add a new product.</h6>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label className="text-lg text-black" htmlFor="username1">Name</label>
              <input
                id="username1"
                type="text"
                className="text-base block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-lg text-black" htmlFor="textarea">Description</label>
              <textarea
                id="textarea"
                className="text-base block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>

            {/* Category */}
            <div>
              <label className="text-lg text-black" htmlFor="select">Category</label>
              <select
                id="select"
                className="text-base block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Electronic</option>
                <option>Mobile</option>
                <option>Tangerang</option>
                <option>Bandung</option>
              </select>
            </div>

            {/* Brand */}
            <div>
              <label className="text-lg text-black" htmlFor="select">Brand</label>
              <select
                id="select"
                className="text-base block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Nike</option>
                <option>Apple</option>
                <option>Samsung</option>
                <option>Google</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="text-lg text-black" htmlFor="price">Price</label>
              <input
                id="price"
                type="number"
                className="text-base block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

             {/* Quantity */}
             <div>
              <label className="text-lg text-black" htmlFor="price">Quantity</label>
              <input
                id="price"
                type="number"
                className="text-base block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            {/* Image */}
            <div>
              <label className="block text-lg font-medium  text-black">Image</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-black"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-black">or drag and drop</p>
                  </div>
                  <p className="text-xs text-black">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border border-gray-800">
              Save
            </button>
          </div>
        </form>
      </section>

    </div>
  );
}

export default AddProduct;
