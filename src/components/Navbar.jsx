import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Search, Heart, ShoppingBag, Moon, Sun, User, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { totalCartCount, wishlist, darkMode, toggleDarkMode, setIsSearchOpen, setIsCartOpen } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/collections', label: 'Collections' },
    { path: '/products', label: 'Products' },
    { path: '/humanlly-plus', label: 'Humanlly+ VIP' },
    { path: '/blog', label: 'Blog' },
    { path: '/careers', label: 'Careers' }
  ];

  return (
    <>
      <header>
        <nav className={`navbar navbar-expand-lg fixed-top navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}>
          <div className="container">
            {/* Brand Logo */}
            <Link className="navbar-brand" to="/">
              HUMANLLY<span>.</span>
            </Link>

            {/* Mobile Toggler */}
            <button
              className="navbar-toggler border-0 shadow-none text-heading d-lg-none"
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Toggle Navigation"
            >
              <Menu size={28} />
            </button>

            {/* Desktop Menu Links */}
            <div className="collapse navbar-collapse justify-content-center d-none d-lg:flex">
              <ul className="navbar-nav align-items-center">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li className="nav-item" key={item.path}>
                      <NavLink
                        to={item.path}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="d-none d-lg-flex align-items-center gap-2">
              <button
                className="nav-icon-btn"
                onClick={() => setIsSearchOpen(true)}
                title="Search"
              >
                <Search size={20} />
              </button>

              <Link to="/products" className="nav-icon-btn" title="Wishlist">
                <Heart size={20} />
                {wishlist.length > 0 && (
                  <span className="badge-count">{wishlist.length}</span>
                )}
              </Link>

              <button
                className="nav-icon-btn"
                onClick={() => setIsCartOpen(true)}
                title="Shopping Bag"
              >
                <ShoppingBag size={20} />
                {totalCartCount > 0 && (
                  <span className="badge-count">{totalCartCount}</span>
                )}
              </button>

              <button
                className="nav-icon-btn ms-1"
                onClick={toggleDarkMode}
                title="Toggle Dark/Light Mode"
              >
                {darkMode ? <Sun size={20} className="text-warning" /> : <Moon size={20} />}
              </button>

              <button className="nav-icon-btn ms-1" title="Account Login">
                <User size={20} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className="position-fixed top-0 start-0 w-100 h-100 z-3" style={{ background: 'rgba(0,0,0,0.6)' }} onClick={() => setMobileOpen(false)}>
          <div
            className="position-fixed top-0 end-0 h-100 bg-card p-4 shadow-lg d-flex flex-column justify-content-between"
            style={{ width: '300px', zIndex: 1050, backgroundColor: 'var(--bg-card-solid)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-gold">
                <h5 className="font-serif fs-4 mb-0 text-heading">HUMANLLY</h5>
                <button className="btn btn-link text-heading p-0" onClick={() => setMobileOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <ul className="navbar-nav">
                {navItems.map((item) => (
                  <li className="nav-item mb-2" key={item.path}>
                    <NavLink
                      to={item.path}
                      className="nav-link fs-5"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-top border-gold d-flex justify-content-around">
              <button
                className="btn btn-outline-gold btn-sm"
                onClick={() => { setMobileOpen(false); setIsSearchOpen(true); }}
              >
                <Search size={16} /> Search
              </button>
              <button
                className="btn btn-gold btn-sm"
                onClick={() => { setMobileOpen(false); setIsCartOpen(true); }}
              >
                <ShoppingBag size={16} /> Cart ({totalCartCount})
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
