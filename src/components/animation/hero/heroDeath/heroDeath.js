import Spritesheet from 'react-responsive-spritesheet';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeroDeathImage from './heroDeath-min.png';
import recordPage from '../../../../actions/recordPage';
import './heroDeath.css';

const HeroDeath = (props) => {
  const { setRecordPage } = props;
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
        setRecordPage();
      }}
    />
  );
};

HeroDeath.propTypes = {
  setRecordPage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({ setRecordPage: () => dispatch(recordPage()) });

export default connect(
  null,
  mapDispatchToProps,
)(HeroDeath);
