import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './healthMonster.css';

const MonsterHealth = (props) => {
  const { health, kill } = props;

  const divStyle = {
    border: '2px solid white',
    background: 'red',
    width: `${health * 2}px`,
    height: '30px',
  };

  if (health) {
    return (
      <div className="health">
        <h3>
          Round &nbsp;
          { kill + 1 }
        </h3>
        <div style={divStyle}><h4>{ health }</h4></div>
      </div>
    );
  }
  return (
    <div className="skull" />
  );
};

MonsterHealth.propTypes = {
  health: PropTypes.number.isRequired,
  kill: PropTypes.number.isRequired,
};

const mapStateToProps = store => ({
  health: store.health.monster,
  kill: store.kill.kill,
});

export default connect(
  mapStateToProps,
  null,
)(MonsterHealth);
