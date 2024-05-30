import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/Layout/NavBar';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductDetails from './components/Product/ProductDetails';
import TestSlide from './screens/TestSlide';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductScreen />} />
        <Route path="/test" element={<ProductDetails />} />
        <Route path="/slide" element={<TestSlide />} />
      </Routes>
    </>

  )
}

export default App