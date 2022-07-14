import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MealsSummary from './Components/MealsSummary/MealsSummary';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <MealsSummary/>
    </React.Fragment>
  );
}

export default App;
