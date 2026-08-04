import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/products';
import { ArrowRight, Sparkles, Layers, Gem, ShieldCheck } from 'lucide-react';

export const Collections = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <span className="sub-title text-gold d-inline-flex align-items-center gap-1">
            <Gem size={16} /> Haute Couture Disciplines
          </span>
          <h1 className="font-serif display-4 fw-extrabold">Our Royal Master Collections</h1>
          <p className="max-w-600 mx-auto text-light opacity-90 fs-5">
            Masterful weaves created from 100% pure organic Mulberry silk, Himalayan cashmere, and long-staple Egyptian cotton.
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
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <Link to="/products">
                  <div className="category-card">
                    <img src={cat.image} alt={cat.title} />
                    <div className="category-overlay">
                      <h3 className="category-title">{cat.title}</h3>
                      <p className="category-desc">{cat.desc}</p>
                      <span className="category-btn fw-bold">
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
              <span className="sub-title d-inline-flex align-items-center gap-1">
                <Sparkles size={16} /> Heritage Craftsmanship
              </span>
              <h2 className="section-title">The Art of Pure Natural Fibers</h2>
              <p className="text-muted mb-4 fs-6">
                Every thread in a Humanlly textile tells a story of 500-year-old Banarasi and Kanjivaram heritage. From organic silkworm farms to Egyptian long-staple cotton fields, our artisans balance royal aesthetics with skin-safe luxury.
              </p>
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="timeline-icon-box m-0" style={{ width: '52px', height: '52px', minWidth: '52px' }}>
                    <Gem size={24} />
                  </div>
                  <div>
                    <h5 className="font-serif mb-1 fw-bold">24K Gold Zari & Hand-Loomed Jacquard</h5>
                    <p className="small text-muted mb-0">Woven on antique wooden looms by 5th-generation master weavers in Varanasi.</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="timeline-icon-box m-0" style={{ width: '52px', height: '52px', minWidth: '52px' }}>
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h5 className="font-serif mb-1 fw-bold">Botanical Hypoallergenic Dyes</h5>
                    <p className="small text-muted mb-0">Infused with natural organic indigo, turmeric, and madder root for luminous skin-friendly sheen.</p>
                  </div>
                </div>
              </div>

              <Link to="/products" className="btn btn-gold px-4 py-3 fs-5">
                Explore Full Catalog <ArrowRight size={18} />
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
                    alt="Silk Lookbook"
                    className="img-fluid rounded-4 shadow-md"
                  />
                </div>
                <div className="col-6 pt-4">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
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
