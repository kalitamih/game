import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './healthHero.css';

const HeroHealth = (props) => {
  const { login, health } = props;

  const divStyle = {
    border: '2px solid white',
    background: 'red',
    width: `${health * 2}px`,
    height: '30px',
    text: 'center',
  };

  if (health) {
    return (
      <div className="health">
        <h3>{login}</h3>
        <div style={divStyle}><h4>{health}</h4></div>
      </div>
    );
  }
  return (
    <div className="skullHero" />
  );
};

HeroHealth.propTypes = {
  health: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
};

const mapStateToProps = store => ({
  health: store.health.hero,
  login: store.user.login,
});

export default connect(
  mapStateToProps,
  null,
)(HeroHealth);
