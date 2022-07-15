import React, { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import AvailableMeals from './Components/Meals/AvailableMeals';
import MealsSummary from './Components/MealsSummary/MealsSummary';
import { CartContextProvider } from './Components/store/CartContext';

function App() {

  const [toggleCart, setToggleCart] = useState(false);
  const toggleCartHandler = () => {
    setToggleCart(prevState => !prevState)
  }

  return (
    <CartContextProvider>
      {toggleCart && <Cart onToggleCart={toggleCartHandler} />}
      <Header onToggleCart={toggleCartHandler} />
      <MealsSummary />
      <AvailableMeals />
    </CartContextProvider>
  );
}

export default App;
