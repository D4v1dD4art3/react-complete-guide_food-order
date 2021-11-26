import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(
        'https://react-http-practice-434f4-default-rtdb.firebaseio.com/Meals.json',
      );
      if (!response.ok) {
        throw new Error('something went wrong');
      }
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        if (Object.hasOwnProperty.call(responseData, key)) {
          const { name, description, price } = responseData[key];
          loadedMeals.push({
            id: key,
            name,
            description,
            price,
          });
        }
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeal().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>isLoading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      title={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
