import React from 'react';
import HeroHealth from '../healthHero';
import MonsterHealth from '../healthMonster';
import './health.css';

const Health = () => (
  <div className="flex-health">
    <HeroHealth />
    <MonsterHealth />
  </div>
);

export default Health;
