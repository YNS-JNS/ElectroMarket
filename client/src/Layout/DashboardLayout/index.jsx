// DashboardScreen.jsx
import React from 'react'
import SideBar from '../../components/Dashboard/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Dashboard/Header/Header'

const DashboardLayout = () => {
    return (
        <div 
        className='flex flex-row h-screen w-screen overflow-hidden bg-sky-50'
        // className='flex flex-row h-screen w-screen overflow-y-scroll bg-sky-50'
        >
            {/* ______ Begin ______  */}
            <SideBar />
            {/* ____ End ____  */}

            {/* ______ Begin  ______ */}
            <div className='flex flex-col flex-1'>
                <Header />
                <div className='flex-1 p-4 min-h-0 overflow-auto'>
                    {/* <Header /> */}
                    <Outlet />
                </div>
            </div>
            {/* ______ End ______ */}
        </div>
    )
}

export default DashboardLayout;