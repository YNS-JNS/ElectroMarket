// SideBar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FcFactory } from "react-icons/fc";
import classNames from 'classnames'; // A simple JavaScript utility for conditionally joining classNames together.
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../../lib/constants';
import SidebarLink from './SidebarLink';
import { HiOutlineLogout } from 'react-icons/hi';


const SideBar = () => {

    const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

    return (
        <div className='flex flex-col w-60 p-3 bg-neutral-900'>

            {/* ______ Logo ______ */}
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcFactory fontSize={24} />
                <span className='text-neutral-200 text-lg' >ElectroMarket</span>
            </div>

            {/* ______ Menu ______ */}
            <div className='flex flex-1 flex-col gap-0.5'>
                {
                    DASHBOARD_SIDEBAR_LINKS.map((link) => (
                        <SidebarLink key={link.key} link={link} linkClass={linkClass} />
                    ))
                }
            </div>

            {/* ______ Bottom Links ______ */}
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>

                {/* Settings */}
                {
                    DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                        <SidebarLink key={link.key} link={link} linkClass={linkClass} />
                    ))
                }

                {/* Logout */}
                <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div>

            </div>

        </div>
    )
}

export default SideBar