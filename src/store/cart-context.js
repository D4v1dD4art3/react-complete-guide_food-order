import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: (item) => {},
  removedItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
