import React from 'react';
import { motion } from 'framer-motion';
import { Crown, CheckCircle2, Star, Sparkles, Shield, UserCheck } from 'lucide-react';

export const HumanllyPlus = () => {
  const tiers = [
    {
      name: 'Silver Connoisseur',
      price: '$99',
      period: 'per year',
      badge: 'Starter',
      featured: false,
      features: [
        '10% off all silk & cotton collections',
        'Complimentary luxury gift wrapping',
        'Early access to seasonal lookbooks',
        'Standard fabric care support'
      ]
    },
    {
      name: 'Gold Privilege',
      price: '$249',
      period: 'per year',
      badge: 'Most Popular',
      featured: true,
      features: [
        '20% off all signature masterpieces',
        'Free worldwide expedited shipping',
        'Personal Bespoke Stylist consultation',
        'Priority custom weaving reservation',
        'Annual complimentary fabric restoration'
      ]
    },
    {
      name: 'Royal Diamond VIP',
      price: '$599',
      period: 'per year',
      badge: 'Haute Elite',
      featured: false,
      features: [
        '30% off across all product lines',
        'Private Studio Atelier invitations in Paris & Varanasi',
        'Dedicated Master Weaver assigned to your garments',
        'Custom monogramming & gold thread embroidery',
        '24/7 VIP Concierge phone line'
      ]
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <span className="sub-title text-gold">Exclusive Guild Access</span>
          <h1 className="font-serif display-4 fw-bold">Humanlly+ VIP Concierge</h1>
          <p className="max-w-600 mx-auto text-light opacity-75">
            Elevate your lifestyle with private atelier access, bespoke weaving priority, and private couture invitations.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <span className="sub-title">Membership Tiers</span>
            <h2 className="section-title">Select Your Privilege Level</h2>
          </div>

          <div className="row g-4 align-items-center">
            {tiers.map((tier, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className={`pricing-card ${tier.featured ? 'featured' : ''}`}>
                  {tier.badge && <span className="pricing-badge">{tier.badge}</span>}

                  <div className="text-center">
                    <Crown className="text-gold mb-2" size={32} />
                    <h3 className="font-serif fs-3">{tier.name}</h3>
                    <div className="pricing-price">
                      {tier.price} <span>/ {tier.period}</span>
                    </div>
                  </div>

                  <ul className="pricing-features">
                    {tier.features.map((feat, i) => (
                      <li key={i}>
                        <CheckCircle2 size={18} className="text-gold" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`btn ${tier.featured ? 'btn-gold' : 'btn-outline-gold'} w-100 py-3`}
                    onClick={() => alert(`Enrolling in ${tier.name} VIP!`)}
                  >
                    Join {tier.name}
                  </button>
                </div>
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
              <div className="glass-card p-4 h-100">
                <UserCheck size={36} className="text-gold mb-3 mx-auto" />
                <h4 className="font-serif">Dedicated Stylist</h4>
                <p className="small mb-0">1-on-1 fashion curation with top international fashion directors.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <Sparkles size={36} className="text-gold mb-3 mx-auto" />
                <h4 className="font-serif">Private Previews</h4>
                <p className="small mb-0">Be the first to inspect limited-edition Banarasi silk and Giza cotton looms.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <Shield size={36} className="text-gold mb-3 mx-auto" />
                <h4 className="font-serif">Lifetime Quality Guarantee</h4>
                <p className="small mb-0">Free lifetime seam adjustments, re-dyeing, and fabric care inspection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
