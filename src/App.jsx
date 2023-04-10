import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Category from './components/Category';

const App = () => {
  return (
    <div>
      <Header/>
      <Statistics/>
      <Outlet/>
      <Category/>
    </div>
  );
};

export default App;