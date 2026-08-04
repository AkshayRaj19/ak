import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Compass, ArrowRight, ShieldCheck, Feather, Globe, Sparkles, Gem, Award, Sliders, CheckCircle2, Play, Star, Crown, Lock } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useApp } from '../context/AppContext';

export const Home = () => {
  const { setIsCheckoutOpen, addToCart } = useApp();
  const typedEl = useRef(null);

  // Bespoke Configurator State
  const [selectedFabric, setSelectedFabric] = useState('Banarasi Mulberry Silk');
  const [selectedZari, setSelectedZari] = useState('24K Real Gold Zari');
  const [selectedColor, setSelectedColor] = useState('Imperial Ruby Red');

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        'Pure Banarasi Silk Sarees',
        'Egyptian Giza Cotton Suits',
        'Imperial Cashmere Pashminas',
        'Raw Silk Zardozi Lehengas',
        'Hand-Loomed Khadi Shirting'
      ],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 2200,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  const customPrice = selectedZari === '24K Real Gold Zari' ? 49999 : 34999;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-overlay"></div>
        <div className="floating-blob blob-1"></div>
        <div className="floating-blob blob-2"></div>

        <div className="container position-relative z-2">
          <div className="row align-items-center min-vh-100 py-5">
            <div className="col-lg-9 hero-content">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill glass-card mb-3 border-gold shadow-gold"
              >
                <Sparkles size={16} className="text-gold" />
                <span className="sub-title text-gold mb-0 fs-6 fw-bold">Royal Indian Heritage & International Haute Couture</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="typed-headline"
              >
                Opulent Artisanal <br />
                <span ref={typedEl} className="shimmer-text"></span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="hero-description"
              >
                Experience the pinnacle of luxury textile artistry. Handwoven with authentic 24K gold zari, pure Mulberry silks, Himalayan cashmere, and organic long-staple cottons for discerning global royalty.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="d-flex flex-wrap gap-3 align-items-center"
              >
                <Link to="/products" className="btn btn-gold fs-5 px-4 py-3">
                  <ShoppingBag size={20} /> Explore Royal Collection
                </Link>
                <Link to="/collections" className="btn btn-outline-gold text-white fs-5 px-4 py-3">
                  <Compass size={20} /> View Master Categories
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="d-flex flex-wrap gap-4 mt-5 pt-3 border-top border-gold-light opacity-95"
              >
                <div className="d-flex align-items-center gap-2 text-white small fw-bold">
                  <Gem size={18} className="text-gold" /> 24K Real Gold Zari Certified
                </div>
                <div className="d-flex align-items-center gap-2 text-white small fw-bold">
                  <Award size={18} className="text-gold" /> 100% Pure Mulberry & Cashmere
                </div>
                <div className="d-flex align-items-center gap-2 text-white small fw-bold">
                  <ShieldCheck size={18} className="text-gold" /> Insured Pan-India & Global Express
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Live Stats Ticker Section */}
      <section className="bg-gold-gradient py-3 text-white">
        <div className="container">
          <div className="row text-center g-3 align-items-center">
            <div className="col-6 col-md-3">
              <div className="fs-3 font-serif fw-extrabold">800+</div>
              <div className="small opacity-90 text-uppercase fw-bold">Master Weavers Guild</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fs-3 font-serif fw-extrabold">100%</div>
              <div className="small opacity-90 text-uppercase fw-bold">Certified Pure Mulberry Silk</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fs-3 font-serif fw-extrabold">50,000+</div>
              <div className="small opacity-90 text-uppercase fw-bold">Global Royal Clients</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fs-3 font-serif fw-extrabold">24K</div>
              <div className="small opacity-90 text-uppercase fw-bold">Authentic Zari Seal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Luxury & Brand Pillars */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <motion.div whileHover={{ y: -8 }} className="glass-card p-4 h-100">
                <div className="timeline-icon-box mb-3 mx-auto">
                  <Gem size={36} />
                </div>
                <h4 className="font-serif fw-bold fs-4">24K Gold Zari & Pure Silks</h4>
                <p className="small text-muted mb-0">Hand-loomed in Banaras and Kanchipuram using 100% natural Mulberry silkworm threads and pure silver-gold zari.</p>
              </motion.div>
            </div>

            <div className="col-md-4">
              <motion.div whileHover={{ y: -8 }} className="glass-card p-4 h-100">
                <div className="timeline-icon-box mb-3 mx-auto">
                  <Globe size={36} />
                </div>
                <h4 className="font-serif fw-bold fs-4">Heritage Artisan Guild</h4>
                <p className="small text-muted mb-0">Directly supporting 800+ 5th-generation master weavers across Varanasi, Chanderi, Kashmir, and Giza with fair trade honour.</p>
              </motion.div>
            </div>

            <div className="col-md-4">
              <motion.div whileHover={{ y: -8 }} className="glass-card p-4 h-100">
                <div className="timeline-icon-box mb-3 mx-auto">
                  <ShieldCheck size={36} />
                </div>
                <h4 className="font-serif fw-bold fs-4">Zero-Chemical Botanical Dyes</h4>
                <p className="small text-muted mb-0">Dyed with organic indigo, turmeric, madder root, and marigold extracts, ensuring zero harsh chemicals touch your skin.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW UNIQUE SECTION: Bespoke Royal Atelier Configurator Studio */}
      <section className="section-padding position-relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="sub-title d-inline-flex align-items-center gap-1">
                <Crown size={18} className="text-gold" /> Bespoke Atelier Customizer
              </span>
              <h2 className="section-title">Design Your Custom Royal Heirloom</h2>
              <p className="text-muted mb-4 fs-5">
                Select your preferred pure silk loom, gold zari thread weight, and imperial color palette. Our master weavers in Varanasi will handcraft your custom creation.
              </p>

              {/* Fabric Picker */}
              <div className="mb-4">
                <label className="fw-bold mb-2 small text-uppercase text-gold">1. Choose Pure Heritage Weave</label>
                <div className="d-flex flex-wrap gap-2">
                  {['Banarasi Mulberry Silk', 'Egyptian Giza Cotton', 'Himalayan Cashmere Pashmina'].map((f) => (
                    <button
                      key={f}
                      type="button"
                      className={`btn btn-sm ${selectedFabric === f ? 'btn-gold' : 'btn-outline-gold'}`}
                      onClick={() => setSelectedFabric(f)}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Zari Picker */}
              <div className="mb-4">
                <label className="fw-bold mb-2 small text-uppercase text-gold">2. Choose Zari Embroidery</label>
                <div className="d-flex flex-wrap gap-2">
                  {['24K Real Gold Zari', 'Pure Silver Thread Weave', 'Antique Zardozi Work'].map((z) => (
                    <button
                      key={z}
                      type="button"
                      className={`btn btn-sm ${selectedZari === z ? 'btn-gold' : 'btn-outline-gold'}`}
                      onClick={() => setSelectedZari(z)}
                    >
                      {z}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Picker */}
              <div className="mb-4">
                <label className="fw-bold mb-2 small text-uppercase text-gold">3. Select Imperial Royal Palette</label>
                <div className="d-flex flex-wrap gap-2">
                  {['Imperial Ruby Red', 'Royal Navy Velvet', 'Emerald Palace Green', 'Champagne Gold'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      className={`btn btn-sm ${selectedColor === c ? 'btn-gold' : 'btn-outline-gold'}`}
                      onClick={() => setSelectedColor(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 pt-2">
                <button
                  className="btn btn-gold btn-lg px-4 py-3"
                  onClick={() => {
                    addToCart({
                      id: 999,
                      name: `Custom Atelier (${selectedFabric} - ${selectedColor})`,
                      price: customPrice,
                      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
                      desc: `Custom handwoven piece in ${selectedColor} with ${selectedZari}.`
                    }, 1);
                    setIsCheckoutOpen(true);
                  }}
                >
                  Reserve Custom Loom (₹{customPrice.toLocaleString('en-IN')})
                </button>
              </div>
            </div>

            {/* Right Card Preview */}
            <div className="col-lg-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4 border-gold shadow-lg position-relative"
                style={{ backgroundColor: 'var(--bg-card-solid)' }}
              >
                <span className="badge-discount position-absolute top-0 end-0 m-4 fs-6">Bespoke Atelier</span>
                <img
                  src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
                  alt="Custom Atelier Preview"
                  className="img-fluid rounded-3 mb-4 w-100"
                  style={{ maxHeight: '350px', objectFit: 'cover' }}
                />

                <div className="p-3 bg-cream rounded border border-gold">
                  <h4 className="font-serif fw-bold mb-1 text-heading">{selectedFabric}</h4>
                  <div className="text-gold fw-bold mb-2">Accent: {selectedZari} | Tone: {selectedColor}</div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="small text-muted">Estimated Handloom Time: 14 Days</span>
                    <span className="fs-4 font-serif text-gold fw-extrabold">₹{customPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-3">
            <div>
              <span className="sub-title">Imperial Categories</span>
              <h2 className="section-title mb-0">Explore Royal Weaves & Drapes</h2>
            </div>
            <Link to="/collections" className="btn btn-outline-gold fw-bold">
              View All Categories <ArrowRight size={18} />
            </Link>
          </div>

          <div className="row g-4">
            {CATEGORIES.slice(0, 4).map((cat) => (
              <div key={cat.id} className="col-12 col-md-6 col-lg-3">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                  <Link to="/collections">
                    <div className="category-card">
                      <img src={cat.image} alt={cat.title} />
                      <div className="category-overlay">
                        <h3 className="category-title">{cat.title}</h3>
                        <p className="category-desc">{cat.desc}</p>
                        <span className="category-btn fw-bold">Explore Collection <ArrowRight size={16} /></span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Bestsellers Teaser */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <span className="sub-title">Signature Masterpieces</span>
            <h2 className="section-title">Most Coveted Indian Heirlooms</h2>
            <p className="max-w-600 mx-auto text-muted fs-5">Handwoven by master artisans with uncompromised royal craftsmanship.</p>
          </div>

          <div className="row g-4">
            {PRODUCTS.slice(0, 4).map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-gold btn-lg px-5 py-3">
              Browse Entire Royal Catalog <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonial Banner */}
      <section className="section-padding bg-gold-gradient text-white text-center position-relative overflow-hidden">
        <div className="container position-relative z-2">
          <Sparkles className="mb-3" size={42} />
          <h2 className="font-serif display-5 fw-bold mb-3 max-w-800 mx-auto">
            "Humanlly Banarasi Silk & Cashmere pieces are heirloom quality. Unmatched richness, luster, and authenticity."
          </h2>
          <p className="fs-5 opacity-90 mb-0 fw-bold">— Harper's Bazaar Couture Review 2026</p>
        </div>
      </section>
    </motion.div>
  );
};
