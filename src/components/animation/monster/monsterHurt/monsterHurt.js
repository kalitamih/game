import Spritesheet from 'react-responsive-spritesheet';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sound from 'react-sound';
import fightDefault from '../../../../actions/fightDefault';
import monsterDeath from '../../../../actions/monsterDeath';
import changeMonsterHealth from '../../../../actions/changeMonsterHealth';
import menuPage from '../../../../actions/menuPage';
import HurtMonsterSound from './hurt.mp3';
import HurtMonsterImage from './monsterHurt.png';
import './monsterHurt.css';

const MonsterHurt = (props) => {
  const {
    setFigthDefault,
    setMonsterDeath,
    setMonsterHealth,
    setMenuPage,
  } = props;
  const { health } = props;
  const hurtClass = 'monster-hurt';
  return (
    <Fragment>
      <Spritesheet
        className={hurtClass}
        image={HurtMonsterImage}
        widthFrame={595}
        heightFrame={469}
        steps={10}
        fps={10}
        onPause={() => {
          if (health > 20) {
            setMonsterHealth(-20);
            setMenuPage();
            setFigthDefault();
          } else {
            setMonsterHealth(-20);
            setMonsterDeath();
          }
        }}
      />
      <Sound
        url={HurtMonsterSound}
        playStatus={Sound.status.PLAYING}
      />
    </Fragment>
  );
};

MonsterHurt.propTypes = {
  setFigthDefault: PropTypes.func.isRequired,
  setMonsterDeath: PropTypes.func.isRequired,
  setMonsterHealth: PropTypes.func.isRequired,
  setMenuPage: PropTypes.func.isRequired,
  health: PropTypes.number.isRequired,
};

const mapStateToProps = store => ({ health: store.health.monster });

const mapDispatchToProps = dispatch => ({
  setMonsterHealth: health => dispatch(changeMonsterHealth(health)),
  setFigthDefault: () => dispatch(fightDefault()),
  setMonsterDeath: () => dispatch(monsterDeath()),
  setMenuPage: () => dispatch(menuPage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MonsterHurt);
