import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-background"></div>
      
      <div className="home-content">
        <div className="hero-section">
          <h1 className="hero-title">
            <span className="title-gradient">Travel DE</span>
          </h1>
          <p className="hero-subtitle">
            Your Ultimate Travel Planning Companion
          </p>
          <p className="hero-description">
            Discover amazing destinations, find the best travel agencies within your budget, 
            and plan your perfect trip with ease.
          </p>
        </div>

        <div className="action-cards">
          <div className="action-card card-search" onClick={() => navigate('/search')}>
            <div className="card-image card-image-search"></div>
            <div className="card-content">
              <div className="card-icon">🔍</div>
              <h3>Search Places</h3>
              <p>Know where you want to go? Search for your dream destination</p>
              <button className="card-button">Explore Now</button>
            </div>
          </div>

          <div className="action-card card-quiz" onClick={() => navigate('/quiz')}>
            <div className="card-image card-image-quiz"></div>
            <div className="card-content">
              <div className="card-icon">🎯</div>
              <h3>Take a Quiz</h3>
              <p>Not sure where to go? Let us suggest the perfect place for you</p>
              <button className="card-button">Start Quiz</button>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2 className="features-title">Why Choose Travel DE?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h4>Budget-Friendly</h4>
              <p>Find travel options that fit your budget perfectly</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <h4>Verified Agencies</h4>
              <p>All agencies are verified with reviews and ratings</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h4>Easy Contact</h4>
              <p>Get direct contact information for all agencies</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <h4>Wide Selection</h4>
              <p>Explore thousands of destinations worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

