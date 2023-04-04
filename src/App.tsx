import React from 'react';
import logo from './logo.svg';
import './App.css';

import energy from './energy_ball.png'
import tidus from './tidus.png'
import robot from './robot.png'
import laser from './laser.jpg'
function App() {
  return (
    <div className="App">
      <img src={tidus} className='character jumping-animation'/>
      <img className='energy-ball projectile' src={energy}/>
      <img src={laser} className='laser shoot'/>
      <img src={robot} className='villian attacked'/>
    </div>
  );
}

export default App;
