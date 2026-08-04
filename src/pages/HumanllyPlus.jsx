import React from 'react';
import { motion } from 'framer-motion';
import { Crown, CheckCircle2, Star, Sparkles, Shield, UserCheck, Award, Gem } from 'lucide-react';

export const HumanllyPlus = () => {
  const tiers = [
    {
      name: 'Silver Connoisseur Guild',
      price: '₹7,999',
      period: 'per year',
      badge: 'Royal Starter',
      featured: false,
      features: [
        '10% off all silk & cotton master weaves',
        'Complimentary 24K gold foil gift wrapping',
        'Early access to seasonal haute couture lookbooks',
        'Dedicated fabric care & preservation support'
      ]
    },
    {
      name: 'Gold Royal Heritage VIP',
      price: '₹19,999',
      period: 'per year',
      badge: 'Most Popular Privilege',
      featured: true,
      features: [
        '20% off all signature Banarasi & Giza masterpieces',
        'Complimentary Express Priority Insured Shipping',
        'Personal Bespoke Stylist & Couture Director',
        'Priority custom weaving reservation at Varanasi guild',
        'Annual complimentary zari & silk restoration'
      ]
    },
    {
      name: 'Platinum Imperial Atelier',
      price: '₹49,999',
      period: 'per year',
      badge: 'Imperial Haute Elite',
      featured: false,
      features: [
        '30% off across all haute couture & bridal lines',
        'Private Studio Atelier invitations in Paris, Milan & Varanasi',
        'Dedicated Master Weaver assigned exclusively to your garments',
        'Custom monogramming with 24K gold zari thread',
        '24/7 Royal VIP Concierge hotline'
      ]
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <span className="sub-title text-gold d-inline-flex align-items-center gap-1">
            <Gem size={16} /> Exclusive Royal Guild Access
          </span>
          <h1 className="font-serif display-4 fw-extrabold">Humanlly+ Imperial VIP Guild</h1>
          <p className="max-w-600 mx-auto text-light opacity-90 fs-5">
            Elevate your lifestyle with private atelier access, bespoke master weaver reservations, and exclusive haute couture invitations.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <span className="sub-title">Imperial Membership Tiers</span>
            <h2 className="section-title">Select Your Privilege Level</h2>
            <p className="text-muted max-w-600 mx-auto">Experience bespoke Indian textile heritage crafted for royalty.</p>
          </div>

          <div className="row g-4 align-items-center">
            {tiers.map((tier, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <motion.div
                  whileHover={{ y: -10, scale: tier.featured ? 1.05 : 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`pricing-card ${tier.featured ? 'featured' : ''}`}
                >
                  {tier.badge && <span className="pricing-badge d-flex align-items-center gap-1"><Sparkles size={12} /> {tier.badge}</span>}

                  <div className="text-center">
                    <Crown className="text-gold mb-2" size={38} />
                    <h3 className="font-serif fs-3 fw-bold">{tier.name}</h3>
                    <div className="pricing-price">
                      {tier.price} <span className="fs-6">/ {tier.period}</span>
                    </div>
                  </div>

                  <ul className="pricing-features">
                    {tier.features.map((feat, i) => (
                      <li key={i}>
                        <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                        <span className="fw-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`btn ${tier.featured ? 'btn-gold' : 'btn-outline-gold'} w-100 py-3 fw-bold`}
                    onClick={() => alert(`Enrolling in ${tier.name} VIP!`)}
                  >
                    Join {tier.name}
                  </button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Perks */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <motion.div whileHover={{ y: -5 }} className="glass-card p-4 h-100">
                <UserCheck size={40} className="text-gold mb-3 mx-auto" />
                <h4 className="font-serif fw-bold">Personal Haute Stylist</h4>
                <p className="small mb-0 text-muted">1-on-1 fashion curation with top international fashion directors and weavers.</p>
              </motion.div>
            </div>

            <div className="col-md-4">
              <motion.div whileHover={{ y: -5 }} className="glass-card p-4 h-100">
                <Sparkles size={40} className="text-gold mb-3 mx-auto" />
                <h4 className="font-serif fw-bold">Private Runway Previews</h4>
                <p className="small mb-0 text-muted">Be the first to inspect limited-edition Banarasi silk looms and Giza cotton harvests.</p>
              </motion.div>
            </div>

            <div className="col-md-4">
              <motion.div whileHover={{ y: -5 }} className="glass-card p-4 h-100">
                <Shield size={40} className="text-gold mb-3 mx-auto" />
                <h4 className="font-serif fw-bold">Lifetime Seam & Zari Guarantee</h4>
                <p className="small mb-0 text-muted">Free lifetime seam adjustments, re-polishing of 24K gold zari, and fabric care inspection.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
