import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import mapDispatchToProps from '../mapDispatchToProps/mapDispatchToProps';
import randomMathTask from './randomMathTask';
import Buttons from '../buttons';
import './mathematics.css';

class Mathematics extends Component {
  state = {
    firstNumber: null,
    secondNumber: null,
    result: null,
    value: '',
  }

  textInput = React.createRef();

  componentDidMount() {
    this.setState(prevState => (
      Object.assign(prevState, randomMathTask())
    ));
    this.textInput.current.focus();
  }

  heroCure = () => {
    const {
      setCureHero,
      setCureMonster,
      setNothingPage,
    } = this.props;
    const { value, result } = this.state;
    if (parseInt(value, 10) === result) setCureHero();
    else setCureMonster();
    setNothingPage();
  }

  heroAttack = () => {
    const {
      setHeroAttack,
      setMonsterAttack,
      setNothingPage,
    } = this.props;
    const { value, result } = this.state;
    if (parseInt(value, 10) === result) {
      setHeroAttack();
    } else {
      setMonsterAttack();
    }
    setNothingPage();
  }

  handleMenu = (event) => {
    const { setMenuPage } = this.props;
    event.preventDefault();
    setMenuPage();
  };

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
    const {
      firstNumber,
      secondNumber,
      mathOperation,
      value,
    } = this.state;
    return (
      <div className="mathMet">
        <span className="taskHeading">Solve an example:</span>
        <span className="task">
          {firstNumber}
          &nbsp;
          {mathOperation}
          &nbsp;
          {secondNumber}
        </span>
        <span className="taskHeading">Your answer:</span>
        <input type="text" ref={this.textInput} value={value} onChange={this.handleChange} onKeyDown={this.handleKeyHeroAttack} />
        <Buttons attack={this.handleHeroAttack} cure={this.handleHeroCure} menu={this.handleMenu} />
      </div>
    );
  }
}

Mathematics.propTypes = {
  setMenuPage: PropTypes.func.isRequired,
  setDefaultKey: PropTypes.func.isRequired,
  setMonsterAttack: PropTypes.func.isRequired,
  setNothingPage: PropTypes.func.isRequired,
  setHeroAttack: PropTypes.func.isRequired,
  setCureHero: PropTypes.func.isRequired,
  setCureMonster: PropTypes.func.isRequired,
  keyboard: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({ keyboard: store.keyboard.mathKey });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mathematics);
