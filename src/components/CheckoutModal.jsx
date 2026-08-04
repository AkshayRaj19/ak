import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { X, CheckCircle2, ShieldCheck, CreditCard, Smartphone, Landmark, Banknote, QrCode, Lock, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

export const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, totalCartPrice, showToast } = useApp();

  const [paymentMethod, setPaymentMethod] = useState('gpay'); // 'gpay', 'upi', 'card', 'netbanking', 'cod'
  const [step, setStep] = useState('form'); // 'form', 'processing', 'success'
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');

  // Form Fields
  const [formData, setFormData] = useState({
    name: 'AKSHAY',
    email: 'akshayraj7538.6@gmail.com',
    phone: '+91 97899 33714',
    address: 'kelambakkam,omr,chennai',
    city: 'chennai',
    state: 'Tamil Nadu',
    pincode: '603103',
    cardNumber: '4532 8912 3456 7890',
    cardName: 'AKSHAY',
    cardExpiry: '08/29',
    cardCvv: '888'
  });

  if (!isCheckoutOpen) return null;

  const gstAmount = Math.round(totalCartPrice * 0.12);
  const grandTotal = totalCartPrice + gstAmount;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayNow = (e) => {
    e.preventDefault();
    setStep('processing');

    setTimeout(() => {
      setStep('success');
      showToast('Order Confirmed!', 'Thank you! Your royal order has been placed successfully.');
    }, 2500);
  };

  const handleClose = () => {
    setStep('form');
    setIsCheckoutOpen(false);
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 z-3 d-flex align-items-center justify-content-center p-2 p-md-3"
      style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(8px)', zIndex: 1100 }}
      onClick={handleClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="glass-card p-4 mx-auto position-relative text-heading shadow-lg"
        style={{ maxWidth: '850px', width: '100%', maxHeight: '90vh', overflowY: 'auto', backgroundColor: 'var(--bg-card-solid)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn btn-link text-heading position-absolute top-0 end-0 m-3 p-0"
          onClick={handleClose}
        >
          <X size={26} />
        </button>

        {step === 'form' && (
          <div>
            <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom border-gold">
              <ShieldCheck className="text-gold" size={28} />
              <div>
                <h4 className="font-serif fs-3 mb-0 fw-bold">Royal Imperial Checkout</h4>
                <p className="small text-muted mb-0">256-bit Bank Grade Encrypted Payment Gateway</p>
              </div>
            </div>

            <form onSubmit={handlePayNow}>
              <div className="row g-4">
                {/* Left Column: Shipping & Payment Options */}
                <div className="col-lg-7">
                  <h5 className="font-serif fw-bold text-gold mb-3 d-flex align-items-center gap-2 fs-5">
                    1. Shipping & Contact Details
                  </h5>

                  <div className="row g-2 mb-4">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-sm bg-card border-gold text-heading"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control form-control-sm bg-card border-gold text-heading"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="form-label small fw-bold">Delivery Address</label>
                      <input
                        type="text"
                        name="address"
                        className="form-control form-control-sm bg-card border-gold text-heading"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small fw-bold">City</label>
                      <input
                        type="text"
                        name="city"
                        className="form-control form-control-sm bg-card border-gold text-heading"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small fw-bold">State</label>
                      <input
                        type="text"
                        name="state"
                        className="form-control form-control-sm bg-card border-gold text-heading"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small fw-bold">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        className="form-control form-control-sm bg-card border-gold text-heading"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Payment Method Selector */}
                  <h5 className="font-serif fw-bold text-gold mb-3 d-flex align-items-center gap-2 fs-5">
                    2. Select Payment Method
                  </h5>

                  <div className="nav nav-pills gap-2 mb-3">
                    <button
                      type="button"
                      className={`btn btn-sm ${paymentMethod === 'gpay' ? 'btn-gold' : 'btn-outline-gold'}`}
                      onClick={() => setPaymentMethod('gpay')}
                    >
                      <Smartphone size={16} /> GPay / UPI QR
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm ${paymentMethod === 'card' ? 'btn-gold' : 'btn-outline-gold'}`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <CreditCard size={16} /> Credit/Debit Card
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm ${paymentMethod === 'netbanking' ? 'btn-gold' : 'btn-outline-gold'}`}
                      onClick={() => setPaymentMethod('netbanking')}
                    >
                      <Landmark size={16} /> NetBanking
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm ${paymentMethod === 'cod' ? 'btn-gold' : 'btn-outline-gold'}`}
                      onClick={() => setPaymentMethod('cod')}
                    >
                      <Banknote size={16} /> Cash on Delivery
                    </button>
                  </div>

                  {/* Payment Details Container */}
                  <div className="p-3 rounded bg-cream border border-gold mb-3">
                    {/* GPay / UPI */}
                    {paymentMethod === 'gpay' && (
                      <div>
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <div className="p-2 bg-white rounded shadow-sm">
                            <QrCode size={64} className="text-dark" />
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1">Scan & Pay via Google Pay / PhonePe / Paytm</h6>
                            <p className="small text-muted mb-0">Open your UPI app and scan the QR code to complete instant payment.</p>
                          </div>
                        </div>

                        <div className="input-group input-group-sm">
                          <span className="input-group-text bg-card text-heading border-gold">UPI ID</span>
                          <input
                            type="text"
                            className="form-control bg-card text-heading border-gold"
                            placeholder="username@okaxis / phonepe"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                          />
                          <button type="button" className="btn btn-gold btn-sm">Verify UPI</button>
                        </div>
                      </div>
                    )}

                    {/* Credit / Debit Cards */}
                    {paymentMethod === 'card' && (
                      <div className="row g-2">
                        <div className="col-12">
                          <label className="form-label small fw-bold">Card Number</label>
                          <input
                            type="text"
                            name="cardNumber"
                            className="form-control form-control-sm bg-card border-gold text-heading"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-6">
                          <label className="form-label small fw-bold">Expiry Date</label>
                          <input
                            type="text"
                            name="cardExpiry"
                            className="form-control form-control-sm bg-card border-gold text-heading"
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-6">
                          <label className="form-label small fw-bold">CVV Code</label>
                          <input
                            type="password"
                            name="cardCvv"
                            className="form-control form-control-sm bg-card border-gold text-heading"
                            value={formData.cardCvv}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-12 mt-2">
                          <span className="badge bg-gold text-white me-1">Visa</span>
                          <span className="badge bg-gold text-white me-1">Mastercard</span>
                          <span className="badge bg-gold text-white me-1">RuPay</span>
                          <span className="badge bg-gold text-white">American Express</span>
                        </div>
                      </div>
                    )}

                    {/* NetBanking */}
                    {paymentMethod === 'netbanking' && (
                      <div>
                        <label className="form-label small fw-bold">Select Your Bank</label>
                        <select
                          className="form-select form-select-sm bg-card border-gold text-heading mb-3"
                          value={selectedBank}
                          onChange={(e) => setSelectedBank(e.target.value)}
                        >
                          <option value="HDFC Bank">HDFC Bank</option>
                          <option value="State Bank of India (SBI)">State Bank of India (SBI)</option>
                          <option value="ICICI Bank">ICICI Bank</option>
                          <option value="Axis Bank">Axis Bank</option>
                          <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                          <option value="Punjab National Bank">Punjab National Bank</option>
                        </select>
                        <p className="small text-muted mb-0">You will be securely redirected to {selectedBank} internet banking portal.</p>
                      </div>
                    )}

                    {/* Cash on Delivery */}
                    {paymentMethod === 'cod' && (
                      <div>
                        <h6 className="fw-bold mb-1">Pay Cash / Card upon Delivery</h6>
                        <p className="small text-muted mb-2">Our royal courier representative will bring a mobile POS card machine or collect cash upon arrival.</p>
                        <div className="badge bg-success">Eligible for FREE Express COD Service</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Order Summary */}
                <div className="col-lg-5">
                  <div className="p-3 rounded bg-cream border border-gold h-100 d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="font-serif fw-bold text-gold mb-3 fs-5">Order Breakdown</h5>

                      <div className="cart-items-preview mb-3 pe-1" style={{ maxHeight: '180px', overflowY: 'auto' }}>
                        {cart.map(({ product, quantity }) => (
                          <div key={product.id} className="d-flex justify-content-between align-items-center small mb-2 pb-2 border-bottom border-secondary">
                            <div>
                              <span className="fw-bold">{product.name}</span>
                              <span className="text-muted ms-1">x{quantity}</span>
                            </div>
                            <span className="fw-bold text-gold">₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                          </div>
                        ))}
                      </div>

                      <div className="d-flex justify-content-between small mb-2">
                        <span>Items Subtotal:</span>
                        <span className="fw-bold">₹{totalCartPrice.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="d-flex justify-content-between small mb-2">
                        <span>GST (12% Textile Tax):</span>
                        <span className="fw-bold">₹{gstAmount.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="d-flex justify-content-between small mb-3">
                        <span>Royal Insured Delivery:</span>
                        <span className="text-success fw-bold">FREE</span>
                      </div>

                      <div className="d-flex justify-content-between fs-4 font-serif fw-extrabold pt-2 border-top border-gold mb-4">
                        <span>Total Payable:</span>
                        <span className="text-gold">₹{grandTotal.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="btn btn-gold w-100 py-3 fw-bold fs-5 text-uppercase d-flex align-items-center justify-content-center gap-2"
                      >
                        <Lock size={18} /> Pay ₹{grandTotal.toLocaleString('en-IN')}
                      </button>

                      <div className="text-center mt-3 text-muted small">
                        <ShieldCheck size={14} className="text-gold me-1" />
                        Guaranteed 100% Secure Checkout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Processing Step */}
        {step === 'processing' && (
          <div className="text-center py-5">
            <div className="loader-spinner mx-auto mb-4" style={{ width: '60px', height: '60px' }}></div>
            <h4 className="font-serif fs-3 fw-bold mb-2">Authenticating Transaction...</h4>
            <p className="text-muted">Connecting with Bank & UPI Security Gateway. Please do not close this window.</p>
          </div>
        )}

        {/* Success Step */}
        {step === 'success' && (
          <div className="text-center py-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <CheckCircle2 size={80} className="text-gold mb-3 mx-auto" />
            </motion.div>

            <h3 className="font-serif fs-2 fw-bold mb-2">Royal Order Confirmed!</h3>
            <p className="text-muted max-w-500 mx-auto mb-4">
              Thank you, <strong className="text-heading">{formData.name}</strong>! Your order <span className="text-gold fw-bold">#ROYAL-2026-9842</span> has been placed. A confirmation email and SMS dispatch link have been sent.
            </p>

            <div className="p-3 bg-cream rounded border border-gold max-w-500 mx-auto mb-4 text-start small">
              <div className="d-flex justify-content-between mb-1">
                <span>Total Paid:</span>
                <strong className="text-gold">₹{grandTotal.toLocaleString('en-IN')}</strong>
              </div>
              <div className="d-flex justify-content-between mb-1">
                <span>Payment Method:</span>
                <strong className="text-capitalize">{paymentMethod.toUpperCase()}</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>Estimated Delivery:</span>
                <strong className="text-success">Within 2-3 Business Days (Express)</strong>
              </div>
            </div>

            <button className="btn btn-gold px-5 py-3 fs-5" onClick={handleClose}>
              Continue Royal Shopping
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
