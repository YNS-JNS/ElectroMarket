import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
// Importing Layouts:
import DashboardLayout from './Layout/DashboardLayout';
// Importing Screens:
import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/Admin/DashboardScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderScreen from './screens/Admin/OrderScreen';
import CustomerScreen from './screens/Admin/CustomerScreen';
import TransactionScreen from './screens/Admin/TransactionScreen';
import MessageScreen from './screens/Admin/MessageScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import CartScreen from './screens/CartScreen';
import ListScreen from './screens/ListScreen';

// Importing Components:
import NavBar from './components/NavBar/NavBar';
import CategoryMenu from './components/CategoryMenu';
import Footer from './components/Footer';

// Importing Dashboard Components:
import AddProduct from './components/Dashboard/Product/AddProduct';
import ProductList from './components/Dashboard/Product/ProductList';
import UpdateProduct from './components/Dashboard/Product/UpdateProduct';

const App = () => {

  const { pathname } = useLocation();

  const hideNavBar = pathname.startsWith('/dashboard');

  return (
    <div className='bg-white'>
      {/* if hideNavBar is true, hide the nav bar */}
      {!hideNavBar && <NavBar />}
      {!hideNavBar && <CategoryMenu />}  
      
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductListScreen />} />
        <Route path="/products/list" element={<ListScreen />} />
        <Route path="/products/:id" element={<ProductDetailsScreen />} />
        <Route path="/cart" element={<CartScreen />} />

        {/* Nested routes for dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />} >
          {/* Dashboard */}
          <Route index element={<DashboardScreen />} />
          {/* Profile */}
          <Route path="profile" element={<ProfileScreen />} />
          {/* Products */}
          <Route path="products/new" element={<AddProduct />} />
          <Route path="products/:id/edit" element={<UpdateProduct />} />
          <Route path="products/list" element={<ProductList />} />
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
      {!hideNavBar && <Footer />}
    </div>

  )
}

export default App