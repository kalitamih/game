import Spritesheet from 'react-responsive-spritesheet';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import monsterDeath from './monsterDeath.png';
import killMonster from '../../../../actions/kill';
import congratilationPage from '../../../../actions/congratilation';
import './monsterDeath.css';

const MonsterDeath = (props) => {
  const { setKillMonster, setCongratilationPage } = props;
  const deathClass = 'monster-death';
  return (
    <Spritesheet
      className={deathClass}
      image={monsterDeath}
      widthFrame={592}
      heightFrame={375}
      steps={10}
      fps={10}
      onPause={() => {
        setKillMonster();
        setCongratilationPage();
      }}
    />
  );
};

MonsterDeath.propTypes = {
  setKillMonster: PropTypes.func.isRequired,
  setCongratilationPage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setKillMonster: () => dispatch(killMonster()),
  setCongratilationPage: () => dispatch(congratilationPage()),
});

export default connect(
  null,
  mapDispatchToProps,
)(MonsterDeath);
