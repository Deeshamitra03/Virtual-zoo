import React from 'react';
import './AboutUs.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Virtual Zoo</h1>
        <p>Discover the mission behind our jungle adventure</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Virtual Zoo was created to educate and inspire people about the incredible animals 
            that inhabit our world's jungles and rainforests. Through interactive exploration 
            and engaging content, we aim to foster appreciation for these magnificent creatures 
            and support conservation efforts worldwide.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">🌐</div>
              <h3>Virtual Exploration</h3>
              <p>Explore diverse jungle habitats and their inhabitants from anywhere in the world.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📚</div>
              <h3>Educational Content</h3>
              <p>Learn about animal behaviors, habitats, diets, and conservation status.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎮</div>
              <h3>Interactive Games</h3>
              <p>Test your knowledge with fun quizzes about jungle animals.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Conservation Awareness</h2>
          <p>
            Many of the animals featured in our virtual zoo face threats in the wild due to 
            habitat loss, climate change, and human activities. By learning about these 
            incredible creatures, we hope to inspire action to protect them and their natural 
            habitats for future generations.
          </p>
          <div className="conservation-stats">
            <div className="stat">
              <h3>3,000+</h3>
              <p>Species are endangered worldwide</p>
            </div>
            <div className="stat">
              <h3>80%</h3>
              <p>Of Earth's land animals live in forests</p>
            </div>
            <div className="stat">
              <h3>50%</h3>
              <p>Of the world's species live in rainforests</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Get Involved</h2>
          <p>
            You can help protect jungle animals and their habitats by supporting conservation 
            organizations, reducing your environmental footprint, and spreading awareness 
            about the importance of biodiversity.
          </p>
          <div className="action-buttons">
            <a href="#" className="action-button">Support Conservation</a>
            <a href="#" className="action-button">Learn More</a>
            <a href="#" className="action-button">Share Awareness</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;