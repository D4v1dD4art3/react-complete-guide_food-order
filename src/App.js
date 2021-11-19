import React, { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Example from './components/UI/Example';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const shoCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Header onShowCart={shoCartHandler} onHideCart={hideCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
