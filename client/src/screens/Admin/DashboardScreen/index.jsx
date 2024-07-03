import React from 'react'
import DashboardStatsGrid from '../../../components/Dashboard/DashboardStatsGrid'
import TransactionChart from '../../../components/Dashboard/TransactionChart'
import BuyerProfilePieChart from '../../../components/Dashboard/BuyerProfilePieChart'

const DashboardScreen = () => {
    return (
        <div className='flex flex-col gap-4'>

            {/* Stats */}
            <DashboardStatsGrid />

            {/* Charts */}
            <div className='flex flex-row gap-4 w-full'>
                {/* Transaction Charts */}
                <TransactionChart />

                {/* Buyer Profile charts */}
                <BuyerProfilePieChart />
            </div>

            {/* Recent */}
            <div className='flex flex-row gap-4 w-full'>
                {/* Recent orders */}
                {/* <RecentOrders /> */}

                {/* Popular Products */}
                {/* <PopularProducts /> */}
            </div>

        </div>
    )
}

export default DashboardScreen