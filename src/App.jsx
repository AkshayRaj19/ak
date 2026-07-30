import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { Toast } from './components/Toast';

import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { Products } from './pages/Products';
import { HumanllyPlus } from './pages/HumanllyPlus';
import { Blog } from './pages/Blog';
import { Careers } from './pages/Careers';

export const App = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      <Navbar />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/products" element={<Products />} />
          <Route path="/humanlly-plus" element={<HumanllyPlus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />

      {/* Global Modals & Notifications */}
      <CartDrawer />
      <QuickViewModal />
      <SearchModal />
      <Toast />
    </div>
  );
};

export default App;
