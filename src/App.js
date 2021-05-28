import React, { useState } from 'react';

import Card from './components/UI/Card';
import Header from './components/navigation/Header';
import Menu from './components/menu/Menu';
import Cart from './components/cart/Cart';
// import CartContext from './context/cart-context';
import CartState from './context/CartState';
import './App.css';


const App = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCartHandler = () => {
    setShowCart(!showCart);
  };

  return (
    // <CartContext.Provider value={{cart, setCart}}>
    <CartState>
      {showCart && <Cart toggleCart={toggleCartHandler} />}
      <Header toggleCart={toggleCartHandler} />
      <Card dark={true} className="welcome">
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favorite meal from our broad slection of available meals and enjoy a delicious lunch of dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
      </Card>
      <Menu />
    </CartState>
    // </CartContext.Provider>
  );
};

export default App;
