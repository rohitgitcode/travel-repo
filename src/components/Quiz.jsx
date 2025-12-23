import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { placesData } from '../data/placesData';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [suggestedPlaces, setSuggestedPlaces] = useState([]);
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question: "Destination Type – Do you prefer beaches, mountains, cities, or cultural heritage sites?",
      options: [
        { value: 'beaches', label: 'Beaches', icon: '🏖️' },
        { value: 'mountains', label: 'Mountains', icon: '⛰️' },
        { value: 'cities', label: 'Cities', icon: '🌃' },
        { value: 'cultural', label: 'Cultural Heritage Sites', icon: '🏛️' }
      ]
    },
    {
      id: 2,
      question: "Travel Style – Adventure, relaxation, sightseeing, or food exploration?",
      options: [
        { value: 'adventure', label: 'Adventure', icon: '🎢' },
        { value: 'relaxation', label: 'Relaxation', icon: '🧘' },
        { value: 'sightseeing', label: 'Sightseeing', icon: '📸' },
        { value: 'food', label: 'Food Exploration', icon: '🍜' }
      ]
    },
    {
      id: 3,
      question: "Climate Preference – Cold, moderate, or warm destinations?",
      options: [
        { value: 'cold', label: 'Cold', icon: '❄️' },
        { value: 'moderate', label: 'Moderate', icon: '🌤️' },
        { value: 'warm', label: 'Warm', icon: '☀️' }
      ]
    },
    {
      id: 4,
      question: "Budget Range – What's your ideal budget?",
      options: [
        { value: '10k-20k', label: '₹10k–₹20k', icon: '💰' },
        { value: '20k-50k', label: '₹20k–₹50k', icon: '💵' },
        { value: '50k+', label: '₹50k+', icon: '💎' }
      ]
    },
    {
      id: 5,
      question: "Trip Duration – Weekend, 1 week, or 2+ weeks?",
      options: [
        { value: 'weekend', label: 'Weekend', icon: '📅' },
        { value: '1week', label: '1 Week', icon: '📆' },
        { value: '2weeks+', label: '2+ Weeks', icon: '🗓️' }
      ]
    },
    {
      id: 6,
      question: "Companions – Solo, friends, family, or group travel?",
      options: [
        { value: 'solo', label: 'Solo', icon: '🚶' },
        { value: 'friends', label: 'Friends', icon: '👥' },
        { value: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
        { value: 'group', label: 'Group Travel', icon: '👫' }
      ]
    },
    {
      id: 7,
      question: "Activity Pace – Packed itinerary or relaxed, flexible schedule?",
      options: [
        { value: 'packed', label: 'Packed Itinerary', icon: '⚡' },
        { value: 'relaxed', label: 'Relaxed & Flexible', icon: '🌊' }
      ]
    },
    {
      id: 8,
      question: "Must-Have Activities – Trekking, shopping, museums, nightlife, or local food tours?",
      options: [
        { value: 'trekking', label: 'Trekking', icon: '🥾' },
        { value: 'shopping', label: 'Shopping', icon: '🛍️' },
        { value: 'museums', label: 'Museums', icon: '🏛️' },
        { value: 'nightlife', label: 'Nightlife', icon: '🌙' },
        { value: 'foodtours', label: 'Local Food Tours', icon: '🍽️' }
      ]
    },
    {
      id: 9,
      question: "Accommodation Style – Hostel, hotel, resort, or homestay?",
      options: [
        { value: 'hostel', label: 'Hostel', icon: '🛏️' },
        { value: 'hotel', label: 'Hotel', icon: '🏨' },
        { value: 'resort', label: 'Resort', icon: '🏖️' },
        { value: 'homestay', label: 'Homestay', icon: '🏠' }
      ]
    },
    {
      id: 10,
      question: "Transport Preference – Flights, trains, buses, or self-drive?",
      options: [
        { value: 'flights', label: 'Flights', icon: '✈️' },
        { value: 'trains', label: 'Trains', icon: '🚂' },
        { value: 'buses', label: 'Buses', icon: '🚌' },
        { value: 'selfdrive', label: 'Self-Drive', icon: '🚗' }
      ]
    }
  ];

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (allAnswers) => {
    const destinationTypeMap = {
      'beaches': ['Beach', 'Coastal', 'Island', 'Tropical'],
      'mountains': ['Mountain', 'Alpine', 'Hill', 'Adventure'],
      'cities': ['City', 'Urban', 'Nightlife', 'Modern'],
      'cultural': ['Culture', 'History', 'Heritage', 'Temple', 'Ancient']
    };

    const travelStyleMap = {
      'adventure': ['Adventure', 'Sports', 'Mountain', 'Trekking'],
      'relaxation': ['Relaxation', 'Beach', 'Spa', 'Peaceful'],
      'sightseeing': ['Sightseeing', 'Tour', 'Landmark', 'Scenic'],
      'food': ['Food', 'Cuisine', 'Restaurant', 'Culinary']
    };

    const climateMap = {
      'cold': ['Cold', 'Snow', 'Winter', 'Alpine'],
      'moderate': ['Moderate', 'Mild', 'Temperate', 'Spring'],
      'warm': ['Warm', 'Tropical', 'Summer', 'Beach']
    };

    const budgetMap = {
      '10k-20k': ['Budget-friendly', 'Economy'],
      '20k-50k': ['Moderate', 'Mid-range'],
      '50k+': ['Luxury', 'Premium']
    };

    let scoredPlaces = placesData.map(place => {
      let score = 0;
      
      // Destination Type matching
      const destType = allAnswers[0];
      if (destinationTypeMap[destType]) {
        destinationTypeMap[destType].forEach(keyword => {
          if (place.tags.some(tag => tag.toLowerCase().includes(keyword.toLowerCase())) ||
              place.description.toLowerCase().includes(keyword.toLowerCase())) {
            score += 4;
          }
        });
      }

      // Travel Style matching
      const travelStyle = allAnswers[1];
      if (travelStyleMap[travelStyle]) {
        travelStyleMap[travelStyle].forEach(keyword => {
          if (place.tags.some(tag => tag.toLowerCase().includes(keyword.toLowerCase()))) {
            score += 3;
          }
        });
      }

      // Climate matching
      const climate = allAnswers[2];
      if (climateMap[climate]) {
        climateMap[climate].forEach(keyword => {
          if (place.description.toLowerCase().includes(keyword.toLowerCase()) ||
              place.tags.some(tag => tag.toLowerCase().includes(keyword.toLowerCase()))) {
            score += 2;
          }
        });
      }

      // Budget matching
      const budget = allAnswers[3];
      if (budgetMap[budget]) {
        budgetMap[budget].forEach(keyword => {
          if (place.budgetRange.toLowerCase().includes(keyword.toLowerCase())) {
            score += 3;
          }
        });
      }

      // Rating bonus
      score += place.rating;

      return { ...place, score };
    });

    scoredPlaces.sort((a, b) => b.score - a.score);
    setSuggestedPlaces(scoredPlaces.slice(0, 6));
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSuggestedPlaces([]);
  };

  const handlePlaceSelect = (place) => {
    navigate(`/agencies/${place.name}`);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (showResults) {
    return (
      <div className="quiz-container">
        <div className="quiz-results">
          <div className="results-header">
            <h1 className="results-title">🎉 Perfect Matches for You!</h1>
            <p className="results-subtitle">Based on your preferences, here are our top recommendations</p>
          </div>

          <div className="suggested-places">
            {suggestedPlaces.map((place) => (
              <div
                key={place.id}
                className="suggested-card"
                onClick={() => handlePlaceSelect(place)}
              >
                <div className="suggested-image" style={{ backgroundImage: `url(${place.image})` }}>
                  <div className="match-badge">Match Score: {place.score.toFixed(1)}</div>
                </div>
                <div className="suggested-content">
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                  <div className="suggested-tags">
                    {place.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="suggested-info">
                    <span>💰 {place.budgetRange}</span>
                    <span>⭐ {place.rating}/5</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="quiz-actions">
            <button className="restart-button" onClick={handleRestart}>
              🔄 Take Quiz Again
            </button>
            <button className="back-button" onClick={() => navigate('/')}>
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <div className="quiz-header">
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <p className="progress-text">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="question-card">
          <h2 className="question-title">{questions[currentQuestion].question}</h2>
          <div className="options-grid">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleAnswer(option.value)}
              >
                <span className="option-icon">{option.icon}</span>
                <span className="option-label">{option.label}</span>
              </button>
            ))}
          </div>
          
          <div className="quiz-navigation">
            {currentQuestion > 0 && (
              <button className="prev-button" onClick={handlePrevious}>
                ← Previous
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
