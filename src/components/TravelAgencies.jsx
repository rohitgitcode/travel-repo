import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { travelAgenciesData } from '../data/travelAgenciesData';
import './TravelAgencies.css';

const TravelAgencies = () => {
  const { place } = useParams();
  const navigate = useNavigate();
  const [budget, setBudget] = useState('');
  const [filteredAgencies, setFilteredAgencies] = useState([]);
  const [allAgencies, setAllAgencies] = useState([]);
  const [isIndianPlace, setIsIndianPlace] = useState(false);

  useEffect(() => {
    // Filter agencies by place
    const agenciesForPlace = travelAgenciesData.filter(
      agency => agency.places.includes(place)
    );
    setAllAgencies(agenciesForPlace);
    setFilteredAgencies(agenciesForPlace);
    
    // Check if it's an Indian place by checking if any agency has ₹ in budget
    const hasIndianCurrency = agenciesForPlace.some(
      agency => agency.budgetRange.includes('₹')
    );
    setIsIndianPlace(hasIndianCurrency);
  }, [place]);

  const handleBudgetChange = (e) => {
    const value = e.target.value;
    setBudget(value);

    if (value === '') {
      setFilteredAgencies(allAgencies);
      return;
    }

    const budgetNum = parseInt(value);
    const filtered = allAgencies.filter(agency => {
      // Remove all non-digit characters including commas
      const agencyBudget = parseInt(agency.budgetRange.replace(/[^0-9]/g, ''));
      return agencyBudget <= budgetNum;
    });

    setFilteredAgencies(filtered);
  };

  const handleAgencyClick = (agencyId) => {
    navigate(`/agency/${agencyId}`);
  };

  return (
    <div className="agencies-container">
      <div className="agencies-header">
        <button className="back-button" onClick={() => navigate('/search')}>
          ← Back to Search
        </button>
        <h1 className="agencies-title">Travel Agencies for {place}</h1>
        <p className="agencies-subtitle">Find the best travel agencies within your budget</p>
      </div>

      <div className="budget-filter-container">
        <div className="budget-filter">
          <label htmlFor="budget" className="budget-label">
            💰 Filter by Maximum Budget {isIndianPlace ? '(₹)' : '(USD)'}
          </label>
          <input
            type="number"
            id="budget"
            placeholder={`Enter your maximum budget ${isIndianPlace ? 'in ₹' : 'in $'}...`}
            value={budget}
            onChange={handleBudgetChange}
            className="budget-input"
            min="0"
          />
          {budget && (
            <button
              className="clear-budget"
              onClick={() => {
                setBudget('');
                setFilteredAgencies(allAgencies);
              }}
            >
              Clear Filter
            </button>
          )}
        </div>
      </div>

      <div className="agencies-results">
        {filteredAgencies.length > 0 ? (
          <>
            <div className="results-count">
              Found {filteredAgencies.length} travel {filteredAgencies.length === 1 ? 'agency' : 'agencies'}
            </div>
            <div className="agencies-grid">
              {filteredAgencies.map((agency) => (
                <div
                  key={agency.id}
                  className="agency-card"
                  onClick={() => handleAgencyClick(agency.id)}
                >
                  <div className="agency-header-card">
                    <div className="agency-logo">{agency.name.charAt(0)}</div>
                    <div className="agency-title-section">
                      <h3 className="agency-name">{agency.name}</h3>
                      <div className="agency-rating">
                        {'⭐'.repeat(Math.floor(agency.rating))}
                        <span className="rating-number"> {agency.rating}/5</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="agency-details">
                    <div className="detail-item">
                      <span className="detail-label">💰 Budget Range:</span>
                      <span className="detail-value">{agency.budgetRange}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">📍 Location:</span>
                      <span className="detail-value">{agency.location}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">📞 Phone:</span>
                      <span className="detail-value">{agency.phone}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">✉️ Email:</span>
                      <span className="detail-value">{agency.email}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">📸 Instagram:</span>
                      <span className="detail-value instagram-link">@{agency.instagram}</span>
                    </div>
                  </div>

                  <div className="agency-reviews-preview">
                    <div className="reviews-count">
                      {agency.reviews.length} {agency.reviews.length === 1 ? 'review' : 'reviews'}
                    </div>
                    <div className="reviews-excerpt">
                      "{agency.reviews[0]?.text.substring(0, 80)}..."
                    </div>
                  </div>

                  <button className="view-details-button">
                    View Full Details →
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="no-agencies">
            <div className="no-agencies-icon">😔</div>
            <h3>No agencies found</h3>
            <p>
              {budget
                ? `No travel agencies found within your budget of ${isIndianPlace ? '₹' : '$'}${budget}. Try increasing your budget or clearing the filter.`
                : `No travel agencies available for ${place} at the moment.`}
            </p>
            {budget && (
              <button
                className="clear-filter-button"
                onClick={() => {
                  setBudget('');
                  setFilteredAgencies(allAgencies);
                }}
              >
                Clear Budget Filter
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelAgencies;

