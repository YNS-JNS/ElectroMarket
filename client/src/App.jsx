import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductDetails from './components/Product/ProductDetails';
import TestSlide from './screens/TestSlide';
import DashboardScreen from './Layout/DashboardLayout';
import Profile from './components/Dashboard/Profile';
import Orders from './components/Dashboard/Orders';

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductScreen />} />
        <Route path="/test" element={<ProductDetails />} />
        <Route path="/slide" element={<TestSlide />} />

        {/* Nested routes for dashboard */}
        <Route path="/dashboard" element={<DashboardScreen />} >
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </>

  )
}

export default App