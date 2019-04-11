import React, { Fragment } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import HeroPreload from '../preload';
import heroIdleImage from './heroIdleImage-min.png';
import './heroIdle.css';

const HeroIdle = () => {
  const idleClass = 'hero-idle';
  return (
    <Fragment>
      <Spritesheet
        className={idleClass}
        image={heroIdleImage}
        widthFrame={387}
        heightFrame={350}
        steps={5}
        fps={10}
        loop
      />
      <HeroPreload />
    </Fragment>
  );
};

export default HeroIdle;
