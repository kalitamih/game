import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { history as historyPropTypes } from 'history-prop-types';
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
    const {
      value,
      randomKey,
    } = this.state;
    if (translationObject[randomKey].includes(value)) setCureHero();
    else setCureMonster();
    history.push('/nothing');
  }

  heroAttack = () => {
    const {
      setHeroAttack,
      setMonsterAttack,
      history,
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
  }

  render() {
    const { randomKey, value } = this.state;
    return (
      <Fragment>
        <div className="translationMet">
          <span className="taskHeading">{randomKey}</span>
          <span className="taskHeading">Your answer:</span>
          <input
            type="text"
            id="userAudioInput"
            ref={this.textInput}
            value={value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyHeroAttack}
          />
          <Buttons
            attack={this.handleHeroAttack}
            cure={this.handleHeroCure}
            menu={this.handleMenu}
          />
        </div>
      </Fragment>
    );
  }
}

Translation.propTypes = {
  history: PropTypes.shape(historyPropTypes).isRequired,
  setDefaultKey: PropTypes.func.isRequired,
  setMonsterAttack: PropTypes.func.isRequired,
  setHeroAttack: PropTypes.func.isRequired,
  setCureHero: PropTypes.func.isRequired,
  setCureMonster: PropTypes.func.isRequired,
  keyboard: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({ keyboard: store.keyboard.translationKey });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Translation));
