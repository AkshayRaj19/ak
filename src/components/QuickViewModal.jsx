import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Award } from 'lucide-react';

export const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, wishlist, toggleWishlist } = useApp();
  const [qty, setQty] = useState(1);

  if (!quickViewProduct) return null;

  const isWishlisted = wishlist.includes(quickViewProduct.id);

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 z-3 d-flex align-items-center justify-content-center p-3"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
      onClick={() => setQuickViewProduct(null)}
    >
      <div
        className="glass-card p-4 position-relative"
        style={{ maxWidth: '800px', width: '100%', backgroundColor: 'var(--bg-card-solid)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn btn-link text-heading position-absolute top-0 end-0 m-3 p-0"
          onClick={() => setQuickViewProduct(null)}
        >
          <X size={26} />
        </button>

        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <div className="position-relative overflow-hidden rounded-3">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="img-fluid rounded-3 w-100"
                style={{ maxHeight: '380px', objectFit: 'cover' }}
              />
              {quickViewProduct.badge && (
                <span className="badge-discount position-absolute top-0 start-0 m-3">
                  {quickViewProduct.badge}
                </span>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <span className="sub-title text-uppercase mb-1">{quickViewProduct.category} Collection</span>
            <h3 className="font-serif fs-3 mb-2 text-heading fw-bold">{quickViewProduct.name}</h3>

            <div className="product-rating mb-3 d-flex align-items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.floor(quickViewProduct.rating) ? '#f59e0b' : 'none'}
                  stroke="#f59e0b"
                />
              ))}
              <span className="ms-2 text-muted fw-semibold">({quickViewProduct.rating} / 5.0)</span>
            </div>

            <div className="fs-2 font-serif text-gold mb-3 fw-bold">
              ₹{quickViewProduct.price.toLocaleString('en-IN')}
              {quickViewProduct.oldPrice && (
                <span className="fs-5 text-muted text-decoration-line-through ms-3 fw-normal">
                  ₹{quickViewProduct.oldPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <p className="text-muted small mb-3">{quickViewProduct.desc}</p>

            <div className="d-flex align-items-center gap-3 mb-4 p-2 rounded bg-cream border border-gold">
              <ShieldCheck size={20} className="text-gold" />
              <span className="small text-muted fw-semibold">100% Certified Authentic Artisanal Guarantee & 24K Gold Zari Seal</span>
            </div>

            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="input-group" style={{ width: '130px' }}>
                <button
                  className="btn btn-outline-gold btn-sm"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center bg-transparent text-heading border-gold fw-bold"
                  value={qty}
                  readOnly
                />
                <button
                  className="btn btn-outline-gold btn-sm"
                  onClick={() => setQty(qty + 1)}
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-gold flex-grow-1 py-2"
                onClick={() => {
                  addToCart(quickViewProduct, qty);
                  setQuickViewProduct(null);
                }}
              >
                <ShoppingBag size={18} /> Add to Bag
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
