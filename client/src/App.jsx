import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar'
import HomeScreen from './screens/HomeScreen';
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/test" element={<ProductCard />} />
      </Routes>
    </>

  )
}

export default App