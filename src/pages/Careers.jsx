import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CAREER_JOBS } from '../data/products';
import { Briefcase, MapPin, Clock, Send, X, CheckCircle } from 'lucide-react';

export const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', portfolio: '', notes: '' });

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      setSelectedJob(null);
      setFormData({ name: '', email: '', portfolio: '', notes: '' });
    }, 2500);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <span className="sub-title text-gold">Join Our Guild</span>
          <h1 className="font-serif display-4 fw-bold">Artisan Careers & Openings</h1>
          <p className="max-w-600 mx-auto text-light opacity-75">
            Craft the future of sustainable luxury textile design alongside world-renowned master weavers and fashion leaders.
          </p>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <span className="sub-title">Opportunities</span>
            <h2 className="section-title">Current Open Positions</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              {CAREER_JOBS.map(job => (
                <div key={job.id} className="job-card">
                  <div>
                    <span className="badge bg-gold-gradient text-white mb-2">{job.department}</span>
                    <h4 className="font-serif fs-4 mb-2">{job.title}</h4>
                    <div className="d-flex gap-3 text-muted small">
                      <span className="d-flex align-items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="d-flex align-items-center gap-1"><Clock size={14} /> {job.type}</span>
                    </div>
                  </div>

                  <button
                    className="btn btn-outline-gold"
                    onClick={() => setSelectedJob(job)}
                  >
                    Apply Now <Send size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {selectedJob && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 z-3 p-4 d-flex justify-content-center align-items-center"
          style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(6px)' }}
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="glass-card p-4 mx-3 position-relative"
            style={{ maxWidth: '600px', width: '100%', backgroundColor: 'var(--bg-card-solid)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn btn-link text-heading position-absolute top-0 end-0 m-3 p-0"
              onClick={() => setSelectedJob(null)}
            >
              <X size={24} />
            </button>

            {applied ? (
              <div className="text-center py-5">
                <CheckCircle className="text-gold mb-3 mx-auto" size={56} />
                <h3 className="font-serif text-gold">Application Submitted!</h3>
                <p className="text-muted">Thank you for applying for {selectedJob.title}. Our HR Atelier team will contact you shortly.</p>
              </div>
            ) : (
              <>
                <span className="sub-title">{selectedJob.department}</span>
                <h3 className="font-serif fs-3 mb-4">Apply for: {selectedJob.title}</h3>

                <form onSubmit={handleApplySubmit}>
                  <div className="mb-3">
                    <label className="form-label font-serif">Full Name</label>
                    <input
                      type="text"
                      className="form-control bg-transparent border-gold text-heading"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label font-serif">Email Address</label>
                    <input
                      type="email"
                      className="form-control bg-transparent border-gold text-heading"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label font-serif">Portfolio / Resume URL</label>
                    <input
                      type="url"
                      className="form-control bg-transparent border-gold text-heading"
                      placeholder="https://linkedin.com/in/... or portfolio"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label font-serif">Cover Note / Experience</label>
                    <textarea
                      className="form-control bg-transparent border-gold text-heading"
                      rows="3"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-gold w-100 py-3">
                    Submit Application <Send size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};
