import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Star, ShoppingBag, Heart } from 'lucide-react';

export const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, wishlist, toggleWishlist } = useApp();
  const [qty, setQty] = useState(1);

  if (!quickViewProduct) return null;

  const isWishlisted = wishlist.includes(quickViewProduct.id);

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 z-3 d-flex align-items-center justify-content-center"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(5px)' }}
      onClick={() => setQuickViewProduct(null)}
    >
      <div
        className="glass-card p-4 mx-3 position-relative"
        style={{ maxWidth: '750px', width: '100%', backgroundColor: 'var(--bg-card-solid)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn btn-link text-heading position-absolute top-0 end-0 m-3 p-0"
          onClick={() => setQuickViewProduct(null)}
        >
          <X size={24} />
        </button>

        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="img-fluid rounded-3 w-100"
              style={{ maxHeight: '350px', objectFit: 'cover' }}
            />
          </div>

          <div className="col-md-6">
            <span className="sub-title text-uppercase">{quickViewProduct.category}</span>
            <h3 className="font-serif fs-3 mb-2">{quickViewProduct.name}</h3>

            <div className="product-rating mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.floor(quickViewProduct.rating) ? '#ffc107' : 'none'}
                  stroke="#ffc107"
                />
              ))}
              <span className="ms-2 text-muted">({quickViewProduct.rating} / 5.0)</span>
            </div>

            <div className="fs-3 font-serif text-gold mb-3">${quickViewProduct.price}</div>

            <p className="text-muted small mb-4">{quickViewProduct.desc}</p>

            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="input-group" style={{ width: '120px' }}>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center bg-transparent text-heading border-secondary"
                  value={qty}
                  readOnly
                />
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => setQty(qty + 1)}
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-gold flex-grow-1"
                onClick={() => {
                  addToCart(quickViewProduct, qty);
                  setQuickViewProduct(null);
                }}
              >
                <ShoppingBag size={18} /> Add to Cart
              </button>

              <button
                className={`btn ${isWishlisted ? 'btn-gold' : 'btn-outline-gold'} p-2`}
                onClick={() => toggleWishlist(quickViewProduct.id, quickViewProduct.name)}
              >
                <Heart size={20} fill={isWishlisted ? '#ffffff' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
