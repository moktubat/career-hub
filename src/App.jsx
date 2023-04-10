import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Home from './components/Home';
import Statistics from './components/Statistics';

const App = () => {
  return (
    <div>
      <Header/>
      <Statistics/>
      <Outlet/>
    </div>
  );
};

export default App;