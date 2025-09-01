import React, { useState, useEffect } from 'react';
import AnimalCard from '../components/AnimalCard';
import './AnimalsPage.css';

const AnimalsPage = () => {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [habitatFilter, setHabitatFilter] = useState('all');

  useEffect(() => {
    fetch('/animals.json')
      .then(response => response.json())
      .then(data => {
        setAnimals(data);
        setFilteredAnimals(data);
      })
      .catch(error => console.error('Error loading animals:', error));
  }, []);

  useEffect(() => {
    let result = animals;
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(animal => 
        animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.species.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply habitat filter
    if (habitatFilter !== 'all') {
      result = result.filter(animal => animal.habitat === habitatFilter);
    }
    
    setFilteredAnimals(result);
  }, [searchTerm, habitatFilter, animals]);

  // Get unique habitats for filter
  const habitats = [...new Set(animals.map(animal => animal.habitat))];

  return (
    <div className="animals-page">
      <div className="page-header">
        <h1>Jungle Animals</h1>
        <p>Discover the amazing creatures that inhabit the world's jungles</p>
      </div>

      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search animals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span>🔍</span>
        </div>
        
        <div className="habitat-filter">
          <label>Filter by Habitat:</label>
          <select 
            value={habitatFilter} 
            onChange={(e) => setHabitatFilter(e.target.value)}
          >
            <option value="all">All Habitats</option>
            {habitats.map(habitat => (
              <option key={habitat} value={habitat}>{habitat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="animals-grid">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))
        ) : (
          <div className="no-results">
            <h2>No animals found matching your criteria</h2>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimalsPage;