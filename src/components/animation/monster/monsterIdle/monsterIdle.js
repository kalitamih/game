import Spritesheet from 'react-responsive-spritesheet';
import React from 'react';
import MonsterIdleImage from './monsterIdle.png';
import './monsterIdle.css';

const MonsterIdle = () => {
  const classIdle = 'monster-idle';
  return (
    <Spritesheet
      className={classIdle}
      image={MonsterIdleImage}
      widthFrame={528}
      heightFrame={358}
      steps={10}
      fps={10}
      loop
    />
  );
};

export default MonsterIdle;
