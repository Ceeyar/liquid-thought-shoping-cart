import React from 'react';
import './App.scss';
import Header from './components/header-nav/Header';
import AppNavigation from './navigation/AppNavigation';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppNavigation />
      </Router>
    </div>
  );
}

export default App;
