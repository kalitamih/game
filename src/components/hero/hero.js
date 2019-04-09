import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeroAttack from '../animation/hero/heroAttack';
import HeroHurt from '../animation/hero/heroHurt';
import HeroIdle from '../animation/hero/heroIdle';
import HeroDeath from '../animation/hero/heroDeath';
import Explosition from '../animation/explosition';
import Cure from '../animation/cure';
import './hero.css';

const Hero = (props) => {
  const {
    heroIdle,
    heroHurt,
    heroAttack,
    heroDeath,
  } = props;
  const { cureHero } = props;
  return (
    <Fragment>
      { heroIdle && <HeroIdle /> }
      { heroAttack && <HeroAttack /> }
      { heroHurt && <HeroHurt /> }
      { heroDeath && <HeroDeath /> }
      <div className="heroExplosition">
        { heroHurt && <Explosition /> }
        { cureHero && <Cure /> }
      </div>
    </Fragment>
  );
};

Hero.propTypes = {
  heroIdle: PropTypes.bool.isRequired,
  heroHurt: PropTypes.bool.isRequired,
  heroAttack: PropTypes.bool.isRequired,
  heroDeath: PropTypes.bool.isRequired,
  cureHero: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  heroIdle: store.figth.heroIdle,
  heroHurt: store.figth.heroHurt,
  heroAttack: store.figth.heroAttack,
  heroDeath: store.figth.heroDeath,
  cureHero: store.cure.cureHero,
});

export default connect(
  mapStateToProps,
  null,
)(Hero);
