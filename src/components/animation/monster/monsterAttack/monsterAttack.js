import Spritesheet from 'react-responsive-spritesheet';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sound from 'react-sound';
import hurtHero from '../../../../actions/hurtHero';
import MonsterAttackSound from './attack.mp3';
import './monsterAttack.css';
import monsterAttackImage from './monsterAttack.png';

const MonsterAttack = (props) => {
  const { setHeroHurt } = props;
  const classAttack = 'monsterAttack';
  return (
    <Fragment>
      <Spritesheet
        className={classAttack}
        image={monsterAttackImage}
        widthFrame={799}
        heightFrame={660}
        steps={10}
        fps={10}
        onPause={() => {
          setHeroHurt();
        }}
      />
      <Sound
        url={MonsterAttackSound}
        playStatus={Sound.status.PLAYING}
      />
    </Fragment>
  );
};

MonsterAttack.propTypes = {
  setHeroHurt: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({ setHeroHurt: () => dispatch(hurtHero()) });

export default connect(
  null,
  mapDispatchToProps,
)(MonsterAttack);
