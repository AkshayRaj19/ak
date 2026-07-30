import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../data/products';
import { Calendar, User, ArrowRight, X } from 'lucide-react';

export const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <span className="sub-title text-gold">Editorial Journal</span>
          <h1 className="font-serif display-4 fw-bold">The Haute Couture Journal</h1>
          <p className="max-w-600 mx-auto text-light opacity-75">
            Insights on eco-friendly textile weaving, natural fiber science, and international fashion trends.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4 align-items-center mb-5">
            <div className="col-lg-6">
              <img
                src={BLOG_POSTS[0].image}
                alt={BLOG_POSTS[0].title}
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-lg-6">
              <span className="blog-meta">{BLOG_POSTS[0].category}</span>
              <h2 className="font-serif display-6 mb-3">{BLOG_POSTS[0].title}</h2>
              <div className="d-flex gap-4 text-muted small mb-3">
                <span className="d-flex align-items-center gap-1"><User size={14} /> {BLOG_POSTS[0].author}</span>
                <span className="d-flex align-items-center gap-1"><Calendar size={14} /> {BLOG_POSTS[0].date}</span>
              </div>
              <p className="lead text-muted mb-4">{BLOG_POSTS[0].summary}</p>
              <button className="btn btn-gold" onClick={() => setSelectedArticle(BLOG_POSTS[0])}>
                Read Full Feature <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Grid of articles */}
          <div className="row g-4">
            {BLOG_POSTS.map(post => (
              <div key={post.id} className="col-12 col-md-4">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-content">
                    <span className="blog-meta">{post.category}</span>
                    <h4 className="font-serif fs-4 mb-2">{post.title}</h4>
                    <p className="small text-muted mb-3">{post.summary}</p>
                    <button
                      className="btn btn-outline-gold btn-sm"
                      onClick={() => setSelectedArticle(post)}
                    >
                      Read Article <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reading Modal */}
      {selectedArticle && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 z-3 p-4 d-flex justify-content-center align-items-center"
          style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(6px)' }}
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="glass-card p-4 mx-3 position-relative"
            style={{ maxWidth: '700px', width: '100%', backgroundColor: 'var(--bg-card-solid)', maxHeight: '85vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn btn-link text-heading position-absolute top-0 end-0 m-3 p-0"
              onClick={() => setSelectedArticle(null)}
            >
              <X size={24} />
            </button>

            <span className="blog-meta">{selectedArticle.category}</span>
            <h3 className="font-serif fs-2 mb-3">{selectedArticle.title}</h3>
            <div className="d-flex gap-4 text-muted small mb-4">
              <span>By {selectedArticle.author}</span>
              <span>{selectedArticle.date}</span>
            </div>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="img-fluid rounded-3 mb-4 w-100"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />

            <p className="text-muted leading-relaxed">
              {selectedArticle.summary}
            </p>
            <p className="text-muted leading-relaxed">
              Our master weavers spent over 12 months refining the thread density and botanical dye ratios. By pairing traditional handloom craftsmanship with modern tension controls, each piece achieves unmatched drape and breathability.
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};
