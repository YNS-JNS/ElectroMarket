// SideBar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FcFactory } from "react-icons/fc";


const SideBar = () => {
    return (
        <div className='w-60 flex flex-col p-3 bg-neutral-900 text-white'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcFactory fontSize={24} />
                <span className='text-neutral-100 text-lg' >ElectroMarket</span>
            </div>
            <div className='flex-1'>
                <ul>
                    <Link to={"/dashboard"}>
                        <li className='text-lg font-medium hover:bg-neutral-600  p-1'>Products</li>
                    </Link>
                    <Link to="/dashboard/orders">
                        <li className='text-lg font-medium hover:bg-neutral-600  p-1'>Orders</li>
                    </Link>
                    <Link to="/dashboard">
                        <li className='text-lg font-medium hover:bg-neutral-600  p-1'>Users</li>
                    </Link>
                    <Link to="/dashboard/profile">
                        <li className='text-lg font-medium hover:bg-neutral-600  p-1'>Profile</li>
                    </Link>
                </ul>
            </div>

            <div className='border-t border-neutral-600 py-2'>
                <ul>
                    <Link to={"/dashboard"}>
                        <li className='text-lg font-medium hover:bg-neutral-600  p-1'>Settings</li>
                    </Link>
                    <Link to={"/dashboard"}>
                        <li className='text-lg font-medium hover:bg-neutral-600  p-1'>Logout</li>
                    </Link>
                </ul>
            </div>

        </div>
    )
}

export default SideBar