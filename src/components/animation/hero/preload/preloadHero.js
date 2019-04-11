import React, { Fragment } from 'react';
import PreloadImage from 'react-preload-image';
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
  </Fragment>
);

export default PreloadHero;
