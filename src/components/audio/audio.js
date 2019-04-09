import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types';
import mapDispatchToProps from '../mapDispatchToProps/mapDispatchToProps';
import { audioObject, audioGuess } from './pronunciation';
import Buttons from '../buttons';
import './audio.css';

class Audio extends Component {
  state = {
    value: '',
    randomKey: '',
  }

  audio = React.createRef();

  textInput = React.createRef();

  componentDidMount() {
    this.setState({ randomKey: audioGuess(audioObject) });
    this.textInput.current.focus();
  }

  handleMenu = (event) => {
    const { setMenuPage } = this.props;
    event.preventDefault();
    setMenuPage();
  };

  heroCure = () => {
    const {
      setCureHero,
      setCureMonster,
      setNothingPage,
    } = this.props;
    const { value, randomKey } = this.state;
    if (value === randomKey) setCureHero();
    else setCureMonster();
    setNothingPage();
  }

  heroAttack = () => {
    const {
      setHeroAttack,
      setMonsterAttack,
      setNothingPage,
    } = this.props;
    const { value, randomKey } = this.state;
    if (value === randomKey) {
      setHeroAttack();
    } else {
      setMonsterAttack();
    }
    setNothingPage();
  }

  handleHeroAttack = (event) => {
    event.preventDefault();
    this.heroAttack();
  };

  handleHeroCure = (event) => {
    event.preventDefault();
    this.heroCure();
  };

  handleChange = (event) => {
    const { keyboard, setDefaultKey } = this.props;
    this.setState({ value: event.target.value });
    if (keyboard) {
      this.setState({ value: '' });
      setDefaultKey();
    }
  }

  handleKeyHeroAttack = (event) => {
    const { setMenuPage } = this.props;

    if (event.key === 'Enter') {
      this.heroAttack();
    }

    if (event.key === 'Escape') {
      setMenuPage();
    }

    if (event.ctrlKey) {
      this.heroCure();
    }

    if (event.key === 'Shift') {
      this.audio.current.audioEl.play();
    }
  }

  render() {
    const { value, randomKey } = this.state;
    return (
      <div className="audioMet">
        <span className="taskHeading">Enter the word that you heard(Use Shift to listen word):</span>
        <span className="task">
          <ReactAudioPlayer
            ref={this.audio}
            src={audioObject[randomKey]}
            controls
          />
        </span>
        <span className="taskHeading">Your answer:</span>
        <input type="text" ref={this.textInput} value={value} onChange={this.handleChange} onKeyDown={this.handleKeyHeroAttack} />
        <Buttons attack={this.handleHeroAttack} cure={this.handleHeroCure} menu={this.handleMenu} />
      </div>
    );
  }
}

Audio.propTypes = {
  setMenuPage: PropTypes.func.isRequired,
  setDefaultKey: PropTypes.func.isRequired,
  setMonsterAttack: PropTypes.func.isRequired,
  setNothingPage: PropTypes.func.isRequired,
  setHeroAttack: PropTypes.func.isRequired,
  setCureHero: PropTypes.func.isRequired,
  setCureMonster: PropTypes.func.isRequired,
  keyboard: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({ keyboard: store.keyboard.audioKey });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Audio);
