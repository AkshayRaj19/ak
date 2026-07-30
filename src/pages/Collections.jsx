import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/products';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';

export const Collections = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <span className="sub-title text-gold">Couture Categories</span>
          <h1 className="font-serif display-4 fw-bold">Our Luxury Collections</h1>
          <p className="max-w-600 mx-auto text-light opacity-75">
            Masterful weaves created from the finest natural fibers across eight distinct luxury disciplines.
          </p>
        </div>
      </section>

      {/* 8 Categories Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.id}
                className="col-12 col-md-6 col-lg-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to="/products">
                  <div className="category-card">
                    <img src={cat.image} alt={cat.title} />
                    <div className="category-overlay">
                      <h3 className="category-title">{cat.title}</h3>
                      <p className="category-desc">{cat.desc}</p>
                      <span className="category-btn">
                        View Products <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Lookbook Showcase */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="sub-title">Fabric Craftsmanship</span>
              <h2 className="section-title">The Art of Pure Natural Fibers</h2>
              <p className="text-muted mb-4">
                Every thread in a Humanlly textile tells a story of sustainable heritage. From organic Mulberry silk farms to Egyptian long-staple cotton fields, our artisans craft garments that balance regal aesthetics with skin-safe luxury.
              </p>
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="timeline-icon-box m-0" style={{ width: '48px', height: '48px', minWidth: '48px' }}>
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h5 className="font-serif mb-1">Hand-Loomed Jacquard Weaves</h5>
                    <p className="small mb-0">Woven on antique wooden looms by 4th-generation master weavers.</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="timeline-icon-box m-0" style={{ width: '48px', height: '48px', minWidth: '48px' }}>
                    <Layers size={20} />
                  </div>
                  <div>
                    <h5 className="font-serif mb-1">Hypoallergenic Natural Dyes</h5>
                    <p className="small mb-0">Infused with botanical extracts for deep, luminous lightfast pigments.</p>
                  </div>
                </div>
              </div>

              <Link to="/products" className="btn btn-gold">
                Shop Fabric Catalog <ArrowRight size={18} />
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
                    alt="Silk Lookbook"
                    className="img-fluid rounded-4 shadow-md"
                  />
                </div>
                <div className="col-6 pt-4">
                  <img
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80"
                    alt="Cotton Lookbook"
                    className="img-fluid rounded-4 shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
