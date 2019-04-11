import React, { Fragment } from 'react';
import PreloadImage from 'react-preload-image';
import Sound from 'react-sound';
import HurtHeroSound from '../heroHurt/hurt.mp3';
import heroHurtImage from '../heroHurt/heroHurt-min.png';
import heroAttackImage from '../heroAttack/heroAttackImage-min.png';
import heroDeathImage from '../heroDeath/heroDeath-min.png';

const PreloadHero = () => (
  <Fragment>
    <PreloadImage
      style={{
        display: 'none',
      }}
      src={heroHurtImage}
    />
    <PreloadImage
      style={{
        display: 'none',
      }}
      src={heroAttackImage}
    />
    <PreloadImage
      style={{
        display: 'none',
      }}
      src={heroDeathImage}
    />
    <Sound
      url={HurtHeroSound}
      playStatus={Sound.status.STOP}
    />
  </Fragment>
);

export default PreloadHero;
