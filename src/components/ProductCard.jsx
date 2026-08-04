import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingBag, Star, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProductCard = ({ product }) => {
  const { wishlist, toggleWishlist, addToCart, setQuickViewProduct } = useApp();
  const isWishlisted = wishlist.includes(product.id);

  const formattedPrice = `₹${product.price.toLocaleString('en-IN')}`;
  const formattedOldPrice = product.oldPrice ? `₹${product.oldPrice.toLocaleString('en-IN')}` : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.015 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="product-card"
    >
      {product.badge && (
        <span className="badge-discount d-flex align-items-center gap-1">
          <Sparkles size={12} /> {product.badge}
        </span>
      )}

      <div className="product-img-wrapper">
        <img src={product.image} alt={product.name} loading="lazy" />

        <div className="product-actions">
          <button
            className={`action-btn ${isWishlisted ? 'active' : ''}`}
            onClick={() => toggleWishlist(product.id, product.name)}
            title="Wishlist"
          >
            <Heart size={18} fill={isWishlisted ? '#ffffff' : 'none'} />
          </button>

          <button
            className="action-btn"
            onClick={() => setQuickViewProduct(product)}
            title="Quick View"
          >
            <Eye size={18} />
          </button>

          <button
            className="action-btn"
            onClick={() => addToCart(product, 1)}
            title="Add to Shopping Bag"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      <div className="product-details">
        <h4 className="product-title font-serif">{product.name}</h4>

        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < Math.floor(product.rating) ? '#f59e0b' : 'none'}
              stroke="#f59e0b"
            />
          ))}
          <span className="ms-1 text-muted small fw-semibold">({product.rating})</span>
        </div>

        <div className="product-price">
          <span className="price-current">{formattedPrice}</span>
          {formattedOldPrice && <span className="price-old">{formattedOldPrice}</span>}
        </div>
      </div>
    </motion.div>
  );
};
