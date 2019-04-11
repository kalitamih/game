import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { history as historyPropTypes } from 'history-prop-types';
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
      history,
    } = this.props;
    const { value, result } = this.state;
    if (parseInt(value, 10) === result) setCureHero();
    else setCureMonster();
    history.push('/nothing');
  }

  heroAttack = () => {
    const {
      setHeroAttack,
      setMonsterAttack,
      history,
    } = this.props;
    const { value, result } = this.state;
    if (parseInt(value, 10) === result) {
      setHeroAttack();
    } else {
      setMonsterAttack();
    }
    history.push('/nothing');
  }

  handleMenu = (event) => {
    const { history } = this.props;
    event.preventDefault();
    history.push('/menu');
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
  setDefaultKey: PropTypes.func.isRequired,
  setMonsterAttack: PropTypes.func.isRequired,
  setHeroAttack: PropTypes.func.isRequired,
  setCureHero: PropTypes.func.isRequired,
  setCureMonster: PropTypes.func.isRequired,
  keyboard: PropTypes.bool.isRequired,
  history: PropTypes.shape(historyPropTypes).isRequired,
};

const mapStateToProps = store => ({ keyboard: store.keyboard.mathKey });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Mathematics));
