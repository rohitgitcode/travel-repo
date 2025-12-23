import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { travelAgenciesData } from '../data/travelAgenciesData';
import './AgencyDetails.css';

const AgencyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const agency = travelAgenciesData.find(a => a.id === parseInt(id));

  if (!agency) {
    return (
      <div className="agency-details-container">
        <div className="not-found">
          <h2>Agency not found</h2>
          <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="agency-details-container">
      <div className="details-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

      <div className="agency-details-content">
        <div className="agency-hero">
          <div className="agency-hero-logo">{agency.name.charAt(0)}</div>
          <div className="agency-hero-info">
            <h1 className="agency-hero-name">{agency.name}</h1>
            <div className="agency-hero-rating">
              {'⭐'.repeat(Math.floor(agency.rating))}
              <span className="hero-rating-number"> {agency.rating}/5</span>
              <span className="hero-reviews-count">({agency.reviews.length} reviews)</span>
            </div>
            <p className="agency-hero-location">📍 {agency.location}</p>
          </div>
        </div>

        <div className="details-sections">
          <div className="details-section">
            <h2 className="section-title">💰 Budget Information</h2>
            <div className="budget-card">
              <div className="budget-amount">{agency.budgetRange}</div>
              <p className="budget-description">Average package price per person</p>
            </div>
          </div>

          <div className="details-section">
            <h2 className="section-title">📞 Contact Information</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-info">
                  <h4>Phone Number</h4>
                  <a href={`tel:${agency.phone}`} className="contact-link">
                    {agency.phone}
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-info">
                  <h4>Email Address</h4>
                  <a href={`mailto:${agency.email}`} className="contact-link">
                    {agency.email}
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📸</div>
                <div className="contact-info">
                  <h4>Instagram</h4>
                  <a
                    href={`https://instagram.com/${agency.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link instagram"
                  >
                    @{agency.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="details-section">
            <h2 className="section-title">🌍 Available Destinations</h2>
            <div className="destinations-list">
              {agency.places.map((place, index) => (
                <span key={index} className="destination-tag">{place}</span>
              ))}
            </div>
          </div>

          <div className="details-section">
            <h2 className="section-title">⭐ Customer Reviews</h2>
            <div className="reviews-list">
              {agency.reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-header">
                    <div className="reviewer-name">{review.reviewer}</div>
                    <div className="review-rating">
                      {'⭐'.repeat(review.rating)}
                    </div>
                  </div>
                  <p className="review-text">{review.text}</p>
                  <div className="review-date">{review.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="details-section">
            <h2 className="section-title">ℹ️ About</h2>
            <div className="about-card">
              <p className="about-text">{agency.description}</p>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button
            className="contact-button"
            onClick={() => window.open(`tel:${agency.phone}`, '_self')}
          >
            📞 Call Now
          </button>
          <button
            className="email-button"
            onClick={() => window.open(`mailto:${agency.email}`, '_self')}
          >
            ✉️ Send Email
          </button>
          <button
            className="instagram-button"
            onClick={() => window.open(`https://instagram.com/${agency.instagram}`, '_blank')}
          >
            📸 Visit Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgencyDetails;


