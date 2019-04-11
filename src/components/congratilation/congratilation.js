import React from 'react';
import { connect } from 'react-redux';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';
import changeMonsterHealth from '../../actions/changeMonsterHealth';
import fightDefault from '../../actions/fightDefault';
import './congratilation.css';

const Congratilation = (props) => {
  const {
    history,
    setMonsterHealth,
    setFigthDefault,
  } = props;

  const handleNewMonster = (event) => {
    event.preventDefault();
    setMonsterHealth(100);
    history.push('/menu');
    setFigthDefault();
  };

  const keyHandle = (event) => {
    if (event.key === 'Enter') {
      setMonsterHealth(100);
      history.push('/menu');
      setFigthDefault();
    }
  };

  return (
    <div className="congratWindow">
      <span className="congratilation">Congratilation! You win!</span>
      <button className="btn select" type="button" onClick={handleNewMonster}>Next</button>
      <KeyboardEventHandler
        handleKeys={['Enter']}
        onKeyEvent={(key, e) => keyHandle(e)}
      />
    </div>
  );
};

Congratilation.propTypes = {
  setMonsterHealth: PropTypes.func.isRequired,
  setFigthDefault: PropTypes.func.isRequired,
  history: PropTypes.shape(historyPropTypes).isRequired,
};

const mapDispatchToProps = dispatch => ({
  setMonsterHealth: health => dispatch(changeMonsterHealth(health)),
  setFigthDefault: () => dispatch(fightDefault()),
});

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(Congratilation));
