import Spritesheet from 'react-responsive-spritesheet';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { history as historyPropTypes } from 'history-prop-types';
import PropTypes from 'prop-types';
import HeroDeathImage from './heroDeath-min.png';
import './heroDeath.css';

const HeroDeath = (props) => {
  const { history } = props;
  const deathClass = 'hero-death';
  return (
    <Spritesheet
      className={deathClass}
      image={HeroDeathImage}
      widthFrame={381}
      heightFrame={350}
      steps={5}
      fps={10}
      onPause={() => {
        history.push('/records');
      }}
    />
  );
};

HeroDeath.propTypes = {
  history: PropTypes.shape(historyPropTypes).isRequired,
};

export default withRouter(HeroDeath);
