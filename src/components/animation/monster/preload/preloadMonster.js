import React, { Fragment } from 'react';
import PreloadImage from 'react-preload-image';
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
  </Fragment>
);

export default PreloadMonster;
