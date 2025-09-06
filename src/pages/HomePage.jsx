import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to BioRealm</h1>
          <p>Explore the amazing world of jungle animals from around the globe</p>
          <Link to="/animals" className="cta-button">Explore Animals</Link>
        </div>
      </section>

      <section className="features">
        <h2>What You Can Discover</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">🐯</div>
            <h3>Amazing Animals</h3>
            <p>Learn about diverse jungle species and their unique characteristics</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🌿</div>
            <h3>Natural Habitats</h3>
            <p>Discover the different environments where these animals thrive</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎮</div>
            <h3>Fun Games</h3>
            <p>Test your knowledge with our interactive animal trivia game</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <h2>Jungle Conservation Matters</h2>
        <div className="stats-grid">
          <div className="stat">
            <h3>8+</h3>
            <p>Animal Species</p>
          </div>
          <div className="stat">
            <h3>4</h3>
            <p>Different Habitats</p>
          </div>
          <div className="stat">
            <h3>3</h3>
            <p>Endangered Species</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
