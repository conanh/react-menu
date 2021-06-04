import React, { useState, useEffect } from 'react';

import MenuItem from './MenuItem';
import Card from '../UI/Card';
import './Menu.css';

const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMeals = async () => {
    try {
      setIsLoading(true);
      const fetchedMeals = [];
      const response = await fetch('https://react-menu-1d60a-default-rtdb.firebaseio.com/meals.json');

      if (!response.ok) {
        throw new Error('Something went wrong!! ' + response.status + ' ' + response.statusText);
      }

      const data = await response.json();
      for (const property in data) {
        fetchedMeals.push({
          id: property,
          name: data[property].name,
          description: data[property].description,
          price: data[property].price
        });
      };
      setMeals(fetchedMeals);
      setIsLoading(false); 
      setError(null);
    }
    catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }
  
  useEffect(() => {
    fetchMeals();
  },[]);

  return (
    <Card className="menu">
      {error && <p className="error-text">{error}</p>}
      {isLoading ? <p>Meals are loading...</p> : meals.map(meal => {
        return (
        <MenuItem 
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      );})}
    </Card>
  );
};

export default Menu;