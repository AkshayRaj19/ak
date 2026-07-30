import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { Search, X } from 'lucide-react';
import { ProductCard } from './ProductCard';

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isSearchOpen) return null;

  const filteredProducts = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 z-3 p-4 d-flex flex-column align-items-center"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', overflowY: 'auto' }}
      onClick={() => setIsSearchOpen(false)}
    >
      <div
        className="w-100"
        style={{ maxWidth: '900px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="font-serif text-white mb-0">Search Our Atelier Catalog</h4>
          <button className="btn btn-link text-white p-0" onClick={() => setIsSearchOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="input-group mb-5">
          <span className="input-group-text bg-transparent border-gold text-gold">
            <Search size={24} />
          </span>
          <input
            type="text"
            className="form-control form-control-lg bg-transparent border-gold text-white"
            placeholder="Type fabric name or category (e.g. Silk, Linen, Saree)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>

        {searchTerm && (
          <div className="row g-4">
            {filteredProducts.length === 0 ? (
              <div className="text-center text-muted py-4">No luxury items match "{searchTerm}"</div>
            ) : (
              filteredProducts.map(product => (
                <div key={product.id} className="col-12 col-sm-6 col-md-4">
                  <ProductCard product={product} />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
