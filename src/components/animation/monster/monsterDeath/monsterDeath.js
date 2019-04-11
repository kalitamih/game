import Spritesheet from 'react-responsive-spritesheet';
import React from 'react';
import { connect } from 'react-redux';
import { history as historyPropTypes } from 'history-prop-types';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import monsterDeath from './monsterDeath.png';
import killMonster from '../../../../actions/kill';
import './monsterDeath.css';

const MonsterDeath = (props) => {
  const { setKillMonster, history } = props;
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
        history.push('/congratilation');
      }}
    />
  );
};

MonsterDeath.propTypes = {
  setKillMonster: PropTypes.func.isRequired,
  history: PropTypes.shape(historyPropTypes).isRequired,
};

const mapDispatchToProps = dispatch => ({
  setKillMonster: () => dispatch(killMonster()),
});

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(MonsterDeath));
