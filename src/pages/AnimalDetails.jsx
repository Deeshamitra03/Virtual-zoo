import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './AnimalDetailsPage.css';

const AnimalDetailsPage = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/animals.json')
      .then(response => response.json())
      .then(data => {
        const foundAnimal = data.find(a => a.id === parseInt(id));
        setAnimal(foundAnimal);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading animal details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="animal-details loading">
        <h2>Loading animal information...</h2>
      </div>
    );
  }

  if (!animal) {
    return (
      <div className="animal-details not-found">
        <h2>Animal not found</h2>
        <Link to="/animals" className="back-link">← Back to Animals</Link>
      </div>
    );
  }

  return (
    <div className="animal-details">
      <Link to="/animals" className="back-link">← Back to Animals</Link>
      
      <div className="animal-hero">
        <div className="animal-image">
          <img src={animal.image} alt={animal.name} />
        </div>
        <div className="animal-basic-info">
          <h1>{animal.name}</h1>
          <p className="species">{animal.species}</p>
          <div className="info-badges">
            <span className="habitat">🌿 {animal.habitat}</span>
            <span className="diet">🍖 {animal.diet}</span>
            <span className="status">{animal.conservationStatus}</span>
          </div>
        </div>
      </div>

      <div className="animal-content">
        <div className="description-section">
          <h2>About the {animal.name}</h2>
          <p>{animal.description}</p>
        </div>

        <div className="facts-section">
          <h2>Interesting Facts</h2>
          <ul>
            {animal.facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>

        <div className="conservation-section">
          <h2>Conservation Status</h2>
          <div className={`status-block ${animal.conservationStatus.replace(' ', '-').toLowerCase()}`}>
            <h3>{animal.conservationStatus}</h3>
            <p>
              {animal.conservationStatus === 'Least Concern' 
                ? 'This species is not currently facing significant threats.'
                : 'This species faces threats to its survival and needs protection.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;