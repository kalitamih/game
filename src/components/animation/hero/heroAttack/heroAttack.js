import Spritesheet from 'react-responsive-spritesheet';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import hurtMonster from '../../../../actions/hurtMonster';
import heroAttackImage from './heroAttackImage-min.png';
import './heroAttack.css';

const HeroAttack = (props) => {
  const { setMonsterHurt } = props;
  const attackClass = 'hero-attack';
  return (
    <Spritesheet
      className={attackClass}
      image={heroAttackImage}
      widthFrame={685}
      heightFrame={410}
      steps={5}
      fps={10}
      onPause={() => {
        setMonsterHurt();
      }}
    />
  );
};

HeroAttack.propTypes = {
  setMonsterHurt: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({ setMonsterHurt: () => dispatch(hurtMonster()) });

export default connect(
  null,
  mapDispatchToProps,
)(HeroAttack);
