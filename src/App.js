import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AnimalsPage from './pages/AnimalsPage';
import AnimalDetailsPage from './pages/AnimalDetails';
import GamePage from './pages/GamePage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/animals" element={<AnimalsPage />} />
            <Route path="/animal/:id" element={<AnimalDetailsPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
