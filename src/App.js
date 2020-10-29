import React from 'react';
import './App.scss';
import Header from './components/header-nav/Header';
import AppNavigation from './navigation/AppNavigation';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from './redux/cartSlice';

function App() {
  const itemsInCart = useSelector(selectCartItems);
  
  return (
    <div className="App">
      <Router>
        <Header itemsInCart={itemsInCart}/>
        <AppNavigation />
      </Router>
    </div>
  );
}

export default App;
