import { Fragment } from 'react';
// import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          alt="restaurant"
        />
      </div>
    </Fragment>
  );
};

export default Header;
