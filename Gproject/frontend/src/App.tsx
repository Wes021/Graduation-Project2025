import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/products';
import ProductDetails from './pages/products/ProductDetails';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import VisaPayment from './pages/payment/VisaPayment';
import PaypalPayment from './pages/payment/PaypalPayment';
import Profile from './pages/Profile';
import ServiceDetails from './pages/ServiceDetails';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import AdminDashboard from './pages/admin/Dashboard';
import OrderDetails from './pages/OrderDetails';
import { useThemeStore } from './store/themeStore';
import { getLanguageDir } from './i18n';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import axios from 'axios';

function App() {
  const { i18n } = useTranslation();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const dir = getLanguageDir(i18n.language);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/your-endpoint')
        .then(response => setData(response.data))
        .catch(error => console.log(error));
}, []);

  return (

    

    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`} dir={dir}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="App">
            <h1>Data from Laravel API</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/payment"
                element={
                  <ProtectedRoute>
                    <Payment />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/payment/visa"
                element={
                  <ProtectedRoute>
                    <VisaPayment />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/payment/paypal"
                element={
                  <ProtectedRoute>
                    <PaypalPayment />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/orders/:id"
                element={
                  <ProtectedRoute>
                    <OrderDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;