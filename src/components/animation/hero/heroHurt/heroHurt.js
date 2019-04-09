import Spritesheet from 'react-responsive-spritesheet';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sound from 'react-sound';
import HeroHurtImage from './heroHurt-min.png';
import fightDefault from '../../../../actions/fightDefault';
import heroDeath from '../../../../actions/heroDeath';
import changeHeroHealth from '../../../../actions/changeHeroHealth';
import menuPage from '../../../../actions/menuPage';
import HurtHeroSound from './hurt.mp3';
import './heroHurt.css';

const HeroHurt = (props) => {
  const {
    setFightDefault,
    setHeroDeath,
    setHeroHealth,
    setMenuPage,
  } = props;
  const { health } = props;
  const hurtClass = 'hero-hurt';
  return (
    <Fragment>
      <Spritesheet
        className={hurtClass}
        image={HeroHurtImage}
        widthFrame={490}
        heightFrame={387}
        steps={5}
        fps={10}
        onPause={() => {
          if (health > 20) {
            setHeroHealth(-20);
            setMenuPage();
            setFightDefault();
          } else {
            setHeroHealth(-20);
            setHeroDeath();
          }
        }}
      />
      <Sound
        url={HurtHeroSound}
        playStatus={Sound.status.PLAYING}
      />
    </Fragment>
  );
};

HeroHurt.propTypes = {
  setFightDefault: PropTypes.func.isRequired,
  setHeroDeath: PropTypes.func.isRequired,
  setHeroHealth: PropTypes.func.isRequired,
  setMenuPage: PropTypes.func.isRequired,
  health: PropTypes.number.isRequired,
};

const mapStateToProps = store => ({ health: store.health.hero });

const mapDispatchToProps = dispatch => ({
  setFightDefault: () => dispatch(fightDefault()),
  setHeroDeath: () => dispatch(heroDeath()),
  setHeroHealth: health => dispatch(changeHeroHealth(health)),
  setMenuPage: () => dispatch(menuPage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeroHurt);
