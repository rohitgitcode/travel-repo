import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import PlaceSearch from './components/PlaceSearch.jsx';
import Quiz from './components/Quiz.jsx';
import TravelAgencies from './components/TravelAgencies.jsx';
import AgencyDetails from './components/AgencyDetails.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<PlaceSearch />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/agencies/:place" element={<TravelAgencies />} />
          <Route path="/agency/:id" element={<AgencyDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

