import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import { history as historyPropTypes } from 'history-prop-types';
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
    const { history } = this.props;
    event.preventDefault();
    history.push('/menu');
  };

  heroCure = () => {
    const {
      setCureHero,
      setCureMonster,
      history,
    } = this.props;
    const { value, randomKey } = this.state;
    if (value === randomKey) setCureHero();
    else setCureMonster();
    history.push('/nothing');
  }

  heroAttack = () => {
    const {
      setHeroAttack,
      setMonsterAttack,
      history,
    } = this.props;
    const { value, randomKey } = this.state;
    if (value === randomKey) {
      setHeroAttack();
    } else {
      setMonsterAttack();
    }
    history.push('/nothing');
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
    const { history } = this.props;

    if (event.key === 'Enter') {
      this.heroAttack();
    }

    if (event.key === 'Escape') {
      history.push('/menu');
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
  setDefaultKey: PropTypes.func.isRequired,
  setMonsterAttack: PropTypes.func.isRequired,
  setHeroAttack: PropTypes.func.isRequired,
  setCureHero: PropTypes.func.isRequired,
  setCureMonster: PropTypes.func.isRequired,
  keyboard: PropTypes.bool.isRequired,
  history: PropTypes.shape(historyPropTypes).isRequired,
};

const mapStateToProps = store => ({ keyboard: store.keyboard.audioKey });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Audio));
