import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, setIsCheckoutOpen, cart, removeFromCart, updateCartQuantity, totalCartPrice } = useApp();

  if (!isCartOpen) return null;

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 z-3"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className="position-fixed top-0 end-0 h-100 bg-card p-4 shadow-lg d-flex flex-column justify-content-between"
        style={{ width: '420px', maxWidth: '92vw', zIndex: 1060, backgroundColor: 'var(--bg-card-solid)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-gold">
            <div className="d-flex align-items-center gap-2">
              <ShoppingBag className="text-gold" size={24} />
              <h5 className="font-serif fs-4 mb-0 text-heading">Luxury Shopping Bag</h5>
            </div>
            <button className="btn btn-link text-heading p-0" onClick={() => setIsCartOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-5 text-muted">
              <ShoppingBag size={48} className="text-gold opacity-50 mb-3" />
              <p className="fs-5 fw-semibold">Your shopping bag is empty.</p>
              <p className="small text-muted">Discover our royal collection of Mulberry silks and Giza cottons.</p>
            </div>
          ) : (
            <div className="cart-items-list pe-1" style={{ maxHeight: 'calc(100vh - 280px)', overflowY: 'auto' }}>
              {cart.map(({ product, quantity }) => (
                <div key={product.id} className="d-flex gap-3 mb-3 p-2 border-bottom border-gold align-items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '75px', height: '75px', objectFit: 'cover', borderRadius: '10px' }}
                  />
                  <div className="flex-grow-1">
                    <h6 className="font-serif mb-1 text-heading fw-bold">{product.name}</h6>
                    <div className="text-gold fw-bold">₹{product.price.toLocaleString('en-IN')}</div>
                    <div className="d-flex align-items-center gap-2 mt-2">
                      <button
                        className="btn btn-outline-gold btn-sm p-1 rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '26px', height: '26px' }}
                        onClick={() => updateCartQuantity(product.id, -1)}
                      >
                        <Minus size={12} />
                      </button>
                      <span className="fw-bold px-2">{quantity}</span>
                      <button
                        className="btn btn-outline-gold btn-sm p-1 rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '26px', height: '26px' }}
                        onClick={() => updateCartQuantity(product.id, 1)}
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn btn-link text-danger p-1 ms-auto"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="pt-3 border-top border-gold">
            <div className="d-flex justify-content-between fs-5 font-serif mb-3">
              <span>Grand Total:</span>
              <span className="text-gold fw-extrabold fs-4">₹{totalCartPrice.toLocaleString('en-IN')}</span>
            </div>
            <button
              className="btn btn-gold w-100 py-3 d-flex justify-content-center align-items-center gap-2 text-uppercase letter-spacing-1 fw-bold fs-6"
              onClick={handleProceedCheckout}
            >
              Proceed to Checkout <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
