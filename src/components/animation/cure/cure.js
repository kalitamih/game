import Spritesheet from 'react-responsive-spritesheet';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sound from 'react-sound';
import cureDefault from '../../../actions/defaultCure';
import changeHeroHealth from '../../../actions/changeHeroHealth';
import changeMonsterHealth from '../../../actions/changeMonsterHealth';
import menuPage from '../../../actions/menuPage';
import cureSound from './cure.mp3';
import cureImage from './cure.png';

class Cure extends Component {
  render() {
    const { cure } = this.props;
    const { cureHero, cureMonster } = cure;
    const {
      setCureDefault,
      setHeroHealth,
      setMonsterHealth,
      setMenuPage,
    } = this.props;
    return (
      <Fragment>
        <Spritesheet
          image={cureImage}
          widthFrame={99}
          heightFrame={101}
          steps={10}
          fps={10}
          onPause={() => {
            if (cureHero) setHeroHealth(20);
            if (cureMonster) setMonsterHealth(20);
            setCureDefault();
            setMenuPage();
          }}
        />
        <Sound
          url={cureSound}
          playStatus={Sound.status.PLAYING}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
      </Fragment>
    );
  }
}

Cure.propTypes = {
  cure: PropTypes.shape({
    cureHero: PropTypes.bool,
    cureMonster: PropTypes.bool,
  }).isRequired,
  setMenuPage: PropTypes.func.isRequired,
  setHeroHealth: PropTypes.func.isRequired,
  setMonsterHealth: PropTypes.func.isRequired,
  setCureDefault: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({ cure: store.cure });

const mapDispatchToProps = dispatch => ({
  setMenuPage: () => dispatch(menuPage()),
  setHeroHealth: health => dispatch(changeHeroHealth(health)),
  setMonsterHealth: health => dispatch(changeMonsterHealth(health)),
  setCureDefault: () => dispatch(cureDefault()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cure);
