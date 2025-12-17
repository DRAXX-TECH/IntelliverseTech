'use client';

import { useState } from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    // later: send email to backend / API / Mailchimp
  };

  return (
    <section className="newsletter-page">
        
      <div className="newsletter-card">
        <FaEnvelopeOpenText size={48} className="newsletter-icon" />

        <h1 className="newsletter-title">Subscribe to Our Newsletter</h1>
        <p className="newsletter-description">
          Get weekly insights on technology trends, product updates,
          and expert analysis — straight to your inbox.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </form>
        ) : (
          <p className="newsletter-success">
            ✅ Thanks for subscribing! Check your inbox soon.
          </p>
        )}
        
      </div>
      
    </section>
  );
}
