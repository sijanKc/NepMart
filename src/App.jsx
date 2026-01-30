import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/shop" element={<ProductsPage />} />
                    <Route path="/product/:id" element={<ProductDetailsPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
