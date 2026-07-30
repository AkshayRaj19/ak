import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { ShoppingBag, Compass, ArrowRight, ShieldCheck, Feather, Globe, Sparkles } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        'Pure Mulberry Silks',
        'Egyptian Giza Cottons',
        'Handspun European Linens',
        'Sustainable Haute Couture'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-overlay"></div>
        <div className="floating-blob blob-1"></div>
        <div className="floating-blob blob-2"></div>

        <div className="container position-relative z-2">
          <div className="row align-items-center min-vh-100 py-5">
            <div className="col-lg-8 hero-content">
              <span className="sub-title text-gold">International Haute Couture & Weaving</span>
              <h1 className="typed-headline">
                Crafting <span ref={typedEl} className="text-gold"></span>
              </h1>
              <p className="hero-description">
                Discover the pinnacle of global textile artistry. From Mulberry silks to Giza cottons and hand-loomed linens, Humanlly redefines luxury fashion for the eco-conscious global connoisseur.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/products" className="btn btn-gold">
                  <ShoppingBag size={18} /> Shop Masterpieces
                </Link>
                <Link to="/collections" className="btn btn-outline-gold text-white">
                  <Compass size={18} /> Explore Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Luxury & Brand Pillars */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <div className="timeline-icon-box mb-3">
                  <Feather size={32} />
                </div>
                <h4 className="font-serif">100% Organic Fibers</h4>
                <p className="small mb-0">Harvested from certified sustainable Mulberry silkworm farms and Egyptian long-staple cotton fields.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <div className="timeline-icon-box mb-3">
                  <Globe size={32} />
                </div>
                <h4 className="font-serif">Global Artisan Guild</h4>
                <p className="small mb-0">Empowering 500+ master handloom weavers with fair wages, healthcare, and traditional preservation.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <div className="timeline-icon-box mb-3">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="font-serif">Zero-Waste Dyeing</h4>
                <p className="small mb-0">Colored with botanical plant extracts and heavy-metal-free water filtration systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-3">
            <div>
              <span className="sub-title">Couture Categories</span>
              <h2 className="section-title mb-0">Explore Our Featured Weaves</h2>
            </div>
            <Link to="/collections" className="btn btn-outline-gold">
              View All Categories <ArrowRight size={18} />
            </Link>
          </div>

          <div className="row g-4">
            {CATEGORIES.slice(0, 4).map((cat) => (
              <div key={cat.id} className="col-12 col-md-6 col-lg-3">
                <Link to="/collections">
                  <div className="category-card">
                    <img src={cat.image} alt={cat.title} />
                    <div className="category-overlay">
                      <h3 className="category-title">{cat.title}</h3>
                      <p className="category-desc">{cat.desc}</p>
                      <span className="category-btn">Explore Range <ArrowRight size={16} /></span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Bestsellers Teaser */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-5">
            <span className="sub-title">Signature Masterpieces</span>
            <h2 className="section-title">Featured Bestsellers</h2>
            <p className="max-w-600 mx-auto">Handcrafted by master weavers and tailored with uncompromised precision.</p>
          </div>

          <div className="row g-4">
            {PRODUCTS.slice(0, 4).map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-gold">
              Explore Complete Product Catalog <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonial Banner */}
      <section className="section-padding bg-gold-gradient text-white text-center">
        <div className="container">
          <Sparkles className="mb-3" size={36} />
          <h2 className="font-serif fs-1 mb-3">"The softness of Humanlly Giza Cotton is unparalleled in luxury fashion."</h2>
          <p className="fs-5 opacity-90 mb-0">— Vogue Haute Couture Review 2026</p>
        </div>
      </section>
    </motion.div>
  );
};
