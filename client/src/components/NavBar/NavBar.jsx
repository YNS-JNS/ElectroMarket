// Importation des modules nécessaires
import React from 'react';
import { RiArrowDownSLine, RiShoppingBasket2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='w-full bg-[#1d232a]'>
            <div className='container mx-auto'>
                {/* 1- Laptop Section */}
                {/* Conteneur extérieur pour la barre de navigation, défini pour être collant en haut avec un z-index élevé pour superposer d'autres contenus */}
                <div className="navbar flex items-center justify-between bg-base-100 sticky top-0 z-50 border-b border-neutral-600 py-2">

                    {/* Section 1 */}
                    {/* Section gauche de la barre de navigation pour l'image de marque ou le logo */}
                    {/* <div>
                        <a className="btn btn-ghost text-xl">Electr⚡Market</a>
                    </div> */}
                    <div className="flex justify-center text-secondary sm:justify-start">
                        <Link href={"/"} className="flex items-center gap-2 text-secondary text-xl font-semibold">
                            <RiShoppingBasket2Fill fontSize={30} />
                            <span className="pt-0.5">Elect⚡Market</span>
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
                                    className="w-[7rem] px-1 btn btn-sm btn-outline border-gray-300 rounded-none capitalize"
                                >
                                    Category <RiArrowDownSLine />
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu p-1 shadow border border-gray-300 bg-base-100 rounded-lg w-52"
                                >
                                    <li><a>Electronic</a></li>
                                    <li><a>Home Furniture</a></li>
                                </ul>
                            </div>
                            {/* Search button */}
                            <button className="btn btn-sm btn-secondary join-item rounded-r-lg capitalize">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Section 3 */}
                    {/* Section droite de la barre de navigation pour les éléments interactifs */}
                    <div className="flex-none flex items-center gap-4">
                        {/* 1 - Menu déroulant pour le panier */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    {/* Icône de panier */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    {/* Badge indiquant le nombre d'articles dans le panier */}
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>

                            {/* Contenu déroulant pour les détails du panier */}
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2 - Menu déroulant pour le profil utilisateur */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {/* Espace réservé pour la photo de profil de l'utilisateur */}
                                    <img alt="User avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a className="justify-between">Profile <span className="badge">New</span></a></li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
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
