import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { placesData } from '../data/placesData';
import './PlaceSearch.css';

const PlaceSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === '') {
      setFilteredPlaces([]);
      return;
    }

    const filtered = placesData.filter(place =>
      place.name.toLowerCase().includes(value.toLowerCase()) ||
      place.country.toLowerCase().includes(value.toLowerCase()) ||
      place.description.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPlaces(filtered);
  };

  const handlePlaceSelect = (place) => {
    navigate(`/agencies/${place.name}`);
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        <h1 className="search-title">Search Your Dream Destination</h1>
        <p className="search-subtitle">Find the perfect place for your next adventure</p>
      </div>

      <div className="search-box-container">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search for places, countries, or destinations..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </div>

      {searchTerm && (
        <div className="results-container">
          {filteredPlaces.length > 0 ? (
            <>
              <h2 className="results-title">Search Results</h2>
              <div className="places-grid">
                {filteredPlaces.map((place) => (
                  <div
                    key={place.id}
                    className="place-card"
                    onClick={() => handlePlaceSelect(place)}
                  >
                    <div className="place-image" style={{ backgroundImage: `url(${place.image})` }}>
                      <div className="place-badge">{place.country}</div>
                    </div>
                    <div className="place-content">
                      <h3 className="place-name">{place.name}</h3>
                      <p className="place-description">{place.description}</p>
                      <div className="place-tags">
                        {place.tags.map((tag, index) => (
                          <span key={index} className="tag">{tag}</span>
                        ))}
                      </div>
                      <div className="place-info">
                        <span className="info-item">💰 Budget: {place.budgetRange}</span>
                        <span className="info-item">⭐ Rating: {place.rating}/5</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">😔</div>
              <h3>No places found</h3>
              <p>Try searching with different keywords</p>
            </div>
          )}
        </div>
      )}

      {!searchTerm && (
        <div className="popular-section">
          <h2 className="popular-title">Popular Destinations</h2>
          <div className="places-grid">
            {placesData.slice(0, 6).map((place) => (
              <div
                key={place.id}
                className="place-card"
                onClick={() => handlePlaceSelect(place)}
              >
                <div className="place-image" style={{ backgroundImage: `url(${place.image})` }}>
                  <div className="place-badge">{place.country}</div>
                </div>
                <div className="place-content">
                  <h3 className="place-name">{place.name}</h3>
                  <p className="place-description">{place.description}</p>
                  <div className="place-tags">
                    {place.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="place-info">
                    <span className="info-item">💰 {place.budgetRange}</span>
                    <span className="info-item">⭐ {place.rating}/5</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceSearch;

