import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProductCard = ({ product }) => {
  const { wishlist, toggleWishlist, addToCart, setQuickViewProduct } = useApp();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="product-card"
    >
      <span className="badge-discount">25% OFF</span>

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
            title="Add to Cart"
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
              fill={i < Math.floor(product.rating) ? '#ffc107' : 'none'}
              stroke="#ffc107"
            />
          ))}
          <span className="ms-1 text-muted small">({product.rating})</span>
        </div>

        <div className="product-price">
          <span className="price-current">${product.price}</span>
          {product.oldPrice && <span className="price-old">${product.oldPrice}</span>}
        </div>
      </div>
    </motion.div>
  );
};
