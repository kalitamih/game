import React from 'react';
import Hero from '../hero';
import Monster from '../monster';
import HealthCommon from '../health/healthCommon';
import ModalWindow from '../modalWindow';
import './gameLayout.css';

const GameLayout = () => (
  <div className="layout">
    <HealthCommon />
    <ModalWindow />
    <div className="fightArea">
      <Hero />
      <Monster />
    </div>
  </div>
);

export default GameLayout;
