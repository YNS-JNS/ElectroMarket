import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/Layout/NavBar';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductScreen />} />
      </Routes>
    </>

  )
}

export default App