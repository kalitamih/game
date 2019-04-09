import Spritesheet from 'react-responsive-spritesheet';
import React from 'react';
import cureImage from './explosition.png';

const Explosition = () => (
  <Spritesheet
    image={cureImage}
    widthFrame={192}
    heightFrame={192}
    steps={17}
    fps={10}
  />
);

export default Explosition;
