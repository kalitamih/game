import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { history as historyPropTypes } from 'history-prop-types';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import mathKey from '../../actions/mathKey';
import audioKey from '../../actions/audioKey';
import translationKey from '../../actions/translationKey';
import './menu.css';

const Menu = (props) => {
  const {
    setMathKey,
    setAudioKey,
    setTranslationKey,
    history,
  } = props;

  const handleArithmetics = (event) => {
    event.preventDefault();
    history.push('/math');
  };

  const handleAudio = (event) => {
    event.preventDefault();
    history.push('/audio');
  };

  const handleTranslate = (event) => {
    event.preventDefault();
    history.push('/translation');
  };

  const keyHandle = (event) => {
    if (event.key === '1') {
      setMathKey();
      history.push('/math');
    }

    if (event.key === '2') {
      setAudioKey();
      history.push('/audio');
    }

    if (event.key === '3') {
      setTranslationKey();
      history.push('/translation');
    }
  };

  return (
    <div className="casts">
      <div className="descriptionKeyBoard">Select task</div>
      <button className="btn select" type="button" onClick={handleArithmetics}>Math 1</button>
      <button className="btn select" type="button" onClick={handleAudio}>Audio 2</button>
      <button className="btn select" type="button" onClick={handleTranslate}>Translate 3</button>
      <KeyboardEventHandler
        handleKeys={['1', '2', '3']}
        onKeyEvent={(key, e) => keyHandle(e)}
      />
    </div>
  );
};

Menu.propTypes = {
  setMathKey: PropTypes.func.isRequired,
  setAudioKey: PropTypes.func.isRequired,
  setTranslationKey: PropTypes.func.isRequired,
  history: PropTypes.shape(historyPropTypes).isRequired,
};

const mapDispatchToProps = dispatch => ({
  setMathKey: () => dispatch(mathKey()),
  setAudioKey: () => dispatch(audioKey()),
  setTranslationKey: () => dispatch(translationKey()),
});

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(Menu));
