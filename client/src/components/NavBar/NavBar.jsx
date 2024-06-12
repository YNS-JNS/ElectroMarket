import React from 'react'

const NavBar = () => {
    return (
        <>
            {/* Outer container for the navbar, set to be sticky at the top with a high z-index to overlay other content */}
            <div className="navbar bg-base-100 sticky top-0 z-50 border-b border-neutral-600">

                {/* 1 Section */}
                {/* Left section of the navbar for branding or logo */}
                <div className="flex-1">
                    {/* Link styled as a button for the site branding */}
                    <a className="btn btn-ghost text-xl">Electr🔥Market</a>
                </div>

                {/* 2 Section */}
                {/* Right section of the navbar for interactive elements */}
                <div className="flex-none">

                    {/* 1- Dropdown menu */}
                    {/* Dropdown menu for the shopping cart */}
                    <div className="dropdown dropdown-end">
                        {/* Button that triggers the dropdown */}
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                {/* Shopping cart icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                {/* Badge indicating the number of items in the cart */}
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>

                        {/* Dropdown content for the shopping cart details */}
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                {/* Display the number of items */}
                                <span className="font-bold text-lg">8 Items</span>
                                {/* Display the subtotal cost */}
                                <span className="text-info">Subtotal: $999</span>
                                {/* Button to view the cart */}
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2- Dropdown menu */}
                    {/* Dropdown menu for the user profile */}
                    <div className="dropdown dropdown-end">
                        {/* Button with a user avatar that triggers the dropdown */}
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                 {/* Placeholder for the user's profile picture */}
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        {/* Dropdown content for user-related actions */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                {/* Link to the user's profile with a badge indicating new content */}
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            {/* Link to the settings page */}
                            <li><a>Settings</a></li>
                            {/* Link to log out */}
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar