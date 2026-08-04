import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SlidersHorizontal, Sparkles, Gem } from 'lucide-react';

export const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filterCategories = [
    { key: 'all', label: 'All Royal Heirlooms' },
    { key: 'silk', label: 'Banarasi Silk' },
    { key: 'cotton', label: 'Egyptian Cotton' },
    { key: 'linen', label: 'Organic Linen' },
    { key: 'wedding', label: 'Bridal Couture' },
    { key: 'home', label: 'Palace Home' },
    { key: 'men', label: 'Men Sherwani & Suits' },
    { key: 'women', label: 'Women Silk Drapes' }
  ];

  let filtered = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  if (sortBy === 'low-high') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'high-low') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <span className="sub-title text-gold d-inline-flex align-items-center gap-1">
            <Gem size={16} /> Heritage Collections 2026
          </span>
          <h1 className="font-serif display-4 fw-extrabold">Royal Fabrics & Couture Catalog</h1>
          <p className="max-w-600 mx-auto text-light opacity-90 fs-5">
            Explore 100% certified authentic luxury textiles handwoven with 24K gold zari and organic natural fibers.
          </p>
        </div>
      </section>

      {/* Catalog & Filter Controls */}
      <section className="section-padding">
        <div className="container">
          {/* Top Control Bar */}
          <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
            <div className="filter-btn-group mb-0">
              {filterCategories.map(cat => (
                <button
                  key={cat.key}
                  className={`filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="d-flex align-items-center gap-2">
              <SlidersHorizontal size={18} className="text-gold" />
              <select
                className="form-select bg-card border-gold text-heading fw-bold"
                style={{ width: '200px', cursor: 'pointer' }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Sort by Featured</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Product Cards Grid with AnimatePresence */}
          <motion.div layout className="row g-4">
            <AnimatePresence>
              {filtered.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="col-12 col-sm-6 col-lg-3"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
