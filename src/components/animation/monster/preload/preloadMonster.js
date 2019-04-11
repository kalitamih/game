import React, { Fragment } from 'react';
import PreloadImage from 'react-preload-image';
import Sound from 'react-sound';
import HurtMonsterSound from '../monsterHurt/hurt.mp3';
import MonsterAttackSound from '../monsterAttack/attack.mp3';
import monsterHurtImage from '../monsterHurt/monsterHurt.png';
import monsterAttackImage from '../monsterAttack/monsterAttack.png';
import monsterDeathImage from '../monsterDeath/monsterDeath.png';

const PreloadMonster = () => (
  <Fragment>
    <PreloadImage
      style={{
        display: 'none',
      }}
      src={monsterHurtImage}
    />
    <PreloadImage
      style={{
        display: 'none',
      }}
      src={monsterAttackImage}
    />
    <PreloadImage
      style={{
        display: 'none',
      }}
      src={monsterDeathImage}
    />
    <Sound
      url={HurtMonsterSound}
      playStatus={Sound.status.STOP}
    />
    <Sound
      url={MonsterAttackSound}
      playStatus={Sound.status.STOP}
    />
  </Fragment>
);

export default PreloadMonster;
