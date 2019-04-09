import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import mathPage from '../../actions/mathPage';
import audioPage from '../../actions/audioPage';
import translationPage from '../../actions/translationPage';
import mathKey from '../../actions/mathKey';
import audioKey from '../../actions/audioKey';
import translationKey from '../../actions/translationKey';
import './menu.css';

const Menu = (props) => {
  const {
    setMathPage,
    setAudioPage,
    setTranslatePage,
    setMathKey,
    setAudioKey,
    setTranslationKey,
  } = props;

  const handleArithmetics = (event) => {
    event.preventDefault();
    setMathPage();
  };

  const handleAudio = (event) => {
    event.preventDefault();
    setAudioPage();
  };

  const handleTranslate = (event) => {
    event.preventDefault();
    setTranslatePage();
  };

  const keyHandle = (event) => {
    if (event.key === '1') {
      setMathKey();
      setMathPage();
    }

    if (event.key === '2') {
      setAudioKey();
      setAudioPage();
    }

    if (event.key === '3') {
      setTranslationKey();
      setTranslatePage();
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
  setMathPage: PropTypes.func.isRequired,
  setAudioPage: PropTypes.func.isRequired,
  setTranslatePage: PropTypes.func.isRequired,
  setMathKey: PropTypes.func.isRequired,
  setAudioKey: PropTypes.func.isRequired,
  setTranslationKey: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setMathPage: () => dispatch(mathPage()),
  setAudioPage: () => dispatch(audioPage()),
  setTranslatePage: () => dispatch(translationPage()),
  setMathKey: () => dispatch(mathKey()),
  setAudioKey: () => dispatch(audioKey()),
  setTranslationKey: () => dispatch(translationKey()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Menu);
