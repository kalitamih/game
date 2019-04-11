import Spritesheet from 'react-responsive-spritesheet';
import React from 'react';
import heroIdleImage from './heroIdleImage-min.png';
import './heroIdle.css';

const HeroIdle = () => {
  const idleClass = 'hero-idle';
  return (
    <Spritesheet
      className={idleClass}
      image={heroIdleImage}
      widthFrame={387}
      heightFrame={350}
      steps={5}
      fps={10}
      loop
    />
  );
};

export default HeroIdle;
