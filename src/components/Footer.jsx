import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Send } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row g-4 mb-5">
          <div className="col-lg-4 col-md-6">
            <h3 className="footer-brand-title font-serif">HUMANLLY<span>.</span></h3>
            <p className="pe-lg-4">
              Humanlly crafts sustainable Mulberry silks, Egyptian Giza cottons, and hand-loomed European linens. Redefining haute couture for the conscious global luxury connoisseur.
            </p>
            <div className="d-flex mt-4">
              <a href="#" className="social-icon-btn"><Instagram size={18} /></a>
              <a href="#" className="social-icon-btn"><Facebook size={18} /></a>
              <a href="#" className="social-icon-btn"><Twitter size={18} /></a>
              <a href="#" className="social-icon-btn"><Linkedin size={18} /></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-title">Explore</h5>
            <ul className="footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/collections">Collections</Link></li>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/humanlly-plus">Humanlly+ VIP</Link></li>
              <li><Link to="/blog">Editorial Blog</Link></li>
              <li><Link to="/careers">Artisan Careers</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="footer-title">Customer Care</h5>
            <ul className="footer-links">
              <li><a href="#">Bespoke Tailoring</a></li>
              <li><a href="#">Shipping & Taxes</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Fabric Care Guide</a></li>
              <li><a href="#">Sustainability Report</a></li>
              <li><a href="#">Store Locator</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">VIP Newsletter</h5>
            <p className="small mb-3">Subscribe to receive private invitations to runway releases and bespoke weaving previews.</p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control rounded-pill-start bg-card border-gold text-heading"
                placeholder="Enter your email"
              />
              <button className="btn btn-gold rounded-pill-end px-3" type="button">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-4 border-top border-gold text-center text-muted small d-flex flex-wrap justify-content-between align-items-center gap-2">
          <span>&copy; {new Date().getFullYear()} HUMANLLY Haute Couture Ltd. All Rights Reserved.</span>
          <div className="d-flex gap-3">
            <a href="#" className="text-muted">Privacy Policy</a>
            <a href="#" className="text-muted">Terms of Service</a>
            <a href="#" className="text-muted">Ethics Code</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
