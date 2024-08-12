import React, { Fragment } from 'react'
import { RiArrowDownSLine, RiShoppingBasket2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Popover, PopoverButton, Transition, PopoverPanel } from '@headlessui/react';
import { MdOutlineShoppingCart } from 'react-icons/md';

const NavBar = () => {

    const links = [
        {
            name: "Dashboard",
            link: "/dashboard",
            isNew: false
        },
        {
            name: "Profile",
            link: "/",
            isNew: true
        },
        {
            name: "Settings",
            link: "/",
            isNew: false
        },
        {
            name: "Logout",
            link: "/",
            isNew: false
        },
    ]

    return (
        <div className='w-full bg-white'>
            <div className='container mx-auto'>
                {/* 1- Laptop Section */}
                {/* Conteneur extérieur pour la barre de navigation, défini pour être collant en haut avec un z-index élevé pour superposer d'autres contenus */}
                <div className="navbar flex items-center justify-between bg-base-100 sticky top-0 z-50 border-b border-neutral-200 py-2">

                    {/* Section 1 */}
                    <div className="flex justify-center text-secondary sm:justify-start">
                        <Link
                            to={'/'}
                            className="flex items-center gap-2 text-secondary text-xl font-bold hover:no-underline rounded-lg px-4 py-2"
                        >
                            <RiShoppingBasket2Fill fontSize={30} className='text-neutral-800 font-bold' />
                            <span className="pt-0.5 font-bold text-neutral-800">Electro⚡Market</span>
                        </Link>
                    </div>

                    {/* Section 2 */}
                    {/* Use shrink to allow a flex item to shrink if needed using 'navbar-center' */}
                    {/* 'hidden md:flex': Barre de recherche centrale qui est cachée sur les petits écrans et visible sur les écrans de taille moyenne et plus grands */}
                    <div className="navbar-center hidden md:flex">
                        <div className="join w-full md:w-[30rem]">
                            {/* Champ de recherche */}
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search Product..."
                                className="w-full join-item input input-bordered input-sm"
                            />
                            {/* Menu déroulant pour la catégorie */}
                            <div className="dropdown dropdown-hover join-item">
                                <label
                                    tabIndex={0}
                                    className="w-[7rem] px-1 btn btn-sm btn-outline border-gray-300 rounded-none capitalize hover:bg-blue-600 hover:border-blue-600"
                                >
                                    Category <RiArrowDownSLine />
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu p-1 shadow border border-gray-300 bg-base-100 rounded-lg w-52"
                                >
                                    <li>
                                        <Link to={'/'} className='text-gray-700 hover:no-underline'>
                                            Electronic
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className='text-gray-700 hover:no-underline'>
                                            Home Furniture
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className='text-gray-700 hover:no-underline'>
                                            Sports
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Search button */}
                            <button className="btn btn-sm btn-secondary join-item rounded-r-lg capitalize bg-blue-700 border-blue-700 hover:bg-blue-600 hover:border-blue-600 border-l-slate-50">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Section 3 */}
                    {/* Section droite de la barre de navigation pour les éléments interactifs */}
                    <div className="flex-none flex items-center gap-4">
                        {/* Shopping Cart Menu Section */}
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    {/* Button */}
                                    <PopoverButton className={`group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none ${open ? 'bg-gray-100' : ''}`}>
                                        <MdOutlineShoppingCart fontSize={24} />
                                    </PopoverButton>

                                    {/* Popup */}
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <PopoverPanel className="absolute right-0 z-10 mt-2.5 w-80 transform">
                                            <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                                <strong className="text-lg text-gray-700 font-medium">
                                                    Shopping Cart
                                                </strong>
                                                <div className="mt-2 py-1 text-sm text-gray-600">
                                                    {/* Add cart items here */}
                                                    <p>No items in your cart.</p>
                                                </div>
                                            </div>
                                        </PopoverPanel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        {/* Profile Menu Section */}
                        <div className="dropdown dropdown-end" >
                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <PopoverButton className={`ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400 ${open ? 'bg-gray-100' : ''}`}>
                                            <div
                                                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                                                style={{ backgroundImage: 'url("https://img.freepik.com/photos-gratuite/close-up-portrait-of-bel-homme-mal-rase-barbe-epaisse-moustache-cheveux-noirs-regarde-serieusement_273609-16755.jpg?t=st=1718829593~exp=1718833193~hmac=b53c17176442ce0b018cf888e71ad4f25484feb9c06942f0caf78bb02d672b66&w=740")' }}
                                            >
                                                <span className="sr-only">Marc Backes</span>
                                            </div>
                                        </PopoverButton>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <PopoverPanel>
                                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                    {
                                                        links && links.map((link, index) => (
                                                            <li key={index}>
                                                                <Link to={link.link} className='hover:no-underline text-gray-700' >
                                                                    {link.name}
                                                                    {link.isNew && <span className="badge">New</span>}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </PopoverPanel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                        </div>
                    </div>
                </div>

                {/* 2- Mobile Section */}
                {/* Section de recherche visible uniquement sur les petits écrans */}
                <div className="md:hidden mt-4 pb-4 px-2">
                    <div className="join w-full flex">
                        <input
                            type="text"
                            name="search-mobile"
                            id="search-mobile"
                            placeholder="Search Product..."
                            className="w-full join-item input input-bordered input-sm"
                        />
                        <button className="btn btn-sm btn-secondary join-item capitalize">Search</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NavBar;
