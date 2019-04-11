import React, { Fragment } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import MonsterPreload from '../preload';
import MonsterIdleImage from './monsterIdle.png';
import './monsterIdle.css';

const MonsterIdle = () => {
  const classIdle = 'monster-idle';
  return (
    <Fragment>
      <Spritesheet
        className={classIdle}
        image={MonsterIdleImage}
        widthFrame={528}
        heightFrame={358}
        steps={10}
        fps={10}
        loop
      />
      <MonsterPreload />
    </Fragment>
  );
};

export default MonsterIdle;
