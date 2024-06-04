import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
// Importing Layouts:
import DashboardLayout from './Layout/DashboardLayout';
// Importing Screens:
import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/Admin/DashboardScreen';
import ProductListScreen from './screens/ProductListScreen';
import TestSlide from './screens/TestSlide';
import ProfileScreen from './screens/ProfileScreen';
import ProductScreen from './screens/Admin/ProductScreen';
import OrderScreen from './screens/Admin/OrderScreen';
import CustomerScreen from './screens/Admin/CustomerScreen';
import TransactionScreen from './screens/Admin/TransactionScreen';
import MessageScreen from './screens/Admin/MessageScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
// Importing Components:
import NavBar from './components/NavBar/NavBar';
// Importing Dashboard Components:
import AddProduct from './components/Dashboard/Product/AddProduct';
import UpdateProducts from './components/Dashboard/Product/UpdateProducts';


const App = () => {

  const { pathname } = useLocation();

  const hideNavBar = pathname.startsWith('/dashboard');

  return (
    <>
      {/* if hideNavBar is true, hide the nav bar */}
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductListScreen />} />
        <Route path="/products/:id" element={<ProductDetailsScreen />} />
        <Route path="/slide" element={<TestSlide />} />

        {/* Nested routes for dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />} >

          {/* Dashboard */}
          <Route index element={<DashboardScreen />} />

          {/* Profile */}
          <Route path="profile" element={<ProfileScreen />} />

          {/* Products */}
          <Route path="products" element={<ProductScreen />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/:id/edit" element={<UpdateProducts />} />

          {/* Orders */}
          <Route path="orders" element={<OrderScreen />} />

          {/* Customers */}
          <Route path="customers" element={<CustomerScreen />} />

          {/* Transactions */}
          <Route path="transactions" element={<TransactionScreen />} />

          {/* Messages */}
          <Route path="messages" element={<MessageScreen />} />
        </Route>
      </Routes>
    </>

  )
}

export default App