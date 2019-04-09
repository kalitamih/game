import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './components/loginPage/login';
import GameLayout from './components/gameLayout/gameLayout';
import './App.css';

const App = (props) => {
  const { login } = props;
  return (
    <div className="App">
      { !login && <Login /> }
      { login && <GameLayout /> }
    </div>
  );
};

App.propTypes = {
  login: PropTypes.string.isRequired,
};

const mapStateToProps = store => ({ login: store.user.login });

export default connect(
  mapStateToProps,
)(App);
