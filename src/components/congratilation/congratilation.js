import React from 'react';
import { connect } from 'react-redux';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import PropTypes from 'prop-types';
import changeMonsterHealth from '../../actions/changeMonsterHealth';
import fightDefault from '../../actions/fightDefault';
import menuPage from '../../actions/menuPage';
import './congratilation.css';

const Congratilation = (props) => {
  const {
    setMonsterHealth,
    setFigthDefault,
    setMenuPage,
  } = props;

  const handleNewMonster = (event) => {
    event.preventDefault();
    setMonsterHealth(100);
    setMenuPage();
    setFigthDefault();
  };

  const keyHandle = (event) => {
    if (event.key === 'Enter') {
      setMonsterHealth(100);
      setMenuPage();
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
  setMenuPage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setMonsterHealth: health => dispatch(changeMonsterHealth(health)),
  setFigthDefault: () => dispatch(fightDefault()),
  setMenuPage: () => dispatch(menuPage()),
});


export default connect(
  null,
  mapDispatchToProps,
)(Congratilation);
