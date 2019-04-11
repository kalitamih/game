import Spritesheet from 'react-responsive-spritesheet';
import React, { Fragment } from 'react';
import { history as historyPropTypes } from 'history-prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sound from 'react-sound';
import HeroHurtImage from './heroHurt-min.png';
import fightDefault from '../../../../actions/fightDefault';
import heroDeath from '../../../../actions/heroDeath';
import changeHeroHealth from '../../../../actions/changeHeroHealth';
import HurtHeroSound from './hurt.mp3';
import './heroHurt.css';

const HeroHurt = (props) => {
  const {
    setFightDefault,
    setHeroDeath,
    setHeroHealth,
  } = props;
  const { health, history } = props;
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
            setFightDefault();
            history.push('/menu');
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
  health: PropTypes.number.isRequired,
  history: PropTypes.shape(historyPropTypes).isRequired,
};

const mapStateToProps = store => ({ health: store.health.hero });

const mapDispatchToProps = dispatch => ({
  setFightDefault: () => dispatch(fightDefault()),
  setHeroDeath: () => dispatch(heroDeath()),
  setHeroHealth: health => dispatch(changeHeroHealth(health)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(HeroHurt));
