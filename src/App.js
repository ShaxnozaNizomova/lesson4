import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Works from './components/Works';
import Steps from './components/Steps';
import Logos from './components/Logos';
import Team from './components/Team';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Services/>
      <Works/>
      <Steps/>
      <Logos/>
      <Team/>
    </div>
  )
}

export default App
