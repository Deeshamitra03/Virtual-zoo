import React from 'react';
import { Link } from 'react-router-dom';
import './AnimalCard.css';

const AnimalCard = ({ animal }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Critically Endangered': return '#d32f2f';
      case 'Endangered': return '#f57c00';
      case 'Vulnerable': return '#fbc02d';
      case 'Near Threatened': return '#ffeb3b';
      default: return '#4caf50';
    }
  };

  return (
    <div className="animal-card">
      <div className="card-image">
        <img src={animal.image} alt={animal.name} />
        <div 
          className="conservation-status"
          style={{ backgroundColor: getStatusColor(animal.conservationStatus) }}
        >
          {animal.conservationStatus}
        </div>
      </div>
      <div className="card-content">
        <h3>{animal.name}</h3>
        <p className="species">{animal.species}</p>
        <div className="card-details">
          <span className="habitat">🌿 {animal.habitat}</span>
          <span className="diet">🍖 {animal.diet}</span>
        </div>
        <p className="description">{animal.description.substring(0, 100)}...</p>
        <Link to={`/animal/${animal.id}`} className="details-link">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default AnimalCard;