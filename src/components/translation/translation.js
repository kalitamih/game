import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import mapDispatchToProps from '../mapDispatchToProps/mapDispatchToProps';
import { translationObject, translationGuess } from './vocabulary';
import Buttons from '../buttons';
import './translation.css';

class Translation extends Component {
  state = {
    value: '',
    randomKey: '',
  };

  textInput = React.createRef();

  componentDidMount() {
    this.setState({ randomKey: translationGuess(translationObject) });
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
    const {
      value,
      randomKey,
    } = this.state;
    if (translationObject[randomKey].includes(value)) setCureHero();
    else setCureMonster();
    setNothingPage();
  }

  heroAttack = () => {
    const {
      setHeroAttack,
      setMonsterAttack,
      setNothingPage,
    } = this.props;
    const {
      value,
      randomKey,
    } = this.state;
    if (translationObject[randomKey].includes(value)) {
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
  }

  render() {
    const { randomKey, value } = this.state;
    return (
      <Fragment>
        <div className="translationMet">
          <span className="taskHeading">{randomKey}</span>
          <span className="taskHeading">Your answer:</span>
          <input type="text" id="userAudioInput" ref={this.textInput} value={value} onChange={this.handleChange} onKeyDown={this.handleKeyHeroAttack} />
          <Buttons attack={this.handleHeroAttack} cure={this.handleHeroCure} menu={this.handleMenu} />
        </div>
      </Fragment>
    );
  }
}

Translation.propTypes = {
  setMenuPage: PropTypes.func.isRequired,
  setDefaultKey: PropTypes.func.isRequired,
  setMonsterAttack: PropTypes.func.isRequired,
  setNothingPage: PropTypes.func.isRequired,
  setHeroAttack: PropTypes.func.isRequired,
  setCureHero: PropTypes.func.isRequired,
  setCureMonster: PropTypes.func.isRequired,
  keyboard: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({ keyboard: store.keyboard.translationKey });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Translation);
