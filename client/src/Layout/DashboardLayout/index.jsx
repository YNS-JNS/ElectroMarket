// DashboardScreen.jsx
import React from 'react'
import SideBar from '../../components/Dashboard/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Dashboard/Header'

const DashboardLayout = () => {
    return (
        <div className='flex flex-row h-screen w-screen overflow-hidden bg-neutral-100'>

            {/* ______ Begin ______  */}
            <SideBar />
            {/* ____ End ____  */}

            {/* ______ Begin  ______ */}
            <div className='flex flex-col flex-1'>
                <Header />
                <div className='flex-1 p-4 min-h-0 overflow-auto'>
                    <Outlet />
                </div>
            </div>
            {/* ______ End ______ */}

        </div>
    )
}

export default DashboardLayout;