// CategoryMenu.jsx
import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { RiMenu2Line } from "react-icons/ri"
import { CATEGORY_LINKS } from "../../lib/constants"

function CategoryMenu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full bg-white">
            <div className="container mx-auto border-b border-neutral-200 bg-white">
                <div className="px-2 relative">

                    {/* Large screen category menu */}
                    <div className="hidden lg:flex py-3">
                        <ul className="flex items-center gap-6 text-sm">
                            <Link
                                href={"/categories"}
                                className="hover:opacity-70 transition-opacity flex items-center gap-2 text-gray-800 hover:no-underline"
                            >
                                <RiMenu2Line fontSize={18} />
                                All Category
                            </Link>
                            {CATEGORY_LINKS.map((cat, idx) => (
                                <Link key={cat.path + idx} href={cat.path} className="hover:opacity-80 transition-opacity text-gray-700 hover:no-underline">
                                    {cat.label}
                                </Link>
                            ))}
                        </ul>
                    </div>

                    {/* Small screen category menu */}
                    <div className="py-3 lg:hidden flex items-center justify-between">
                        <button
                            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <RiMenu2Line fontSize={24} />
                            All Categories
                        </button>
                    </div>
                    {isMenuOpen && (
                        <div
                            className="lg:hidden bg-white w-full absolute left-0 top-full z-10"
                        >
                            <ul className="flex flex-col items-start p-4 gap-4">
                                {CATEGORY_LINKS.map((cat, idx) => (
                                    <Link key={cat.path + idx} to={cat.path} className="hover:opacity-80 transition-opacity">
                                        {cat.label}
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CategoryMenu
