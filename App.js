import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Import your global styles

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const starshipsData = await getAllStarships();
        setStarships(starshipsData);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars App</h1>
        <div className="row">
          {starships.map((starship) => (
            <div key={starship.name} className="col-md-3">
              <StarshipCard name={starship.name} />
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;